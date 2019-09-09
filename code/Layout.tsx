import {
    Layout as AntLayout,
    Menu as AntMenu,
    Breadcrumb as AntBreadcrumb,
    Icon as AntIcon,
} from "antd"
import * as React from "react"
import { Frame, FrameProps, PropertyControls, ControlType } from "framer"
import "./App.css"
import { centerInContainer } from "./Utils"

interface Props extends FrameProps {
    layout: string
    width: number
    height: number
    defaultCollapsed: boolean
    collapsed: boolean
    collapsedWidth: number
    theme: string
}

export class Layout extends React.Component<Props> {
    static defaultProps = {
        layout: "Header-Content-Footer",
        width: "100%",
        height: "100%",
        defaultCollapsed: true,
        collapsed: false,
        collapsedWidth: 80,
        theme: "light",
    }

    static propertyControls: PropertyControls = {
        layout: {
            type: ControlType.Enum,
            title: "Type",
            options: [
                "Header-Content-Footer",
                "H-S-C-S-F",
                "Header Sider 2",
                "Header-Sider",
                "Responsive",
                "Fixed Header",
            ],
        },
        defaultCollapsed: {
            type: ControlType.Boolean,
            title: "Default collapsed",
            defaultValue: true,
            enabledTitle: "True",
            disabledTitle: "False",
        },
        collapsed: {
            type: ControlType.Boolean,
            title: "Collapsed",
            defaultValue: false,
            enabledTitle: "True",
            disabledTitle: "False",
        },
        collapsedWidth: {
            type: ControlType.Number,
            title: "Collapsed width",
            defaultValue: 0,
            min: 0,
            max: 360,
            unit: "px",
            step: 1,
            displayStepper: false,
        },
        theme: {
            type: ControlType.Enum,
            title: "Theme",
            options: ["light", "dark"],
            optionTitles: ["Light", "Dark"],
        },
        children: {
            type: ControlType.ComponentInstance,
        },
    }

