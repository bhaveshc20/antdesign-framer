import { Progress as AntProgress } from "antd"
import * as React from "react"
import { Frame, FrameProps, PropertyControls, ControlType } from "framer"
import "./App.css"
import { centerInContainer } from "./Utils"

interface Props extends FrameProps {
    type: string
    percent: number
    showInfo: boolean
    status: string
    strokeLinecap: string
    strokeColor: string
    successPercent: number
    strokeWidth: number
    gapDegree: number
    gapPosition: string
}

export class Progress extends React.Component<Props> {
    static defaultProps = {
        height:20,
        type: "line",
        percent: 0,
        showInfo: true,
        strokeLinecap: "round",
        successPercent: 0,
        strokeWidth: 10,
        gapDegree: 0,
        gapPosition: true,
    }

    static propertyControls: PropertyControls = {
        type: {
            type: ControlType.Enum,
            options: ["line", "circle", "dashboard"],
            title: "Type"
        },
        percent: { type: ControlType.Number, title: "Percent" },
        showInfo: { type: ControlType.Boolean, title: "Show info" },
        status: {
            type: ControlType.Enum,
            options: ["success", "exception", "normal", "active"],
            title: "Status"
        },
        strokeLinecap: {
            type: ControlType.Enum,
            options: ["round", "square"],
            title: "Stroke-line cap"
        },
        strokeColor: { type: ControlType.Color, title: "Stroke color" },
        successPercent: { type: ControlType.Number, title: "Success Percent" },
        strokeWidth: { type: ControlType.Number, title: "Stroke width" },
        gapDegree: { type: ControlType.Number, title: "Gap degree" },
        gapPosition: {
            type: ControlType.Enum,
            options: ["top", "bottom", "left", "right"],
            title: "Gap position"
        }
    }

    render() {
        const { type, percent, showInfo, status, strokeColor, strokeLinecap, strokeWidth, successPercent, gapPosition, gapDegree, ...rest } = this.props
        const componentProps = {
            type, percent, showInfo, status, strokeColor, strokeLinecap, strokeWidth, successPercent, gapPosition, gapDegree
        }

        return (
            <Frame {...rest} {...centerInContainer(this.props)} background="none" center>
                <AntProgress
                    style={{
                        width: `100%`,
                    }}
                    type={type}
                    percent={percent}
                    showInfo={showInfo}
                    status={status}
                    strokeColor={strokeColor}
                    strokeLinecap={strokeLinecap}
                    strokeWidth={strokeWidth}
                    successPercent={successPercent}
                    gapDegree={gapDegree}
                    gapPosition={gapPosition}
                />
            </Frame>
        )
    }
}
