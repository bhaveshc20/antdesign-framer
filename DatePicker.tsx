import { DatePicker as AntDatePicker } from "antd"
import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import "./App.css"

interface Props {
    type: string
    allowClear: boolean
    autoFocus: boolean
    className: string
    disabled: boolean
    dropdownClassName: string
    mode: string
    open: boolean
    placeholder: string
    size: string
    suffixIcon: React.ReactNode
}

export class DatePicker extends React.Component<Props> {
    static defaultProps = {
        width: 120,
        height: 20,
        type: "DatePicker",
        allowClear: true,
        autoFocus: false,
        className: '',
        disabled: false,
        mode: 'date',
        open: false,
        placeholder: '',
        size: '',
        suffixIcon: '',
        
    }

    static propertyControls: PropertyControls = {
        type: {
            type: ControlType.Enum,
            title: "Type",
            options: ["DatePicker", "MonthPicker", "RangePicker", "WeekPicker"],
        },
    }

    render() {
        const { type } = this.props
        const DatePicker = (<AntDatePicker />)
        const MonthPicker = (<AntDatePicker.MonthPicker />)
        const RangePicker = (<AntDatePicker.RangePicker />)
        const WeekPicker = (<AntDatePicker.WeekPicker />)
        if(type=="DatePicker") return DatePicker
        if(type=="MonthPicker") return MonthPicker
        if(type=="RangePicker") return RangePicker
        if(type=="WeekPicker") return WeekPicker
    }
}
