import * as React from "react"
import { Frame, FrameProps, PropertyControls, ControlType } from "framer"
import { Menu, Dropdown as AntDropdown, Icon } from "antd"
import "./App.css"
import { centerInContainer } from "./Utils"

declare type OverlayFunc = () => React.ReactNode;

interface Props extends FrameProps {
    text: string
    iconName: string
    trigger?: ('click' | 'hover' | 'contextMenu')[];
    overlay: React.ReactNode | OverlayFunc
    disabled?: boolean;
    getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement
    placement: "topLeft" | "topCenter" | "topRight" | "bottomLeft" | "bottomCenter" | "bottomRight"
    overlayStyle?: React.CSSProperties;
    button: boolean
    buttonType: "default" | "primary" | "ghost" | "dashed" | "danger" | "link"
    options: string[]
}

export class Dropdown extends React.Component<Props> {
    static defaultProps = {
        width: 130,
        height: 34,
        placement: 'bottomLeft',
        trigger: ['hover'],
        buttonType: 'default',
        text: 'Dropdown',
        iconName: 'ellipsis'
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
        text: { type: ControlType.String, title: "Text" },
        iconName: { type: ControlType.String, title: "Icon name" },
        trigger: {
            type: ControlType.Enum,
            title: "Trigger",
            options: [
                "click",
                "hover",
                "contextMenu",
            ],
        },
        disabled: {
            type: ControlType.Boolean,
            title: "Disabled",
        },
        placement: {
            type: ControlType.Enum,
            title: "Placement",
            options: ["topLeft", "topCenter", "topRight", "bottomLeft", "bottomCenter", "bottomRight"]
        },
        button: {
            type: ControlType.Boolean,
            title: "Button",
        },
        buttonType: {
            type: ControlType.Enum,
            title: "Type",
            options: [
                "default",
                "primary",
                "ghost",
                "dashed",
                "danger",
                "link",
            ],
            hidden(props) {
                return props.button === false;
            }
        },
        options: {
            type: ControlType.Array,
            propertyControl: {
                type: ControlType.String,
            },
            defaultValue: ['Paris', 'New York', 'London', 'Hong Kong'],
            title: 'Options',
        },
    }

    render() {
        const { text, iconName, trigger, options, overlay, disabled, getPopupContainer, placement, overlayStyle, button, buttonType, ...rest } = this.props
        const ButtonProps = {
            iconName,
            text,
            disabled,
            overlay,
            placement,
            trigger,
            buttonType,
        }
        const ComponentProps = {
            text,
            disabled,
            overlay,
            placement,
            trigger,
        }

        const menu = (
            <Menu>
                {
                    options.map((option) => {
                        return (
                            <Menu.Item key={option}>
                                {option}
                            </Menu.Item>
                        )
                    })}
            </Menu>
        )
        return (
            <Frame {...rest} {...centerInContainer(this.props)} background="none" >
                {button ?
                    (
                        <AntDropdown.Button
                            {...ButtonProps}
                            style={{
                                height: `100%`,
                                width: `100%`,
                            }}
                            overlay={menu}
                            type={buttonType}
                            icon={<Icon type={iconName} />}
                        >
                            
                            <a>{text}</a>
                        </AntDropdown.Button>
                    )
                    :
                    (
                        <AntDropdown
                            {...ComponentProps}
                            overlay={menu}
                        >
                            <a>{text}</a>
                        </AntDropdown>
                    )
                }
            </Frame>
        )
    }
}
