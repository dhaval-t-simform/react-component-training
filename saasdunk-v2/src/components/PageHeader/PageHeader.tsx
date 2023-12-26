import { Dropdown, Input, MenuProps } from "antd";
import PageHeaderStyle from "./PageHeader.style";
import { images } from "../../config/images";

const PageHeader = () => {
  const items: MenuProps["items"] = [
    {
      label: "My Profile",
      key: "0",
    },
    {
      label: "View Profile",
      key: "1",
    },
  ];
  return (
    <PageHeaderStyle>
      <div className="page-header">
        <div className="search-notif">
          <Input className="search" prefix={<images.header.searchIcon />} />
          {<images.header.notificationIcon />}
        </div>
        <div className="profile-info">
          <img src={images.student.student1} alt="User Image" />
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            className="profile-dropdown"
          >
            <a onClick={(e) => e.preventDefault()}>
              <span className="profile-name">Kinanthi Ayani </span>
              <images.dashboard.downOutlined />
            </a>
          </Dropdown>
        </div>
      </div>
    </PageHeaderStyle>
  );
};

export default PageHeader;
