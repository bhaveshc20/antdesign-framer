import { Button as AntButton } from "antd"
import * as React from "react"
import { Frame, FrameProps, PropertyControls, ControlType } from "framer"
import "./App.css"
import { centerInContainer } from "./Utils"

interface Props extends FrameProps {
    text: string
    type: "default" | "primary" | "ghost" | "dashed" | "danger" | "link"
    icon: string
    disabled: boolean
    ghost: boolean
    shape: "circle-outline" | "circle" | "round"
    href: string
    loading: boolean
    onClick: React.MouseEventHandler
    backgroundColor: string
}

export class Button extends React.Component<Props> {
    static defaultProps = {
        width: 68,
        height: 32,
        text: "Label",
        type: "default",
        icon: "",
        disabled: false,
        ghost: false,
        onClick: () => null,
    }

    static propertyControls: PropertyControls = {
        text: { type: ControlType.String, title: "Text" },
        type: {
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
        },
        icon: { type: ControlType.String, title: "Icon" },
        disabled: { type: ControlType.Boolean, title: "Disabled" },
        ghost: { type: ControlType.Boolean, title: "Ghost" },
        href: { type: ControlType.String, title: "href" },
        loading: { type: ControlType.Boolean, title: "Loading" },
        shape: {
            type: ControlType.Enum,
            title: "Shape",
            options: ["circle-outline", "circle", "round"],
        },
        backgroundColor: { type: ControlType.Color, title: "Background Color" },
    }

    render() {
        const {
            text,
            type,
            icon,
            disabled,
            ghost,
            shape,
            href,
            loading,
            backgroundColor,
            ...rest
        } = this.props
        const componentProps = {
            text,
            type,
            icon,
            disabled,
            ghost,
            shape,
            href,
            loading,
            backgroundColor,
        }

        return (
            <Frame {...rest} {...centerInContainer(this.props)}>
                <AntButton
                    style={{
                        height: `100%`,
                        width: `100%`,
                        background: `${backgroundColor}`,
                    }}
                    {...componentProps}
                >
                    {text}
                </AntButton>
            </Frame>
        )
    }
}
