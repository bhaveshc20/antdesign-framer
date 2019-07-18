import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import { Radio as AntRadio } from "antd"
import "./App.css"

interface Props {
    buttonStyle: "solid" | "outline"
    size: "small" | "default" | "large"
    defaultValue: number,
    disabled: boolean,
    options: string[]
    button: boolean
}
export class RadioGroup extends React.Component<Props> {
    // Set default properties
    static defaultProps = {
        buttonStyle: "outline",
        size: "default",
        disabled: false,
        defaultValue: 0,
    }
    // Items shown in property panel
    static propertyControls: PropertyControls = {
        size: {
            type: ControlType.Enum,
            options: ["small", "default", "large"],
            title: "Size",
        },
        defaultValue: {
            type: ControlType.Number,
            title: "Default value"
        },
        disabled: {type: ControlType.Boolean, title: 'Disabled'},
        button: { type: ControlType.Boolean, title: 'Button?' },
        buttonStyle: {
            type: ControlType.Enum,
            options: ["outline", "solid"],
            optionTitles: ["Outline", "Solid"],
            title: "Style",
            hidden(props){
                return props.button === false
            }
        },
        options: {
            type: ControlType.Array,
            propertyControl: {
                type: ControlType.String,
            },
            defaultValue: ['Paris', 'New York'],
            title: 'Options',
        },
    }
    render() {
        const { size, buttonStyle, defaultValue, disabled, options, button } = this.props
        const ComponentProps = { size, buttonStyle, defaultValue, disabled}
        return (
            <AntRadio.Group
                {...ComponentProps}
            >
                {options.map((option, index) => {
                    return (
                        button ? 
                        (<AntRadio.Button
                            value={index}
                        >
                            {option}
                        </AntRadio.Button>)
                        :
                            (<AntRadio
                                value={index}
                            >
                                {option}
                            </AntRadio>)
                    )
                })}

            </AntRadio.Group>
        )
    }
}
