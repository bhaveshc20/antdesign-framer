import { Tag as AntTag } from "antd"
import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import "./App.css"

interface Props {
    text: string
    closable: boolean
    color: string
    visible: boolean
}

export class Tag extends React.Component<Props> {
    static defaultProps = {
        width: 50,
        height: 25,
        text: "Label",
        closable: false,
        visible: true
    }

    static propertyControls: PropertyControls = {
        text: { type: ControlType.String, title: "Text" },
        closable: { type: ControlType.Boolean, title: "Closable" },
        color: { type: ControlType.String, title: "Color" },
        visible: { type: ControlType.Boolean, title: "Visible" },
    }

    render() {
        const { text, closable, color, visible } = this.props
        return (
            <AntTag
                closable={closable}
                color={color}
                visible={visible}
            >
                {text}
            </AntTag>
        )
    }
}
