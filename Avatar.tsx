import { Avatar as AntAvatar } from "antd"
import * as React from "react"
import { PropertyControls, ControlType, Frame } from "framer"
import "./App.css"

interface Props {
    text: string
    backgroundColor: string
    icon: string
    size: number
    shape: string
    src: string
}

export class Avatar extends React.Component<Props> {
    static defaultProps = {
        icon: "smile",
        size: 50,
        src: '',
    }

    static propertyControls: PropertyControls = {
        text: { type: ControlType.String, title: "Text" },
        backgroundColor: { type: ControlType.String, title: "Background Color" },
        size: { type: ControlType.Number, title: "Size" },
        icon: { type: ControlType.String, title: "Icon" },
        src: { type: ControlType.String, title: "Image source" },
    }

    render() {
        const {
            width, height, icon, size, src, text, backgroundColor
        } = this.props

        return (
            <AntAvatar
                style={{ backgroundColor: `${backgroundColor}`}}
                size={size}
                icon={icon}
                src={src}
            >
                {text}
            </AntAvatar>
        )
    }
}
