import { Checkbox as AntCheckbox } from "antd"
import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import "./App.css"

interface Props {
    text: string
    autoFocus: string
    checked: boolean
    defaultChecked: boolean
    disabled: boolean
    indeterminate: boolean
    onChange: () => void
}

export class Checkbox extends React.Component<Props> {
    static defaultProps = {
        width: 120,
        height: 20,
        text: "Checkbox",
        checked: false,
        defaultChecked: false,
        disabled: false,
        indeterminate: false,
    }

    static propertyControls: PropertyControls = {
        text: { type: ControlType.String, title: "Text" },
        checked: {
            type: ControlType.Boolean,
            title: "Checked",
            defaultValue: false,
            enabledTitle: "True",
            disabledTitle: "False",
        },
        defaultChecked: {
            type: ControlType.Boolean,
            title: "Default checked",
            defaultValue: false,
            enabledTitle: "True",
            disabledTitle: "False",
        },
        disabled: { type: ControlType.Boolean, title: "Disabled" },
        indeterminate: {
            type: ControlType.Boolean,
            title: "Indeterminate",
            defaultValue: false,
            enabledTitle: "True",
            disabledTitle: "False",
        },
    }

    render() {
        const {
            text,
            checked,
            defaultChecked,
            disabled,
            indeterminate,
            onChange,
        } = this.props
        /*  const ifChecked = (
            <AntCheckbox
                checked={checked}
                defaultChecked={defaultChecked}
                disabled={disabled}
                
                onChange={onChange}
            >
                {text}
            </AntCheckbox>
        )
       

        if (checked !== "manual") return ifChecked
        */
        return (
            <AntCheckbox
                checked={checked}
                defaultChecked={defaultChecked}
                disabled={disabled}
                indeterminate={indeterminate}
                onChange={onChange}
            >
                {text}
            </AntCheckbox>
        )
    }
}
