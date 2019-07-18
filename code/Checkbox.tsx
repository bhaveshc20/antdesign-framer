import { Checkbox as AntCheckbox } from "antd"
import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import "./App.css"

interface Props {
    text: string
    checked: any
    defaultChecked: boolean
    disabled: boolean
    onChange: () => void
}

export class Checkbox extends React.Component<Props> {
    static defaultProps = {
        width: 120,
        height: 20,
        text: "Checkbox",
        checked: "manual",
        defaultChecked: false,
        disabled: false,
    }

    static propertyControls: PropertyControls = {
        text: { type: ControlType.String, title: "Text" },
        checked: {
            type: ControlType.SegmentedEnum,
            options: ["manual", "true", "false"],
            title: "Checked"
        },
        defaultChecked: { type: ControlType.Boolean, title: "Default checked" },
        disabled: { type: ControlType.Boolean, title: "Disabled" },
    }

    render() {
        const { text,checked, defaultChecked, disabled, onChange} = this.props
        const ifChecked = (
            <AntCheckbox
                checked={checked == "true"}
                defaultChecked={defaultChecked}
                disabled={disabled}
                onChange={onChange}
            >
                {text}
            </AntCheckbox>
        );

        if (checked !== "manual") return ifChecked;

        return (
            <AntCheckbox
                defaultChecked={defaultChecked}
                disabled={disabled}
                onChange={onChange}
            >
                {text}
            </AntCheckbox>
        )
    }
}
