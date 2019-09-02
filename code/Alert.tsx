import { Alert as AntAlert, Icon } from "antd"
import * as React from "react"
import { Frame, FrameProps, PropertyControls, ControlType } from "framer"
import "./App.css"
import { ReactNode } from "react"
import { centerInContainer } from './Utils'

interface Props extends FrameProps {
    banner: boolean
    closable: boolean
    closeText: string | ReactNode
    description: string | ReactNode
    message: string | ReactNode
    showIcon: boolean
    type: "success" | "info" | "warning" | "error"
    onClose: () => {}
}

export class Alert extends React.Component<Props> {
    static defaultProps = {
        width: 240,
        height: 40,
        message: "Text",
        banner: false,
        showIcon: true,
        type: "success",
    }

    static propertyControls: PropertyControls = {
        message: { type: ControlType.String, title: "Message" },
        banner: { type: ControlType.Boolean, title: "Banner" },
        closable: { type: ControlType.Boolean, title: "Closable" },
        closeText: { type: ControlType.String, title: "Close text" },
        description: { type: ControlType.String, title: "Description" },
        showIcon: { type: ControlType.Boolean, title: "Show Icon" },
        type: {
            type: ControlType.Enum,
            title: "Type",
            options: ["success", "info", "warning", "error"],
            optionTitles: ["Success", "Info", "Warning", "Error"],
        },
    }

    render() {
        const {
            banner,
            closable,
            closeText,
            description,
            showIcon,
            type,
            message,
            ...rest
        } = this.props

        const componentProps = {
            banner,
            closable,
            closeText,
            description,
            showIcon,
            type,
            message,
        }

        return (
            <Frame {...rest} {...centerInContainer(this.props)} >
                <AntAlert
                    style={{ height: `100%`, width: `100%` }}
                    {...componentProps}
                />
            </Frame>
        )
    }
}
