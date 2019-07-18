import { DatePicker as AntDatePicker } from "antd"
import * as React from "react"
import { Frame, FrameProps, PropertyControls, ControlType } from "framer"
import "./App.css"
import { centerInContainer } from "./Utils"

interface Props extends FrameProps {
    type: string
    allowClear: boolean
    autoFocus: boolean
    className: string
    disabled: boolean
    mode: 'time' | 'date' | 'month' | 'year' | 'decade'
    open: boolean
    placeholder: string
    suffixIcon: React.ReactNode
}

export class DatePicker extends React.Component<Props> {
    static defaultProps = {
        type: "DatePicker",
        allowClear: true,
        autoFocus: false,
        disabled: false,
        mode: 'date',
    }

    static propertyControls: PropertyControls = {
        type: {
            type: ControlType.Enum,
            title: "Type",
            options: ["DatePicker", "MonthPicker", "RangePicker", "WeekPicker"],
        },
        allowClear: {
            type: ControlType.Boolean,
            title: "Allow Clear",
        },
        autoFocus: {
            type: ControlType.Boolean,
            title: "Auto Focus",
        },
        disabled: {
            type: ControlType.Boolean,
            title: "Disabled",
        },
        mode: {
            type: ControlType.Enum,
            title: "Mode",
            options: ['time', 'date', 'month', 'year', 'decade'],
        },
        open: {
            type: ControlType.Boolean,
            title: "Open",
        },


    }

    render() {
        const { type } = this.props
        const DatePicker = (<AntDatePicker />)
        const MonthPicker = (<AntDatePicker.MonthPicker />)
        const RangePicker = (<AntDatePicker.RangePicker />)
        const WeekPicker = (<AntDatePicker.WeekPicker />)
        if (type == "DatePicker") return DatePicker
        if (type == "MonthPicker") return MonthPicker
        if (type == "RangePicker") return RangePicker
        if (type == "WeekPicker") return WeekPicker
    }
}
