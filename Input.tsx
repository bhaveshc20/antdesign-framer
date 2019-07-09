import { Input as AntInput } from "antd"
import * as React from "react"
import { PropertyControls, ControlType, Size } from "framer"

interface Props {
    addonAfter: string | React.ReactNode;
    addonBefore: string | React.ReactNode
    defaultValue: string
    id: string
    size: string
    disabled: boolean
    placeholder: string
    prefix: string | React.ReactNode
    suffix: string | React.ReactNode
    type: string
    value: string
    textarea: boolean
    rows: number
    autosize: boolean
    onPressEnter: React.KeyboardEventHandler
}

export class Input extends React.Component<Props> {
    static defaultProps = {
        width: 200,
        height: 32,
        id: "",
        size: "default",
        prefix: "",
        suffix: "",
        type: "text",
        addonBefore: "",
        addonAfter: "",
        defaultValue: "",
        value: "",
        placeholder: "",
        textarea: false,
        rows: 4,
        disabled: false,
        autosize: false,
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
            onPressEnter 
        } = {...this.props};
        const area = (
            <AntInput.TextArea
                id={id}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                autosize={autosize}
                rows={rows}
                onPressEnter={onPressEnter}
            />
        );
        const field = (
            <AntInput
                id={id}
                size={size}
                addonAfter={addonAfter}
                addonBefore={addonBefore}
                defaultValue={defaultValue}
                value={value}
                placeholder={placeholder}
                prefix={prefix}
                suffix={suffix}
                type={type}
                disabled={disabled}
                onPressEnter={onPressEnter}
            />
        );

        return textarea ? area : field
    }
}
