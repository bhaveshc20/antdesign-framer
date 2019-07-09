import { Stack, Frame } from "framer";
import { Button as AntButton } from "antd"
import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import "./App.css"

interface Props {
    text: string
    type: string
    icon: string
    disabled: boolean
    ghost: boolean
    shape: string
    href: string
    loading: boolean
    onClick: React.MouseEventHandler
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
        onClick: () => { }
    }

    static propertyControls: PropertyControls = {
        text: { type: ControlType.String, title: "Text" },
        type: {
            type: ControlType.Enum,
            title: "Type",
            options: ["default", "primary", "ghost", "dashed", "danger", "link"],
        },
        icon: { type: ControlType.String, title: "Icon" },
        disabled: { type: ControlType.Boolean, title: "Disabled" },
        ghost: { type: ControlType.Boolean, title: "Ghost" },
        href: { type: ControlType.String, title: "href" },
        loading: { type: ControlType.Boolean, title: "Loading" },
        shape: {
            type: ControlType.Enum,
            title: "Shape",
            options: ["default", "circle", "round"]
        },
    }

    render() {
        const { width, height, text, type, icon, disabled, ghost, shape, href, loading, onClick } = this.props
        return (
            <AntButton
                style={{height: `${height}px`, width: `${width}px`}}
                type={type}
                icon={icon}
                disabled={disabled}
                ghost={ghost}
                shape={shape}
                href={href}
                loading={loading}
                onClick={onClick}
            >
                {text}
            </AntButton>
        )
    }
}

