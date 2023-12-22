import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { useState } from "react";
import Header from "../components/PageHeader/PageHeader";
import AppLayoutStyle from "./AppLayout.style";
import { images } from "../config/images";
const { Sider } = Layout;
const AppLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

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
      <Layout hasSider>
        <Sider
          // collapsible
          width={"26rem"}
          // collapsed={collapsed}
          // onCollapse={(value) => setCollapsed(value)}
          className="sidebar"
          style={{ backgroundColor: "pink" }}
        >
          <div className="saas-head">
            <images.saasDunkWhite />
            <p>
              <span>Saas</span>dunk.
            </p>
          </div>

          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={demoItems}
            expandIcon={null}
            openKeys={["main", "communication", "pages", "settings"]}
            style={{
              backgroundColor: "red",
              height: "100vh",
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
