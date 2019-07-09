import { Alert as AntAlert, Icon } from "antd"
import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import "./App.css"
import { ReactNode } from "react";

interface Props {
    banner: boolean
    closable: boolean
    closeText: string | ReactNode
    description: string | ReactNode
    message: string | ReactNode
    showIcon: boolean
    type: string
    onClose: () => {}
}

export class Alert extends React.Component<Props> {
    static defaultProps = {
        width: 240,
        height: 40,
        message: "Text",
        banner: false,
        showIcon: true,
        type: 'success'
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
        }
    }

    render() {
        const { height, width, banner,closable,closeText,description,showIcon, type, message } = this.props
        return (
            <AntAlert
                style={{ height: `${height}px`, width: `${width}px` }}
                banner={banner}
                closable={closable}
                closeText={closeText}
                description={description}
                showIcon={showIcon}
                type={type}
                message={message}
            />
        )
    }
}
