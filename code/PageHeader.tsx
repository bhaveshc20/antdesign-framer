import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { PageHeader as AntPageHeader, Icon } from "antd"

// const routes = [
//     {
//         path: "index",
//         breadcrumbName: "All companies",
//     },
//     {
//         path: "first",
//         breadcrumbName: "Reforce International",
//     },
//     {
//         path: "second",
//         breadcrumbName: "Teams",
//     },
// ]

export function PageHeader(props) {
    const routes = props.breadcrumbs.map(l => ({ path: l, breadcrumbName: l }))
    return <AntPageHeader title={props.title} breadcrumb={{ routes }} />
}

PageHeader.defaultProps = {
    pageTitle: "Awesomeness",
    breadcrumbs: [],
}

addPropertyControls(PageHeader, {
    pageTitle: { type: ControlType.String, title: "Text" },
    breadcrumbs: {
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
        },
        title: "Breadcrumb items",
    },
})
