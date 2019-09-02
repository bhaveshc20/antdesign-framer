import { Avatar as AntAvatar, Badge as AntBadge } from "antd"
import * as React from "react"
import { Frame, FrameProps, PropertyControls, ControlType } from "framer"
import "./App.css"
import { centerInContainer } from "./Utils"

interface Props extends FrameProps {
    color: string
    backgroundColor: string
    shape: "circle" | "square"
    src: string
    onError: () => boolean
    size: number
    badgecount: number
    icon: string
    text: string
}

export class Avatar extends React.Component<Props> {
    static defaultProps = {
        width: 50,
        height: 50,
        shape: "circle",
        icon: "user",
        size: 40,
        badgecount: 0,
        showHide: false,
        text: "user",
    }

    static propertyControls: PropertyControls = {
        shape: {
            type: ControlType.Enum,
            title: "Shape",
            options: ["circle", "square"],
            optionTitles: ["Circle", "Square"],
        },
        size: { type: ControlType.Number, title: "Size" },
        src: { type: ControlType.Image, title: "Source" },
        color: {
            type: ControlType.Color,
            title: "Color",
        },
        backgroundColor: {
            type: ControlType.Color,
            title: "Background Color",
        },
        icon: {
            type: ControlType.String,
            title: "Icon",
            defaultValue: "user",
            placeholder: "Enter 'user'",
        },
        badgecount: { type: ControlType.Number, title: "Badge Count" },
        showHide: {
            type: ControlType.Boolean,
            title: "Avatar text",
            enabledTitle: "Show",
            disabledTitle: "Hide",
        },
        text: {
            type: ControlType.String,
            title: "Text",
            defaultValue: "",
            placeholder: "Icon must be empty",
            hidden(props) {
                return props.showHide === false
            },
        },
    }

    render() {
        const {
            shape,
            size,
            src,
            backgroundColor,
            icon,
            color,
            badgecount,
            text,
            ...rest
        } = this.props

        const componentProps = {
            shape,
            size,
            src,
            backgroundColor,
            icon,
            color,
            badgecount,
            text,
        }

        return (
            <Frame
                {...rest}
                {...centerInContainer(this.props)}
                background="none"
            >
                <AntBadge count={badgecount}>
                    <AntAvatar
                        style={{
                            height: this.props.height,
                            width: this.props.width,
                            size: `default`,
                            icon: `user`,
                            background: `${backgroundColor}`,
                            color: `${color}`,
                        }}
                        {...componentProps}
                    >
                        {text}
                    </AntAvatar>
                </AntBadge>
            </Frame>
        )
    }
}
