import { Spin as AntSpin } from "antd"
import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import "./App.css"

interface Props {
    delay: number
    size: string
    spinning: boolean
    tip: string
    src: string
}

export class Spin extends React.Component<Props> {
    static defaultProps = {
        height: 25,
        width: 25,
        size: "default",
        spinning: true,
    }

    static propertyControls: PropertyControls = {
        delay: { type: ControlType.Number, title: "Delay" },
        size: {
            type: ControlType.Enum,
            options: ["default", "small", "large"],
            optionTitles: ["Default", "Small", "Large"],
            title: "Size",
        },
        spinning: { type: ControlType.Boolean, title: "Spinning" },
        tip: { type: ControlType.String, title: "Tip" },
    }

    render() {
        const { delay, size, spinning, tip } = this.props

        return (
            <AntSpin delay={delay} size={size} spinning={spinning} tip={tip} />
        )
    }
}
