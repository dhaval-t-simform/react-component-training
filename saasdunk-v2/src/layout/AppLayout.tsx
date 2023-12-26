import { Layout } from "antd";
import type { MenuProps } from "antd";
// import { useState } from "react";
import Header from "../components/PageHeader/PageHeader";
import AppLayoutStyle from "./AppLayout.style";
import { images } from "../config/images";
import Menu from "./Menu.style";
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;
const AppLayout = ({ children }) => {
  const key = location.pathname.substring(1, location.pathname.length);
  // const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const demoItems: MenuProps["items"] = [
    {
      label: "Main",
      key: "main",
      children: [
        {
          label: "Dashboard",
          key: "dashboard",
          icon: <images.sidebar.dashboardIconWhite />,
        },
        {
          label: "Students",
          key: "students",
          icon: <images.sidebar.usersIconWhite />,
        },
        {
          label: "Courses",
          key: "courses",
          icon: <images.sidebar.boardIconWhite />,
        },
      ],
    },
    {
      label: "Communication",
      key: "communication",
      children: [
        {
          label: "Sign In",
          key: "sign-in",
          icon: <images.sidebar.inboxIconWhite />,
        },
        {
          label: "Sign Up",
          key: "sign-up",
          icon: <images.sidebar.chatIconWhite />,
        },
      ],
    },
    {
      label: "Pages",
      key: "pages",
      children: [
        {
          label: "File Manager",
          key: "file-manager",
          icon: <images.sidebar.fileManagerWhite />,
          disabled: true,
        },
        {
          label: "Calender",
          key: "calendar",
          icon: <images.sidebar.calendarIconWhite />,
          disabled: true,
        },
        {
          label: "Pricing",
          key: "pricing",
          icon: <images.sidebar.pricingIconWhite />,
          disabled: true,
        },
        {
          label: "Invoice",
          key: "invoice",
          icon: <images.sidebar.invoiceIconWhite />,
          disabled: true,
        },
        {
          label: "Documentation",
          key: "documentation",
          icon: <images.sidebar.documentationIconWhite />,
          disabled: true,
        },
      ],
    },
    {
      label: "Settings",
      key: "settings",
      icon: <images.sidebar.settingsIconWhite />,
      className: "settings",
      disabled: true,
    },
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
        >
          <div className="saas-head">
            <images.saasDunkWhite />
            <p>
              <span>Saas</span>dunk.
            </p>
          </div>

          <Menu
            // theme="dark"
            // className=""
            onClick={(e) => {
              navigate(e.key);
            }}
            expandIcon={null}
            mode="inline"
            selectedKeys={[key]}
            items={demoItems}
            openKeys={["main", "communication", "pages", "settings"]}
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
