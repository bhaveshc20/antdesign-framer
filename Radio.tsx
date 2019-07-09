import { Radio as AntRadio } from "antd"
import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import "./App.css"

interface Props {
    autoFocus: boolean
    checked: boolean
    disabled: boolean
    value: any
    label: string
}

export class Radio extends React.Component<Props> {
    static defaultProps = {
        width: 120,
        height: 20,
        autoFocus: false,
        label: "Radio",
        checked: false,
        disabled: false,
        value: ""
    }

    static propertyControls: PropertyControls = {
        autoFocus: { type: ControlType.Boolean, title: "Auto focus" },
        label: { type: ControlType.String, title: "Label" },
        checked: { type: ControlType.Boolean, title: "Checked" },
        disabled: { type: ControlType.Boolean, title: "Disabled" },
        value: { type: ControlType.String, title: "Value" },
    }

    render() {
        const {
            autoFocus, label, checked, disabled, value
        } = this.props

        return (
            <AntRadio
            autoFocus={autoFocus}
            checked={checked}
            disabled={disabled}
            value={value}
            >
                {label}
            </AntRadio>
        )
    }
}
