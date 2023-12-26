import { Menu as AntdMenu } from "antd";
import styled from "styled-components";

const Menu = styled(AntdMenu)`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  height: 100vh;
  font-weight: 500;
  font-size: 15px;
  border-width: 0;

  .ant-menu-submenu-title {
    padding-left: 2.5rem !important;
    margin: 2.5rem 0 0 0 !important;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.6rem;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
  }
  .ant-menu-submenu-title:hover,
  .ant-menu-submenu-title:active {
    background-color: rgba(0, 0, 0, 0) !important;
  }
  .ant-menu-submenu-title {
    color: ${(props) => props.theme.white} !important;
  }
  .ant-menu-item:hover,
  .ant-menu-item:active,
  .ant-menu-item-selected {
    color: ${(props) => props.theme.white} !important;
    background-color: ${(props) => props.theme.blueBg70} !important;
    border-radius: 0 8px 8px 0;
  }

  .ant-menu-item {
    width: 100%;
    padding: 2.5rem !important;
    margin: 0 !important;
    justify-content: space-between !important;
  }
  .ant-menu-item span {
    margin-left: 1.5rem;
    font-size: 1.8rem;
    font-weight: 400;
    letter-spacing: 0.1rem;
  }

  .settings {
    margin-top: 3rem !important;
  }
  li {
    width: 90%;
    background-color: ${(props) => props.theme.primary}!important;
    /* background-color: ${(props) => props.theme.white} !important; */
    /* padding: 2rem; */
  }
`;

export default Menu;
