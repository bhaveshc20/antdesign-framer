import { Rate as AntRate, Icon } from "antd"
import * as React from "react"
import { PropertyControls, ControlType, Frame} from "framer"
import "./App.css"
import { number } from "prop-types";

interface Props {
    allowClear: boolean
    allowHalf: boolean
    autoFocus: boolean
    icon: string
    iconTheme: string
    iconSize: number
    count: number
    defaultValue: number
    disabled: boolean
    value: number
    onHoverChange: React.MouseEventHandler
    onKeyDown: React.KeyboardEventHandler
}

export class Rate extends React.Component<Props> {
    static defaultProps = {
        width: 240,
        height: 40,
        allowClear: true,
        allowHalf: false,
        autoFocus: false,
        icon: 'star',
        iconTheme: 'filled',
        iconSize: 40,
        count: 5,
        defaultValue: 0,
        disabled: false,
        value: 0,
        onHoverChange: () => { },
        onKeyDown: () => { }
    }

    static propertyControls: PropertyControls = {
        allowClear: { type: ControlType.Boolean, title: "Allow clear" },
        allowHalf: { type: ControlType.Boolean, title: "Allow half" },
        autoFocus: { type: ControlType.Boolean, title: "Auto focus" },
        icon: { type: ControlType.String, title: "Icon" },
        iconTheme: {
            type: ControlType.Enum,
            title: "Icon theme",
            options: ["filled", "outlined", "twoTone"],
        },
        iconSize: { type: ControlType.Number, title: "Icon size" },
        count: { type: ControlType.Number, title: "Count" },
        defaultValue: { type: ControlType.Number, title: "Default value" },
        disabled: { type: ControlType.Boolean, title: "Disabled" },
        value: { type: ControlType.Number, title: "Value" },
    }

    render() {
        const { allowClear, allowHalf,iconSize, autoFocus, icon, iconTheme, count, defaultValue, disabled, value, onHoverChange, onKeyDown } = this.props
        return (
                <AntRate
                    allowClear={allowClear}
                    allowHalf={allowHalf}
                    autoFocus={autoFocus}
                    character={<Icon type={icon} theme={iconTheme} style={{
                        fontSize: `${iconSize}px`
                    }} />}
                    count={count}
                    defaultValue={defaultValue}
                    disabled={disabled}
                    value={value}
                    onHoverChange={onHoverChange}
                    onKeyDown={onKeyDown}
                />
        )
    }
}
