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
    dropdownClassName: string
    mode: "time" | "date" | "month" | "year" | "decade"
    open: boolean
    placeholder: string
    size: string
    suffixIcon: React.ReactNode
    onOpenChange: () => {}
    onPanelChange: () => {}
}

export class DatePicker extends React.Component<Props> {
    static defaultProps = {
        type: "DatePicker",
        allowClear: true,
        autoFocus: false,
        disabled: false,
        mode: "date",
        placeholder: "Select date",
        size: "default",
    }

    static propertyControls: PropertyControls = {
        type: {
            type: ControlType.Enum,
            title: "Type",
            options: ["DatePicker", "MonthPicker", "RangePicker", "WeekPicker"],
            optionTitles: [
                "Date picker",
                "Month picker",
                "Range picker",
                "Week picker",
            ],
        },
        allowClear: {
            type: ControlType.Boolean,
            title: "Allow Clear",
            enabledTitle: "True",
            disabledTitle: "False",
            defaultValue: false,
        },
        autoFocus: {
            type: ControlType.Boolean,
            title: "Auto Focus",
            enabledTitle: "True",
            disabledTitle: "False",
            defaultValue: false,
        },
        disabled: {
            type: ControlType.Boolean,
            title: "Disabled",
            enabledTitle: "True",
            disabledTitle: "False",
            defaultValue: false,
        },
        mode: {
            type: ControlType.Enum,
            title: "Mode",
            options: ["time", "date", "month", "year", "decade"],
            optionTitles: ["Time", "Date", "Month", "Year", "Decade"],
        },
        placeholder: {
            type: ControlType.String,
            title: "Placeholder",
        },
        size: {
            type: ControlType.Enum,
            title: "Size",
            options: ["default", "small", "large"],
            optionTitles: ["Default", "Small", "Large"],
        },
        open: {
            type: ControlType.Boolean,
            title: "Open",
            enabledTitle: "True",
            disabledTitle: "False",
            defaultValue: false,
        },
    }

    render() {
        const {
            type,
            allowClear,
            autoFocus,
            disabled,
            mode,
            open,
            placeholder,
            size,
        } = this.props
        const DatePicker = (
            <AntDatePicker
                allowClear={allowClear}
                autoFocus={autoFocus}
                disabled={disabled}
                mode={mode}
                open={open}
                placeholder={placeholder}
                size={size}
            />
        )
        const MonthPicker = (
            <AntDatePicker.MonthPicker
                allowClear={allowClear}
                autoFocus={autoFocus}
                disabled={disabled}
                mode={mode}
                open={open}
                placeholder={placeholder}
                size={size}
            />
        )
        const RangePicker = (
            <AntDatePicker.RangePicker
                allowClear={allowClear}
                autoFocus={autoFocus}
                disabled={disabled}
                mode={mode}
                open={open}
                size={size}
            />
        )
        const WeekPicker = (
            <AntDatePicker.WeekPicker
                allowClear={allowClear}
                autoFocus={autoFocus}
                disabled={disabled}
                mode={mode}
                open={open}
                placeholder={placeholder}
                size={size}
            />
        )
        if (type == "DatePicker") return DatePicker
        if (type == "MonthPicker") return MonthPicker
        if (type == "RangePicker") return RangePicker
        if (type == "WeekPicker") return WeekPicker
    }
}
