import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import { Collapse as AntCollapse, Icon } from "antd"
// import styled from "styled-components"
import "./Collapse.css"

const Panel = AntCollapse.Panel

interface Props {
    header1: string
    header2: string
    content1: string
    content2: string
    bordered: boolean
    collapse1height: number
    collapse2height: number
}

const customPanelStyle = {
    background: "#ffffff",
    borderRadius: 4,
    marginBottom: 0,
    border: 0,
    overflow: "hidden",
}

//const Content = styled.div`
//  div {
//    position: relative !important;
//    width: 100% !important;
//    height: 100% !important;
//  }
//`

export class Collapse extends React.Component<Props> {
    static defaultProps = {
        header1: "Header 1",
        header2: "Header 2",
        content1: "Accordion 1 Content",
        content2: "Accordion 2 Content",
        bordered: false,
        collapse1height: "800px",
        collapse2height: "800px",
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
        header1: { type: ControlType.String, title: "Header 1" },
        header2: { type: ControlType.String, title: "Header 2" },

        //Add this bit of code to add multiple connectors to a Frame
        content1: {
            type: ControlType.ComponentInstance,
            title: "Accordion 1",
        },
        content2: {
            type: ControlType.ComponentInstance,
            title: "Accordion 2",
        },
        bordered: {
            type: ControlType.Boolean,
            title: "Bordered",
            defaultValue: true,
            enabledTitle: "True",
            disabledTitle: "False",
        },
        collapse1height: {
            type: ControlType.Number,
            defaultValue: 800,
            min: 0,
            max: 1000,
            unit: "px",
            step: 1,
            displayStepper: true,
        },
        collapse2height: {
            type: ControlType.Number,
            defaultValue: 800,
            min: 0,
            max: 1000,
            unit: "px",
            step: 1,
            displayStepper: true,
        },
    }

    render() {
        const {
            header1,
            header2,
            content1,
            content2,
            children,
            bordered,
            collapse1height,
            collapse2height,
        } = this.props

        return (
            <AntCollapse bordered={bordered} defaultActiveKey={["1", "2"]}>
                <Panel header={header1} key="1" style={customPanelStyle}>
                    <div
                        style={{
                            position: "relative",
                            height: this.props.collapse1height,
                        }}
                    >
                        {content1}
                    </div>
                </Panel>
                <Panel header={header2} key="2" style={customPanelStyle}>
                    <div
                        style={{
                            position: "relative",
                            height: this.props.collapse2height,
                        }}
                    >
                        {content2}
                    </div>
                </Panel>
            </AntCollapse>
        )
    }
}

//   <div style={{ position: "relative", height: "268px" }}>
//                     </div>
// React.cloneElement(props.children, { height: props.height, width: props.width })
