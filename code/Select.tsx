import { Select as AntSelect } from "antd"
import * as React from "react"
import { Frame, FrameProps, PropertyControls, ControlType } from "framer"
import "./App.css"

function onChange(value) {
    console.log(`selected ${value}`)
}

function onBlur() {
    console.log("blur")
}

function onFocus() {
    console.log("focus")
}

function onSearch(val) {
    console.log("search:", val)
}

interface Props extends FrameProps {
    allowClear: boolean
    autoClearSearchValue: boolean
    autoFocus: boolean
    defaultActiveFirstOption: boolean
    defaultValue: string
    disabled: boolean
    dropdownMatchSelectWidth: boolean
    filterOption: boolean
    firstActiveValue: string
    labelInValue: boolean
    maxTagCount: number
    maxTagPlaceholder?: React.ReactNode
    mode: "default" | "multiple" | "tags"
    notFoundContent: string
    placeholder: string | React.ReactNode
    showArrow: boolean
    showSearch: boolean
    value: string[]
    defaultOpen: boolean
    loading: boolean
}

export class Select extends React.Component<Props> {
    static defaultProps = {
        allowClear: false,
        autoClearSearchValue: true,
        autoFocus: false,
        defaultActiveFirstOption: false,
        disabled: false,
        dropdownMatchSelectWidth: true,
        filterOption: true,
        labelInValue: false,
        mode: "default",
        notFoundContent: "Not Found",
        showArrow: true,
        showSearch: false,
        loading: false,
    }

    static propertyControls: PropertyControls = {
        value: {
            type: ControlType.Array,
            propertyControl: {
                type: ControlType.String,
            },
            defaultValue: ["Paris", "New York"],
            title: "Value",
        },
        allowClear: { type: ControlType.Boolean, title: "Allow Clear" },
        autoClearSearchValue: {
            type: ControlType.Boolean,
            title: "Auto clear search value",
        },
        defaultActiveFirstOption: {
            type: ControlType.Boolean,
            title: "Default active first option",
        },
        defaultValue: { type: ControlType.String, title: "Default value" },
        disabled: { type: ControlType.Boolean, title: "Disabled" },
        dropdownMatchSelectWidth: {
            type: ControlType.Boolean,
            title: "Dropdown match select width",
        },
        filterOption: { type: ControlType.Boolean, title: "Filter option" },
        firstActiveValue: {
            type: ControlType.String,
            title: "First active value",
        },
        labelInValue: { type: ControlType.Boolean, title: "Label in value" },
        maxTagCount: { type: ControlType.Number, title: "Max tag count" },
        mode: {
            type: ControlType.Enum,
            title: "Mode",
            options: ["default", "multiple", "tags"],
        },
        notFoundContent: {
            type: ControlType.String,
            title: "Not found content",
        },
        placeholder: { type: ControlType.String, title: "Placeholder" },
        showArrow: { type: ControlType.Boolean, title: "Show arrow" },
        showSearch: { type: ControlType.Boolean, title: "Show search" },
        defaultOpen: { type: ControlType.Boolean, title: "Default open" },
        loading: { type: ControlType.Boolean, title: "Loading" },
    }

    render() {
        const {
            allowClear,
            autoClearSearchValue,
            autoFocus,
            defaultActiveFirstOption,
            defaultValue,
            disabled,
            dropdownMatchSelectWidth,
            filterOption,
            firstActiveValue,
            labelInValue,
            maxTagCount,
            maxTagPlaceholder,
            mode,
            notFoundContent,
            placeholder,
            showArrow,
            showSearch,
            value,
            defaultOpen,
            loading,
        } = this.props

        return (
            <AntSelect
                style={{ width: this.props.width }}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                allowClear={allowClear}
                autoClearSearchValue={autoClearSearchValue}
                autoFocus={autoFocus}
                defaultActiveFirstOption={defaultActiveFirstOption}
                defaultValue={defaultValue}
                disabled={disabled}
                dropdownMatchSelectWidth={dropdownMatchSelectWidth}
                filterOption={filterOption}
                firstActiveValue={firstActiveValue}
                labelInValue={labelInValue}
                maxTagCount={maxTagCount}
                maxTagPlaceholder={maxTagPlaceholder}
                mode={mode}
                notFoundContent={notFoundContent}
                placeholder={placeholder}
                showArrow={showArrow}
                showSearch={showSearch}
                defaultOpen={defaultOpen}
                loading={loading}
            >
                {value.map(val => {
                    return (
                        <AntSelect.Option key={val} value={val}>
                            {val}
                        </AntSelect.Option>
                    )
                })}
            </AntSelect>
        )
    }
}
