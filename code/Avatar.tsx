import { Avatar as AntAvatar } from "antd"
import * as React from "react"
import { Frame, FrameProps, PropertyControls, ControlType } from "framer"
import "./App.css"
import { centerInContainer } from "./Utils"

interface Props extends FrameProps {
    backgroundColor: string
    shape: 'circle' | 'square';
    src: string;
    onError: () => boolean;
}

export class Avatar extends React.Component<Props> {
    static defaultProps = {
        width:50,
        height: 50,
        shape: 'circle',
    }

    static propertyControls: PropertyControls = {
        shape: {
            type: ControlType.Enum,
            title: "Shape",
            options: [
                'circle',
                'square'
            ],
        },
        text: { type: ControlType.String, title: "Text" },
        src: { type: ControlType.Image, title: "Source" },
        backgroundColor: { type: ControlType.String, title: "Background Color" },
        icon: { type: ControlType.String, title: "Icon" },
    }

    render() {
        const {
            shape, src, backgroundColor, ...rest
        } = this.props

        const componentProps = {
            shape,src, backgroundColor
        }

        return (
            <Frame {...rest} {...centerInContainer(this.props)} background="none">
                <AntAvatar
                    style={{
                        height: `100%`,
                        width: `100%`,
                        background: `${backgroundColor}`,
                    }}
                    {...componentProps}
                >
                </AntAvatar>
            </Frame>
        )
    }
}
