import { Result as AntResult, Button as AntButton, Icon as AntIcon } from "antd"
import * as React from "react"
import { Frame, FrameProps, PropertyControls, ControlType } from "framer"
import "./App.css"
import { centerInContainer } from "./Utils"

interface Props {
    title: React.ReactNode
    subTitle: React.ReactNode
    status: "success" | "error" | "info" | "warning" | "404" | "403" | "500"
    icon: string | React.ReactNode
    theme: string
    type: string
    numberofItems: number
    buttontext1: string
    buttontext2: string
}

export class Result extends React.Component<Props> {
    static defaultProps = {
        title: "Successfully Purchased Cloud Server ECS!",
        subTitle: "Subtitle text lorem ipsum dolor sed emit lorem ipsum dolor",
        type: "primary",
        numberofItem: [],
        buttontext1: "Button 1",
        buttontext2: "Button 2",
    }

    static propertyControls: PropertyControls = {
        title: { type: ControlType.String, title: "Title" },
        subTitle: { type: ControlType.String, title: "Sub Title" },
        status: {
            type: ControlType.Enum,
            title: "Status",
            options: [
                "success",
                "error",
                "info",
                "warning",
                "404",
                "403",
                "500",
            ],
            optionTitles: [
                "Success",
                "Error",
                "Info",
                "Warning",
                "404",
                "403",
                "500",
            ],
        },
        icon: { type: ControlType.String, title: "Icon" },
        theme: {
            type: ControlType.Enum,
            title: "Theme",
            options: ["filled", "outlined", "twoTone"],
            optionTitles: ["Filled", "Outlined", "Two Tone"],
        },
        numberofItems: {
            type: ControlType.Number,
            min: 1,
            max: 5,
            title: "Buttons",
        },
        buttontext1: {
            type: ControlType.String,
            defaultValue: "Button 1",
            placeholder: "Enter button text",
            title: "Button 1",
        },
        type: {
            type: ControlType.Enum,
            title: "Type",
            options: ["primary", "secondary"],
            optionTitles: ["Primary", "Secondary"],
        },
        buttontext2: {
            type: ControlType.String,
            defaultValue: "Button 2",
            placeholder: "Enter button text",
            title: "Button 2",
            hidden: ({ numberofItems }) => numberofItems <= 1,
        },
    }

    render() {
        const {
            title,
            subTitle,
            status,
            icon,
            theme,
            type,
            numberofItems,
            buttontext1,
            buttontext2,
            ...rest
        } = this.props

        return (
            <Frame {...rest}  {...centerInContainer(this.props)} >
                <AntResult
                    // style={{ overflow: "hidden" }}
                    status={status}
                    title={title}
                    icon={<AntIcon type={icon} theme={theme} />}
                    subTitle={subTitle}
                    extra={new Array(numberofItems)
                        .fill("item")
                        .map((item, index) => {
                            return (
                                <AntButton
                                    // style={tabWidth}
                                    type={type}
                                    key={index}
                                >
                                    {buttontext1}
                                </AntButton>
                            )
                        })}
                ></AntResult>
            </Frame>
        )
    }
}
