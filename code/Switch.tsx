import { Switch as AntSwitch } from "antd"
import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import "./App.css"

interface Props {
    autoFocus: boolean
    checked: any
    defaultChecked: boolean
    disabled: boolean
    checkedChildren: string | React.ReactNode
    unCheckedChildren: string | React.ReactNode
    loading: boolean
    size: string
    className: string
}

export class Switch extends React.Component<Props> {
    static defaultProps = {
        width: 45,
        height: 25,
        autoFocus: false,
        defaultChecked: false,
        checked: "manual",
        checkedChildren: '',
        unCheckedChildren: '',
        loading: false,
        size: 'default',
        disabled: false,
        className: ''
    }

    static propertyControls: PropertyControls = {
        autoFocus: { type: ControlType.Boolean, title: "Auto focus" },
        defaultChecked: { type: ControlType.Boolean, title: "Default checked" },
        checked: {
            type: ControlType.SegmentedEnum,
            options: ["manual", "true", "false"],
            title: "Checked"
        },
        disabled: { type: ControlType.Boolean, title: "Disabled" },
        checkedChildren: { type: ControlType.String, title: "Checked children" },
        unCheckedChildren: { type: ControlType.String, title: "Unchecked children" },
        loading: { type: ControlType.Boolean, title: "Loading" },
        size: {
            type: ControlType.Enum,
            title: "Size",
            options: ["default", "small"],
        },
        className: { type: ControlType.String, title: "ClassName" },
    }

    render() {
        const {
            autoFocus, defaultChecked, checked, disabled, checkedChildren, unCheckedChildren, loading, size, className
        } = this.props

        const ifChecked = (
            <AntSwitch
                autoFocus={autoFocus}
                checked={checked == "true"}
                defaultChecked={defaultChecked}
                disabled={disabled}
                checkedChildren={checkedChildren}
                unCheckedChildren={unCheckedChildren}
                loading={loading}
                size={size}
                className={className}
            />
        );

        if (checked !== "manual") return ifChecked;
        return (
            <AntSwitch
                autoFocus={autoFocus}
                defaultChecked={defaultChecked}
                disabled={disabled}
                checkedChildren={checkedChildren}
                unCheckedChildren={unCheckedChildren}
                loading={loading}
                size={size}
                className={className}
            />
        )
    }
}
