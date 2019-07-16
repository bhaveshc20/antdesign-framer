import { Tag as AntTag } from "antd"
import * as React from "react"
import { Frame, FrameProps, PropertyControls, ControlType } from "framer"
import "./App.css"
import { centerInContainer } from "./Utils"

interface Props {
    text: string
    closable: boolean
    color: string
    visible: boolean
    onClose?: Function;
    afterClose?: Function;
}

export class Tag extends React.Component<Props> {
    static defaultProps = {
        height: 24,
        width: 36,
        text: "Tag",
        closable: false,
        visible: true
    }

    static propertyControls: PropertyControls = {
        text: { type: ControlType.String, title: "Text" },
        closable: { type: ControlType.Boolean, title: "Closable" },
        color: { type: ControlType.String, title: "Color" },
        visible: { type: ControlType.Boolean, title: "Visible" },
    }

    render() {
        const { text, closable, color, visible, ...rest } = this.props
        const ComponentProps = {
            text, closable, color, visible
        }
        return (
            <Frame {...rest} {...centerInContainer(this.props)} background="none">
                <AntTag
                    {...ComponentProps}
                >
                    {text}
                </AntTag>
            </Frame>

        )
    }
}
