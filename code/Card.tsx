import { Card as AntCard, Icon, Avatar } from "antd"
import * as React from "react"
import { Frame, FrameProps, PropertyControls, ControlType } from "framer"
import "./App.css"
import { centerInContainer } from "./Utils"

export interface CardTabListType {
    key: string;
    tab: React.ReactNode;
    disabled?: boolean;
}

interface Props extends FrameProps {
    title?: string | React.ReactNode;
    extra?: string | React.ReactNode;
    bordered?: boolean;
    style?: React.CSSProperties;
    loading: boolean;
    hoverable?: boolean;
    size?: 'default' | 'small';
    type?: 'inner' | ''
    cover?: React.ReactNode;
    actions?: React.ReactNode[];
    tabList?: CardTabListType[];
    onTabChange?: (key: string) => void;
    activeTabKey?: string;
    defaultActiveTabKey?: string;
    avatarSrc: string
    description: string
    metaTitle: string
    body: string
    imgSrc: string
    meta: boolean,
}

export class Card extends React.Component<Props> {
    static defaultProps = {
        bordered: true,
        hoverable: false,
        size: 'default',
        loading: false,
        meta: false
    }

    static propertyControls: PropertyControls = {
        body: {
            type: ControlType.String, title: "Body",
        },
        activeTabKey: { type: ControlType.String, title: "Active Tab Key" },
        bordered: { type: ControlType.Boolean, title: "Bordered" },
        extra: { type: ControlType.String, title: "Extra" },
        hoverable: { type: ControlType.Boolean, title: "Hoverable" },
        loading: { type: ControlType.Boolean, title: "Loading" },
        size: {
            type: ControlType.Enum,
            title: "Size",
            options: ["default", "small"],
        },
        title: { type: ControlType.String, title: "Title" },
        imgSrc: { type: ControlType.Image, title: "Image Source" },
        meta: { type: ControlType.Boolean, title: "Add meta?" },
        avatarSrc: {
            type: ControlType.Image, title: "Avatar Source",
            hidden(props) {
                return props.meta === false;
            }
        },
        description: {
            type: ControlType.String, title: "Description",
            hidden(props) {
                return props.meta === false;
            }
        },
        metaTitle: {
            type: ControlType.String, title: "Title",
            hidden(props) {
                return props.meta === false;
            }
        },
        
    }

    render() {
        const {
            activeTabKey,
            bordered,
            extra,
            hoverable,
            size,
            title,
            avatarSrc,
            description,
            metaTitle,
            loading,
            body,
            imgSrc,
            meta,
            ...rest
        } = this.props

        const ComponentProps = {
            activeTabKey,
            bordered,
            extra,
            hoverable,
            size,
            title,
            avatarSrc,
            description,
            metaTitle,
            loading,
            body,
            imgSrc,
            meta,
        }
        return (
            <Frame {...rest} {...centerInContainer(this.props)}>
                <AntCard
                    style={{
                        height: `100%`,
                        width: `100%`,
                    }}
                    {...ComponentProps}
                    cover={
                        <img
                            src={imgSrc}
                        />
                    }
                >
                    {meta ? <AntCard.Meta
                        avatar={<Avatar src={avatarSrc} />}
                        title={metaTitle}
                        description={description}
                    /> : null}
                    <p>{body}</p>
                </AntCard>
            </Frame>
        )
    }
}