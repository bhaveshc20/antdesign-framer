import * as React from "react"
import { Menu as AntMenu } from "antd"
import { Frame, FrameProps, PropertyControls, ControlType } from "framer"
import "./App.css"
import { centerInContainer } from "./Utils"

export interface SelectParam {
    key: string
    keyPath: Array<string>
    item: any
    domEvent: Event
    selectedKeys: Array<string>
}
export interface ClickParam {
    key: string
    keyPath: Array<string>
    item: any
    domEvent: Event
}
export declare type MenuMode = "vertical" | "horizontal" | "inline"
export declare type MenuTheme = "light" | "dark"

interface Props extends FrameProps {
    id?: string
    theme?: MenuTheme
    mode?: MenuMode
    selectable?: boolean
    selectedKeys?: Array<string>
    defaultSelectedKeys?: Array<string>
    openKeys?: Array<string>
    defaultOpenKeys?: Array<string>
    onOpenChange?: (openKeys: string[]) => void
    onSelect?: (param: SelectParam) => void
    onDeselect?: (param: SelectParam) => void
    onClick?: (param: ClickParam) => void
    style?: React.CSSProperties
    openAnimation?: string | Object
    openTransitionName?: string | Object
    className?: string
    multiple?: boolean
    inlineIndent?: number
    inlineCollapsed?: boolean
    subMenuCloseDelay?: number
    subMenuOpenDelay?: number
    focusable?: boolean
    onMouseEnter?: (e: MouseEvent) => void
    getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement
    overflowedIndicator?: React.ReactNode
    forceSubMenuRender?: boolean
    disabled: boolean
    options: string[]
}

export class Menu extends React.Component<Props> {
    // Set default properties
    static defaultProps = {
        mode: "vertical",
        inlineIndent: 24,
        multiple: false,
        selectable: true,
        theme: "light",
        disabled: false,
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
        inlineIndent: {
            type: ControlType.Number,
            title: "Inline Indent",
        },
        mode: {
            type: ControlType.Enum,
            title: "Mode",
            options: ["vertical", "horizontal", "inline"],
            optionTitles: ["Vertical", "Horizontal", "Inline"],
        },
        multiple: {
            type: ControlType.Boolean,
            title: "Multiple",
        },
        theme: {
            type: ControlType.Enum,
            title: "Theme",
            options: ["light", "dark"],
            optionTitles: ["Light", "Dark"],
        },
        selectable: {
            type: ControlType.Boolean,
            title: "Selectable",
        },
        disabled: {
            type: ControlType.Boolean,
            title: "Disabled",
        },
        options: {
            type: ControlType.Array,
            propertyControl: {
                type: ControlType.String,
            },
            defaultValue: ["Paris", "New York", "London", "Hong Kong"],
            title: "Options",
        },
    }

    render() {
        const {
            inlineIndent,
            mode,
            multiple,
            theme,
            selectable,
            disabled,
            options,
            ...rest
        } = this.props
        const ComponentProps = {
            inlineIndent,
            mode,
            multiple,
            theme,
            selectable,
            disabled,
            options,
        }
        return (
            <Frame {...rest} {...centerInContainer(this.props)}>
                <AntMenu
                    style={{
                        height: `100%`,
                        width: `100%`,
                    }}
                    {...ComponentProps}
                >
                    {options.map((option, index) => {
                        return (
                            <AntMenu.Item key={index} {...ComponentProps}>
                                {option}
                            </AntMenu.Item>
                        )
                    })}
                </AntMenu>
            </Frame>
        )
    }
}
