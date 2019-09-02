import * as React from "react"
import { PropertyControls, ControlType } from "framer"

import { Radio as AntRadio } from "antd"

interface Props {
    style: "solid" | "outline"
    size: "small" | "default" | "large"
    numberofItems: number
    radio0: string
    radio1: string
    radio2: string
    radio3: string
    radio4: string
    radio5: string
    radio6: string
}

export class Radio extends React.Component<Props> {
    // Set default properties

    static defaultProps = {
        style: "solid",
        size: "default",
        numberofItems: 3,
        radio0: "Radio 1",
        radio1: "Radio 2",
        radio2: "Radio 3",
        radio3: "Radio 4",
        radio4: "Radio 5",
        radio5: "Radio 6",
    }

    // Items shown in property panel
    // Thanks to David Makuni & Tomas Didvalis for helping with the logic for this

    static propertyControls: PropertyControls = {
        numberofItems: {
            type: ControlType.Number,
            min: 1,
            max: 5,
            title: "Items",
        },
        radio0: { type: ControlType.String, title: "Radio 1" },
        radio1: {
            type: ControlType.String,
            title: "Radio 2",
            hidden: ({ numberofItems }) => numberofItems <= 1,
        },
        radio2: {
            type: ControlType.String,
            title: "Radio 3",
            hidden: ({ numberofItems }) => numberofItems <= 2,
        },
        radio3: {
            type: ControlType.String,
            title: "Radio 4",
            hidden: ({ numberofItems }) => numberofItems <= 3,
        },
        radio4: {
            type: ControlType.String,
            title: "Radio 5",
            hidden: ({ numberofItems }) => numberofItems <= 4,
        },
        radio5: {
            type: ControlType.String,
            title: "Radio 6",
            hidden: ({ numberofItems }) => numberofItems <= 5,
        },
        size: {
            type: ControlType.Enum,
            title: "Size",
            options: ["small", "default", "large"],
            optionTitles: ["Small", "Default", "Large"],
        },
        style: {
            type: ControlType.SegmentedEnum,
            options: ["outline", "solid"],
            optionTitles: ["Outline", "Solid"],
            title: "Style",
        },
    }

    render() {
        const {
            radio1,
            radio2,
            radio3,
            radio4,
            radio5,
            radio6,
            size,
            style,
            numberofItems,
        } = this.props
        // Radio style
        const radioStyle = {
            width: `${100 / numberofItems}%`,
        }
        // Build array of objects
        return (
            <div>
                <div>
                    <AntRadio.Group
                        style={{ overflow: "hidden" }}
                        defaultValue={1}
                        buttonStyle={style}
                        size={size}
                    >
                        {new Array(numberofItems)
                            .fill("item")
                            .map((item, index) => {
                                return (
                                    <AntRadio.Button
                                        style={radioStyle}
                                        value={index}
                                    >
                                        {this.props[`radio${index}`]}
                                    </AntRadio.Button>
                                )
                            })}
                    </AntRadio.Group>
                </div>
            </div>
        )
    }
}
