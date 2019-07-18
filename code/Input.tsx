import { Input as AntInput } from "antd"
import * as React from "react"
import { Frame, FrameProps, PropertyControls, ControlType } from "framer"
import { centerInContainer } from "./Utils"

interface Props extends FrameProps {
    addonAfter: string | React.ReactNode;
    addonBefore: string | React.ReactNode
    defaultValue: string
    id: string
    size: 'large' | 'default' | 'small'
    disabled: boolean
    placeholder: string
    prefix: string | React.ReactNode
    suffix: string | React.ReactNode
    type: string
    value: string
    textarea: boolean
    rows: number
    autosize: boolean
    allowClear: boolean
    enterButton: boolean
    onPressEnter: React.KeyboardEventHandler
}

export class Input extends React.Component<Props> {
    static defaultProps = {
        width: 200,
        height: 32,
        size: "default",
        type: "text",
        textarea: false,
        rows: 4,
        disabled: false,
        autosize: false,
        enterButton: false,
        onPressEnter: () => { }
    }

    static propertyControls: PropertyControls = {
        textarea: { type: ControlType.Boolean, title: "Textarea" },
        disabled: { type: ControlType.Boolean, title: "Disabled" },
        rows: {
            type: ControlType.Number,
            title: "Rows",
            hidden(props) {
                return props.textarea === false;
            }
        },
        prefix: {
            type: ControlType.String,
            title: "Prefix",
            hidden(props) {
                return props.textarea === true;
            }
        },
        suffix: {
            type: ControlType.String,
            title: "Suffix",
            hidden(props) {
                return props.textarea === true;
            }
        },
        addonBefore: {
            type: ControlType.String,
            title: "addonBefore",
            hidden(props) {
                return props.textarea === true;
            }
        },
        addonAfter: {
            type: ControlType.String,
            title: "addonAfter",
            hidden(props) {
                return props.textarea === true;
            }
        },
        placeholder: { type: ControlType.String, title: "Placeholder" },
        value: { type: ControlType.String, title: "Value" },
        type: {
            type: ControlType.Enum,
            options: ["text", "email", "password", "tel", "url"],
            title: "Type",
            hidden(props) {
                return props.textarea === true;
            }
        },
        size: {
            type: ControlType.Enum,
            options: ["default", "small", "large"],
            title: "Size",
            hidden(props) {
                return props.textarea === true;
            }
        },
        id: { type: ControlType.String, title: "id" }
    }

    render() {
        const {
            textarea,
            id,
            size,
            addonAfter,
            addonBefore,
            defaultValue,
            value,
            placeholder,
            prefix,
            suffix,
            type,
            disabled,
            autosize,
            rows,
            ...rest
        } = this.props

        const TextAreaProps = {
            id,
            value,
            placeholder,
            disabled,
            autosize,
            rows
        }

        const InputProps = {
            id,
            size,
            addonAfter,
            addonBefore,
            defaultValue,
            value,
            placeholder,
            prefix,
            suffix,
            type,
            disabled
        }
        const area = (
            <Frame {...rest} {...centerInContainer(this.props)}>
                <AntInput.TextArea
                    style={{
                        height: `100%`,
                        width: `100%`,
                    }}
                    {...TextAreaProps}
                />
            </Frame>
        );
        const field = (
            <Frame {...rest} {...centerInContainer(this.props)}>
                <AntInput
                    style={{
                        height: `100%`,
                        width: `100%`,
                    }}
                    {...InputProps}
                />
            </Frame>
        );

        return textarea ? area : field
    }
}
