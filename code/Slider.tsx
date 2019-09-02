import {
    Slider as AntSlider,
    InputNumber as AntInputNumber,
    Row as AntRow,
    Col as AntCol,
    Icon,
} from "antd"
import * as React from "react"
import { Frame, FrameProps, PropertyControls, ControlType } from "framer"
import "./App.css"
import { centerInContainer } from "./Utils"

interface Props extends FrameProps {
    autoFocus: boolean
    range?: boolean
    min?: number
    max?: number
    step?: number | null
    dots?: boolean
    included?: boolean
    disabled?: boolean
    vertical?: boolean
    tipFormatter?: null | ((value: number) => React.ReactNode)
    tooltipVisible?: boolean
    slidertype: string
    inputValue: boolean
    defaultValue?: number
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
        slidertype: "Basic slider",
        inputValue: 0,
        defaultValue: 0,
    }

    onChange = value => {
        this.setState({
            inputValue: value,
        })
    }

    static propertyControls: PropertyControls = {
        slidertype: {
            type: ControlType.Enum,
            title: "Slider type",
            options: ["default", "range", "sliderwithinput", "graduatedslider"],
            optionTitles: [
                "Default",
                "Range slider",
                "Slider with input",
                "Graduated slider",
            ],
        },
        autoFocus: { type: ControlType.Boolean, title: "Auto Focus" },
        disabled: { type: ControlType.Boolean, title: "Disabled" },
        dots: { type: ControlType.Boolean, title: "Dots" },
        included: { type: ControlType.Boolean, title: "Included" },
        max: { type: ControlType.Number, title: "Max value" },
        min: { type: ControlType.Number, title: "Min value" },
        range: { type: ControlType.Boolean, title: "Range" },
        step: { type: ControlType.Number, title: "Step" },
        vertical: { type: ControlType.Boolean, title: "Vertical" },
        tooltipVisible: { type: ControlType.Boolean, title: "Tooltip Visible" },
    }

    render() {
        const {
            slidertype,
            autoFocus,
            range,
            min,
            max,
            step,
            dots,
            included,
            disabled,
            vertical,
            tooltipVisible,
            defaultValue,
            inputValue,
            ...rest
        } = this.props
        const componentProps = {
            slidertype,
            autoFocus,
            range,
            min,
            max,
            step,
            dots,
            included,
            disabled,
            vertical,
            tooltipVisible,
            defaultValue,
            inputValue,
        }

        const marks = {
            0: "0°C",
            26: "26°C",
            37: "37°C",
            100: {
                style: {
                    color: "#f50",
                },
                label: <strong>100°C</strong>,
            },
        }

        if (slidertype == "default")
            return (
                <AntSlider
                    defaultValue={defaultValue}
                    disabled={disabled}
                    style={{ width: this.props.width }}
                />
            )

        if (slidertype == "range")
            return (
                <AntSlider
                    defaultValue={[20, 50]}
                    disabled={disabled}
                    range
                    style={{ width: this.props.width }}
                />
            )

        if (slidertype == "sliderwithinput")
            return (
                <AntRow>
                    <AntCol span={15}>
                        <AntSlider
                            min={1}
                            max={20}
                            onChange={this.onChange}
                            value={
                                typeof inputValue === "number" ? inputValue : 0
                            }
                        />
                    </AntCol>
                    <AntCol span={1}>
                        <AntInputNumber
                            min={1}
                            max={20}
                            style={{ marginLeft: 16 }}
                            value={inputValue}
                            onChange={this.onChange}
                        />
                    </AntCol>
                </AntRow>
            )

        if (slidertype == "graduatedslider") return
        ;<div>
            <h4>included=true</h4>
            <AntSlider marks={marks} defaultValue={37} />
            <AntSlider range marks={marks} defaultValue={[26, 37]} />

            <h4>included=false</h4>
            <AntSlider marks={marks} included={false} defaultValue={37} />

            <h4>marks & step</h4>
            <AntSlider marks={marks} step={10} defaultValue={37} />

            <h4>step=null</h4>
            <AntSlider marks={marks} step={null} defaultValue={37} />
        </div>

        return (
            <Frame
                {...rest}
                {...centerInContainer(this.props)}
                background="none"
                center
            >
                <AntSlider
                    style={{ width: this.props.width }}
                    {...componentProps}
                />
            </Frame>
        )
    }
}

/*
import {
    Slider as AntSlider,
    InputNumber as AntInputNumber,
    Row as AntRow,
    Col as AntCol,
    Icon,
} from "antd"
import * as React from "react"
import { Frame, FrameProps, PropertyControls, ControlType } from "framer"
// import "./App.css"
// import { centerInContainer } from "./Utils"

interface Props extends FrameProps {
    slidertype: string
    defaultValue: number
    disabled: boolean
    range: boolean
    inputValue: boolean
}

export class Slider_Si extends React.Component<Props> {
    static defaultProps = {
        slidertype: "Basic slider",
        disabled: true,
        defaultValue: 0,
        inputValue: 0,
    }

    onChange = value => {
        this.setState({
            inputValue: value,
        })
    }

    static propertyControls: PropertyControls = {
        slidertype: {
            type: ControlType.Enum,
            title: "Slider type",
            options: ["default", "range", "sliderwithinput", "graduatedslider"],
            optionTitles: [
                "Default",
                "Range slider",
                "Slider with input",
                "Graduated slider",
            ],
        },
        disabled: {
            type: ControlType.Boolean,
            title: "Disabled",
            defaultValue: false,
            enabledTitle: "True",
            disabledTitle: "False",
        },
        defaultValue: {
            type: ControlType.Number,
            title: "Default value",
            defaultValue: 0,
            min: 0,
            max: 360,
            unit: "px",
            step: 1,
            displayStepper: false,
        },
        inputValue: {
            type: ControlType.Number,
            title: "Input value",
            defaultValue: 0,
            min: 0,
            max: 360,
            unit: "px",
            step: 1,
            displayStepper: false,
        },
    }

    render() {
        const {
            disabled,
            range,
            defaultValue,
            slidertype,
            inputValue,
        } = this.props

        const marks = {
            0: "0°C",
            26: "26°C",
            37: "37°C",
            100: {
                style: {
                    color: "#f50",
                },
                label: <strong>100°C</strong>,
            },
        }

        if (slidertype == "default")
            return <AntSlider defaultValue={defaultValue} disabled={disabled} />

        if (slidertype == "range")
            return (
                <AntSlider defaultValue={[20, 50]} disabled={disabled} range />
            )

        if (slidertype == "sliderwithinput")
            return (
                <AntRow>
                    <AntCol span={12}>
                        <AntSlider
                            min={1}
                            max={20}
                            onChange={this.onChange}
                            value={
                                typeof inputValue === "number" ? inputValue : 0
                            }
                        />
                    </AntCol>
                    <AntCol span={4}>
                        <AntInputNumber
                            min={1}
                            max={20}
                            style={{ marginLeft: 16 }}
                            value={inputValue}
                            onChange={this.onChange}
                        />
                    </AntCol>
                </AntRow>
            )

        if (slidertype == "graduatedslider") return
        ;<div>
            <h4>included=true</h4>
            <AntSlider marks={marks} defaultValue={37} />
            <AntSlider range marks={marks} defaultValue={[26, 37]} />

            <h4>included=false</h4>
            <AntSlider marks={marks} included={false} defaultValue={37} />

            <h4>marks & step</h4>
            <AntSlider marks={marks} step={10} defaultValue={37} />

            <h4>step=null</h4>
            <AntSlider marks={marks} step={null} defaultValue={37} />
        </div>

        return <AntSlider />
    }
}
*/