    render() {
        const {
            layout,
            width,
            height,
            defaultCollapsed,
            collapsed,
            collapsedWidth,
            theme,
            children,
        } = this.props
        const { Header, Footer, Sider, Content } = AntLayout
        const { SubMenu } = AntMenu

        if (layout == "Header-Content-Footer")
            return (
                <AntLayout
                    className="layout"
                    style={{
                        width: this.props.width,
                        height: this.props.height,
                    }}
                >
                    <Header>
                        <div className="logo" />
                        <AntMenu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={["2"]}
                            style={{ lineHeight: "64px" }}
                        >
                            <AntMenu.Item key="1">nav 1</AntMenu.Item>
                            <AntMenu.Item key="2">nav 2</AntMenu.Item>
                            <AntMenu.Item key="3">nav 3</AntMenu.Item>
                        </AntMenu>
                    </Header>
                    <Content style={{ padding: "0 50px" }}>
                        <AntBreadcrumb style={{ margin: "16px 0" }}>
                            <AntBreadcrumb.Item>Home</AntBreadcrumb.Item>
                            <AntBreadcrumb.Item>List</AntBreadcrumb.Item>
                            <AntBreadcrumb.Item>App</AntBreadcrumb.Item>
                        </AntBreadcrumb>
                        <div
                            style={{
                                background: "#fff",
                                padding: 24,
                                minHeight: 280,
                            }}
                        >
                            Content
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </AntLayout>
            )

        if (layout == "H-S-C-S-F")
            return (
                <AntLayout
                    style={{
                        width: this.props.width,
                        height: this.props.height,
                    }}
                >
                    <Header
                        theme={theme}
                        style={{ backgroundColor: "#FFFFFF" }}
                    >
                        Header
                    </Header>
                    <AntLayout>
                        <Sider theme={theme}>Sider</Sider>
                        <Content theme={theme}>Content</Content>
                        <Sider theme={theme}>Sider</Sider>
                    </AntLayout>
                    <Footer
                        theme={theme}
                        style={{ backgroundColor: "#FFFFFF" }}
                    >
                        Footer
                    </Footer>
                </AntLayout>

                /*
                <AntLayout
                    className="layout"
                    style={{
                        width: this.props.width,
                        height: this.props.height,
                    }}
                >
                    <Header>
                        <div className="logo" />
                        <AntMenu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={["2"]}
                            style={{ lineHeight: "64px" }}
                        >
                            <AntMenu.Item key="1">nav 1</AntMenu.Item>
                            <AntMenu.Item key="2">nav 2</AntMenu.Item>
                            <AntMenu.Item key="3">nav 3</AntMenu.Item>
                        </AntMenu>
                    </Header>
                    <Content style={{ padding: "0 50px" }}>
                        <AntBreadcrumb style={{ margin: "16px 0" }}>
                            <AntBreadcrumb.Item>Home</AntBreadcrumb.Item>
                            <AntBreadcrumb.Item>List</AntBreadcrumb.Item>
                            <AntBreadcrumb.Item>App</AntBreadcrumb.Item>
                        </AntBreadcrumb>
                        <div
                            style={{
                                background: "#fff",
                                padding: 24,
                                minHeight: 280,
                            }}
                        >
                            Content
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </AntLayout>*/
            )

        if (layout == "Header Sider 2")
            return (
                <AntLayout
                    style={{
                        width: this.props.width,
                        height: this.props.height,
                    }}
                >
                    <Header className="header">
                        <div className="logo" />
                        <AntMenu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={["2"]}
                            style={{ lineHeight: "64px" }}
                        >
                            <AntMenu.Item key="1">nav 1</AntMenu.Item>
                            <AntMenu.Item key="2">nav 2</AntMenu.Item>
                            <AntMenu.Item key="3">nav 3</AntMenu.Item>
                        </AntMenu>
                    </Header>
                    <AntLayout>
                        <Sider
                            width={200}
                            style={{ background: "#fff" }}
                            defaultCollapsed={defaultCollapsed}
                            collapsed={collapsed}
                        >
                            <AntMenu
                                mode="inline"
                                defaultSelectedKeys={["1"]}
                                defaultOpenKeys={["sub1"]}
                                style={{ height: "100%", borderRight: 0 }}
                            >
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span>
                                            <AntIcon type="user" />
                                            subnav 1
                                        </span>
                                    }
                                >
                                    <AntMenu.Item key="1">option1</AntMenu.Item>
                                    <AntMenu.Item key="2">option2</AntMenu.Item>
                                    <AntMenu.Item key="3">option3</AntMenu.Item>
                                    <AntMenu.Item key="4">option4</AntMenu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub2"
                                    title={
                                        <span>
                                            <AntIcon type="laptop" />
                                            subnav 2
                                        </span>
                                    }
                                >
                                    <AntMenu.Item key="5">option5</AntMenu.Item>
                                    <AntMenu.Item key="6">option6</AntMenu.Item>
                                    <AntMenu.Item key="7">option7</AntMenu.Item>
                                    <AntMenu.Item key="8">option8</AntMenu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub3"
                                    title={
                                        <span>
                                            <AntIcon type="notification" />
                                            subnav 3
                                        </span>
                                    }
                                >
                                    <AntMenu.Item key="9">option9</AntMenu.Item>
                                    <AntMenu.Item key="10">
                                        option10
                                    </AntMenu.Item>
                                    <AntMenu.Item key="11">
                                        option11
                                    </AntMenu.Item>
                                    <AntMenu.Item key="12">
                                        option12
                                    </AntMenu.Item>
                                </SubMenu>
                            </AntMenu>
                        </Sider>
                        <AntLayout style={{ padding: "0 24px 24px" }}>
                            <AntBreadcrumb style={{ margin: "16px 0" }}>
                                <AntBreadcrumb.Item>Home</AntBreadcrumb.Item>
                                <AntBreadcrumb.Item>List</AntBreadcrumb.Item>
                                <AntBreadcrumb.Item>App</AntBreadcrumb.Item>
                            </AntBreadcrumb>
                            <Content
                                style={{
                                    background: "#fff",
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                Content
                            </Content>
                        </AntLayout>
                    </AntLayout>
                </AntLayout>
            )
        if (layout == "Header-Sider")
            return (
                <AntLayout
                    style={{
                        width: this.props.width,
                        height: this.props.height,
                    }}
                >
                    <Header className="header">
                        <div className="logo" />
                        <AntMenu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={["2"]}
                            style={{ lineHeight: "64px" }}
                        >
                            <AntMenu.Item key="1">nav 1</AntMenu.Item>
                            <AntMenu.Item key="2">nav 2</AntMenu.Item>
                            <AntMenu.Item key="3">nav 3</AntMenu.Item>
                        </AntMenu>
                    </Header>
                    <Content style={{ padding: "0 50px" }}>
                        <AntBreadcrumb style={{ margin: "16px 0" }}>
                            <AntBreadcrumb.Item>Home</AntBreadcrumb.Item>
                            <AntBreadcrumb.Item>List</AntBreadcrumb.Item>
                            <AntBreadcrumb.Item>App</AntBreadcrumb.Item>
                        </AntBreadcrumb>
                        <AntLayout
                            style={{ padding: "24px 0", background: "#fff" }}
                        >
                            <Sider
                                width={200}
                                style={{ background: "#fff" }}
                                defaultCollapsed={defaultCollapsed}
                                collapsed={collapsed}
                            >
                                <AntMenu
                                    mode="inline"
                                    defaultSelectedKeys={["1"]}
                                    defaultOpenKeys={["sub1"]}
                                    style={{ height: "100%" }}
                                >
                                    <SubMenu
                                        key="sub1"
                                        title={
                                            <span>
                                                <AntIcon type="user" />
                                                subnav 1
                                            </span>
                                        }
                                    >
                                        <AntMenu.Item key="1">
                                            option1
                                        </AntMenu.Item>
                                        <AntMenu.Item key="2">
                                            option2
                                        </AntMenu.Item>
                                        <AntMenu.Item key="3">
                                            option3
                                        </AntMenu.Item>
                                        <AntMenu.Item key="4">
                                            option4
                                        </AntMenu.Item>
                                    </SubMenu>
                                    <SubMenu
                                        key="sub2"
                                        title={
                                            <span>
                                                <AntIcon type="laptop" />
                                                subnav 2
                                            </span>
                                        }
                                    >
                                        <AntMenu.Item key="5">
                                            option5
                                        </AntMenu.Item>
                                        <AntMenu.Item key="6">
                                            option6
                                        </AntMenu.Item>
                                        <AntMenu.Item key="7">
                                            option7
                                        </AntMenu.Item>
                                        <AntMenu.Item key="8">
                                            option8
                                        </AntMenu.Item>
                                    </SubMenu>
                                    <SubMenu
                                        key="sub3"
                                        title={
                                            <span>
                                                <AntIcon type="notification" />
                                                subnav 3
                                            </span>
                                        }
                                    >
                                        <AntMenu.Item key="9">
                                            option9
                                        </AntMenu.Item>
                                        <AntMenu.Item key="10">
                                            option10
                                        </AntMenu.Item>
                                        <AntMenu.Item key="11">
                                            option11
                                        </AntMenu.Item>
                                        <AntMenu.Item key="12">
                                            option12
                                        </AntMenu.Item>
                                    </SubMenu>
                                </AntMenu>
                            </Sider>
                            <Content
                                style={{ padding: "0 24px", minHeight: 280 }}
                            >
                                Content
                            </Content>
                        </AntLayout>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </AntLayout>
            )
        if (layout == "Responsive")
            return (
                <AntLayout
                    style={{
                        width: this.props.width,
                        height: this.props.height,
                    }}
                >
                    <Sider
                        breakpoint="lg"
                        collapsedWidth={collapsedWidth}
                        defaultCollapsed={defaultCollapsed}
                        collapsed={collapsed}
                        theme={theme}
                        onBreakpoint={broken => {
                            console.log(broken)
                        }}
                        onCollapse={(collapsed, type) => {
                            console.log(collapsed, type)
                        }}
                    >
                        <div className="logo" />
                        <AntMenu
                            theme={theme}
                            mode="inline"
                            defaultSelectedKeys={["4"]}
                        >
                            <AntMenu.Item key="1">
                                <AntIcon type="user" />
                                <span className="nav-text">nav 1</span>
                            </AntMenu.Item>
                            <AntMenu.Item key="2">
                                <AntIcon type="video-camera" />
                                <span className="nav-text">nav 2</span>
                            </AntMenu.Item>
                            <AntMenu.Item key="3">
                                <AntIcon type="upload" />
                                <span className="nav-text">nav 3</span>
                            </AntMenu.Item>
                            <AntMenu.Item key="4">
                                <AntIcon type="user" />
                                <span className="nav-text">nav 4</span>
                            </AntMenu.Item>
                        </AntMenu>
                    </Sider>
                    <AntLayout>
                        <Header style={{ background: "#fff", padding: 0 }} />
                        <Content style={{ margin: "24px 16px 0" }}>
                            <div
                                style={{
                                    padding: 24,
                                    background: "#fff",
                                    minHeight: 360,
                                }}
                            >
                                content
                            </div>
                        </Content>
                        <Footer style={{ textAlign: "center" }}>
                            Ant Design ©2018 Created by Ant UED
                        </Footer>
                    </AntLayout>
                </AntLayout>
            )
        if (layout == "Fixed Header")
            return (
                <AntLayout
                    style={{
                        width: this.props.width,
                        height: this.props.height,
                    }}
                >
                    <Header
                        style={{ position: "fixed", zIndex: 1, width: "100%" }}
                    >
                        <div className="logo" />
                        <AntMenu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={["2"]}
                            style={{ lineHeight: "64px" }}
                        >
                            <AntMenu.Item key="1">nav 1</AntMenu.Item>
                            <AntMenu.Item key="2">nav 2</AntMenu.Item>
                            <AntMenu.Item key="3">nav 3</AntMenu.Item>
                        </AntMenu>
                    </Header>
                    <Content style={{ padding: "0 50px", marginTop: 64 }}>
                        <AntBreadcrumb style={{ margin: "16px 0" }}>
                            <AntBreadcrumb.Item>Home</AntBreadcrumb.Item>
                            <AntBreadcrumb.Item>List</AntBreadcrumb.Item>
                            <AntBreadcrumb.Item>App</AntBreadcrumb.Item>
                        </AntBreadcrumb>
                        <div
                            style={{
                                background: "#fff",
                                padding: 24,
                                minHeight: 380,
                            }}
                        >
                            Content
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </AntLayout>
            )
    }
}
