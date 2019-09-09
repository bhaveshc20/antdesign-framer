import { Divider as AntDivider } from "antd"
import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import "./App.css"

interface Props {
    dashed: boolean
    orientation: string
    type: string
    text: string
}

export class Divider extends React.Component<Props> {
    static defaultProps = {
        height: 25,
        dashed: false,
        orientation: "center",
        type: "horizontal",
    }

    static propertyControls: PropertyControls = {
        dashed: { type: ControlType.Boolean, title: "Dashed" },
        orientation: {
            type: ControlType.Enum,
            options: ["left", "right", "center"],
            optionTitles: ["Left", "Right", "Center"],
            title: "Orientation",
        },
        type: {
            type: ControlType.Enum,
            options: ["horizontal", "vertical"],
            optionTitles: ["Horizontal", "Vertical"],
            title: "Type",
        },
        text: { type: ControlType.String, title: "Text" },
    }

    render() {
        const { dashed, orientation, type, text } = this.props

        return (
            <AntDivider dashed={dashed} orientation={orientation} type={type}>
                {text}
            </AntDivider>
        )
    }
}
