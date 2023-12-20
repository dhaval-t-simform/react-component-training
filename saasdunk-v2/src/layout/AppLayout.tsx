import { Layout, Menu, Space } from "antd";
import {
  BarChartOutlined,
  ShopOutlined,
  TeamOutlined,
  RedditOutlined,
  UserOutlined,
} from "@ant-design/icons";

import type { MenuProps } from "antd";
import { useState } from "react";
import Header from "../components/PageHeader/PageHeader";
import AppLayoutStyle from "./AppLayout.style";

const { Sider } = Layout;
const AppLayout = ({ children }) => {
  type MenuItem = Required<MenuProps>["items"][number];
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const [collapsed, setCollapsed] = useState(false);
  const items: MenuProps["items"] = [
    getItem(
      "MAIN",
      "grp",
      null,
      [
        getItem("Dashboard", "1", <BarChartOutlined />),
        getItem("Contact 1", "2", <BarChartOutlined />),
        getItem("Contact 2", "3", <BarChartOutlined />),
      ],
      "group"
    ),
    getItem(
      "COMMUNICATION",
      "grp",
      null,
      [
        getItem("Chat 1", "4", <BarChartOutlined />),
        getItem("Chat 2", "5", <BarChartOutlined />),
      ],
      "group"
    ),
    getItem(
      "PAGES",
      "grp",
      null,
      [
        getItem("File", "6", <BarChartOutlined />),
        getItem("Calendar", "7", <BarChartOutlined />),
        getItem("Pricing", "8", <BarChartOutlined />),
        getItem("Invoice 1", "9", <BarChartOutlined />),
        getItem("Invoice 2", "10", <BarChartOutlined />),
      ],
      "group"
    ),
    getItem("Settings", "1", <BarChartOutlined />),
  ];

  const demoItems: MenuProps["items"] = [
    {
      label: "Main",
      key: "main",
      children: [
        { label: "Dashboard", key: "dashboard", icon: "" },
        { label: "Contact 1", key: "contact-1", icon: "" },
        { label: "Contact 2", key: "contact-2", icon: "" },
      ],
    },
    {
      label: "Communication",
      key: "communication",
      children: [
        { label: "Chat 1", key: "chat-1", icon: "" },
        { label: "Chat 2", key: "chat-2", icon: "" },
      ],
    },
    {
      label: "Pages",
      key: "pages",
      children: [
        { label: "File", key: "file", icon: "" },
        { label: "Calendar", key: "calendar", icon: "" },
        { label: "Pricing", key: "pricing", icon: "" },
        { label: "Invoice 1", key: "invoice-1", icon: "" },
        { label: "Invoice 2", key: "invoice-2", icon: "" },
      ],
    },
    { label: "Settings", key: "settings", icon: "" },
  ];

  return (
    <AppLayoutStyle>
      <Layout
        hasSider
        className="layout"
        // style={{ margin: "0", minHeight: "100vh" }}
      >
        <Sider
          // collapsible
          width={"23.4rem"}
          // collapsed={collapsed}
          // onCollapse={(value) => setCollapsed(value)}
          className="sidebar"
        >
          <div className="saas-head">
            <RedditOutlined style={{ fontSize: "2rem" }} />
            <span className="saas-title">Saas Dunk</span>
          </div>
          <hr className="hr" />

          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={demoItems}
            expandIcon={null}
            openKeys={["main", "communication", "pages", "settings"]}
            style={{
              backgroundColor: "red",
              height: "calc(100vh - 8.8rem)",
              fontWeight: "500",
              fontSize: "15px",
              borderWidth: 0,
            }}
          />
        </Sider>

        <Layout
          className="border-solid border-l-bg border-r-0 border-t-0 border-b-0 border-l-0"
          style={{ borderStyle: "solid", border: 0 }}
        >
          <Header />
          {children}
        </Layout>
      </Layout>
    </AppLayoutStyle>
  );
};
export default AppLayout;

{
  /* </Space> */
}
