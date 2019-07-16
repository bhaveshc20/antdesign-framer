import { Typography as AntTypography } from "antd"
import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import "./App.css"

interface Props {
    type: string
    code: boolean
    deleteStyle: boolean
    disabled: boolean
    ellipsis: boolean
    mark: boolean
    underline: boolean
    strong: boolean
    contentType: string
    level: number
    text: string
    size: number
    fontsize: number
    fontColor: string
}

export class Typography extends React.Component<Props> {
    static defaultProps = {
        height: 20,
        type: "Text",
        code: false,
        deleteStyle: false,
        disabled: false,
        ellipsis: false,
        mark: false,
        underline: false,
        strong: false,
        level: 1,
        text: "Hello Framer",
    }

    static propertyControls: PropertyControls = {
        code: { type: ControlType.Boolean, title: "Code" },
        deleteStyle: { type: ControlType.Boolean, title: "Delete" },
        disabled: { type: ControlType.Boolean, title: "Disabled" },
        ellipsis: { type: ControlType.Boolean, title: "Ellipsis" },
        mark: { type: ControlType.Boolean, title: "Mark" },
        underline: { type: ControlType.Boolean, title: "Underline" },
        strong: { type: ControlType.Boolean, title: "Strong" },
        level: { type: ControlType.Number, title: "Level", min: 1, max: 4 },
        type: {
            type: ControlType.Enum,
            options: ["Text", "Title", "Paragraph"],
            title: "Type",
        },
        contentType: {
            type: ControlType.Enum,
            options: ["secondary", "warning", "danger"],
            title: "Content Type",
        },
        text: { type: ControlType.String, title: "Text" },
        fontsize: { type: ControlType.Number, title: "Font size" },
        fontColor: { type: ControlType.Color, title: "Font color" },
    }

    render() {
        const {
            code,
            deleteStyle,
            disabled,
            ellipsis,
            mark,
            underline,
            strong,
            level,
            type,
            contentType,
            text,
            fontsize,
            fontColor
        } = this.props
        const AntText = (
            <AntTypography.Text
                style={{ fontSize: `${fontsize}px`, color: `${fontColor}`}}
                code={code}
                delete={deleteStyle}
                disabled={disabled}
                ellipsis={ellipsis}
                mark={mark}
                underline={underline}
                strong={strong}
                type={contentType}
            >
                {text}
            </AntTypography.Text>
        )
        const AntTitle = (
            <AntTypography.Title
                style={{ fontSize: `${fontsize}px`, color: `${fontColor}` }}
                code={code}
                delete={deleteStyle}
                disabled={disabled}
                ellipsis={ellipsis}
                mark={mark}
                underline={underline}
                strong={strong}
                level={level}
                type={contentType}
            >
                {text}
            </AntTypography.Title>
        )
        const AntParagraph = (
            <AntTypography.Paragraph
                style={{ fontSize: `${fontsize}px`, color: `${fontColor}` }}
                code={code}
                delete={deleteStyle}
                disabled={disabled}
                ellipsis={ellipsis}
                mark={mark}
                underline={underline}
                strong={strong}
                type={contentType}
            >
                {text}
            </AntTypography.Paragraph>
        )
        if (type == "Text") return AntText
        if (type == "Title") return AntTitle
        if (type == "Paragraph") return AntParagraph
    }
}
