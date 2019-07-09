import { Badge as AntBadge, Icon } from "antd"
import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import "./App.css"

interface Props {
    color: string
    count: React.ReactNode
    icon: boolean,
    iconType: string,
    dot: boolean
    offset: [number, number]
    overflowCount: number
    showZero: boolean
    status: string
    text: string
    title: string
}

export class Badge extends React.Component<Props> {
    static defaultProps = {
        width: 34,
        height: 34,
        color:'#eee',
        dot:false,
        icon: false,
        overflowCount:99,
        showZero: false,
        status: '',
        text: '',
        // title: Props.count
    }

    static propertyControls: PropertyControls = {
        color: { type: ControlType.String, title: "Color" },
        icon: { type: ControlType.Boolean, title: "Icon" },
        iconType: { type: ControlType.String, title: "Icon name" },
        dot: { type: ControlType.Boolean, title: "Dot"},
        offset: { type: ControlType.Array, title: "offset" },
        overflowCount: {type: ControlType.Number, title: "Overflow count"},
        showZero: { type: ControlType.Boolean, title: "Show zero" },
        status: { type: ControlType.String, title: "Status" },
        text: { type: ControlType.String, title: "Text" },
        title: { type: ControlType.String, title: "Title" },
    }

    render() {
        const {
            color, icon, iconType, dot, offset, overflowCount, showZero, status, text, title
        } = this.props

        return (
            <AntBadge
            color={color}
            dot={dot}
            offset={offset}
            count={3}
            overflowCount={overflowCount}
            showZero={showZero}
            status={status}
            text={text}
            title={title}
            />
        )
    }
}
