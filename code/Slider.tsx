import { Slider as AntSlider } from "antd"
import * as React from "react"
import { Frame, FrameProps, PropertyControls, ControlType } from "framer"
import "./App.css"
import { centerInContainer } from "./Utils"


interface Props extends FrameProps {
    autoFocus: boolean
    range?: boolean;
    min?: number;
    max?: number;
    step?: number | null;
    dots?: boolean;
    included?: boolean;
    disabled?: boolean;
    vertical?: boolean;
    tipFormatter?: null | ((value: number) => React.ReactNode);
    tooltipVisible?: boolean
}

export class Slider extends React.Component<Props> {
    static defaultProps = {
        height: 40,
        autoFocus: false,
        disabled: false,
        dots: false,
        included: true,
        max: 100,
        min: 0,
        range: false,
        step: 1,
        vertical: false,
    }

    static propertyControls: PropertyControls = {
        autoFocus: {type: ControlType.Boolean, title: "Auto Focus"},
        disabled: { type: ControlType.Boolean, title: "Disabled" },
        dots: { type: ControlType.Boolean, title: "Dots" },
        included: { type: ControlType.Boolean, title: "Included" },
        max: {type: ControlType.Number, title: "Max value"},
        min: { type: ControlType.Number, title: "Min value" },
        range: { type: ControlType.Boolean, title: "Range" },
        step: { type: ControlType.Number, title: "Step" },
        vertical: { type: ControlType.Boolean, title: "Vertical" },
        tooltipVisible: { type: ControlType.Boolean, title: "Tooltip Visible" },
    }

    render() {
        const { autoFocus, range, min, max, step, dots, included, disabled, vertical,tooltipVisible, ...rest } = this.props
        const componentProps = {
            autoFocus, range, min, max, step, dots, included, disabled, vertical, tooltipVisible
        }

        return (
            <Frame {...rest} {...centerInContainer(this.props)} background="none" center>
                <AntSlider
                    style={{
                        width: `100%`,
                    }}
                    {...componentProps}
                />
            </Frame>
        )
    }
}
