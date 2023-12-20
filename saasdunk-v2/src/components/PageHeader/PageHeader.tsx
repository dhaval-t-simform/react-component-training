import { Avatar, Dropdown, Input, MenuProps, Space } from "antd";
import PageHeaderStyle from "./PageHeader.style";
import {
  BellOutlined,
  DownOutlined,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const PageHeader = () => {
  const items: MenuProps["items"] = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];
  return (
    <PageHeaderStyle>
      <div className="page-header">
        <div className="search-notif">
          <Input className="search" />
          <BellOutlined style={{ fontSize: "2.2rem" }} />
        </div>
        <div className="profile-info">
          <Avatar size={34} icon={<UserOutlined />} />
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            className="profile-dropdown"
          >
            <a onClick={(e) => e.preventDefault()}>
              <span className="profile-name">Dhaval Thakkar</span>
              <DownOutlined style={{ fontSize: "1rem" }} />
            </a>
          </Dropdown>
        </div>
      </div>
      <hr />
    </PageHeaderStyle>
  );
};

export default PageHeader;
