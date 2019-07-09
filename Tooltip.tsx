import { Tooltip as AntTooltip } from "antd"
import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import "./App.css"

interface Props {
    title: string
    arrowPointAtCenter: boolean
    autoAdjustOverflow: boolean
    defaultVisible: boolean
    mouseEnterDelay: number
    mouseLeaveDelay: number
    overlayClassName: string
    backgroundColor: string
    placement: string
    trigger: string
    visible: boolean
    children: JSX.Element
}

export class Tooltip extends React.Component<Props> {
    static defaultProps = {
        title: "prompt text",
        arrowPointAtCenter: false,
        autoAdjustOverflow: true,
        defaultVisible: false,
        mouseEnterDelay: 0.1,
        mouseLeaveDelay: 0.1,
        placement: 'top',
        trigger: 'hover',
        visible: false,
        children: 'Tooltip'
    }

    static propertyControls: PropertyControls = {
        title: { type: ControlType.String, title: "Title" },
        arrowPointAtCenter: {type: ControlType.Boolean, title: "Arrow point at Center"},
        autoAdjustOverflow: { type: ControlType.Boolean, title: "Auto adjust overflow" },
        defaultVisible: { type: ControlType.Boolean, title: "Default visible" },
        mouseEnterDelay: { type: ControlType.Number, title: "Mouse enter delay" },
        mouseLeaveDelay: { type: ControlType.Number, title: "Mouse leave delay" },
        placement: {
            type: ControlType.Enum,
            title: "Placement",
            options: ["top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]
        },
        trigger: {
            type: ControlType.Enum,
            title: "Placement",
            options: ["hover", "focus", "click", "contextMenu"]
        },
        visible: { type: ControlType.Boolean, title: "Visible" },
    }

    render() {
        const { children, title, arrowPointAtCenter, autoAdjustOverflow, defaultVisible, mouseEnterDelay, mouseLeaveDelay, placement,trigger,visible } = this.props
        return (
            <AntTooltip
            title={title}
            arrowPointAtCenter={arrowPointAtCenter}
            autoAdjustOverflow={autoAdjustOverflow}
            defaultVisible={defaultVisible}
            mouseEnterDelay={mouseEnterDelay}
            mouseLeaveDelay={mouseLeaveDelay}
            placement={placement}
            trigger={trigger}
            visible={visible}
            >
                {children}
            </AntTooltip>
        )
    }
}
