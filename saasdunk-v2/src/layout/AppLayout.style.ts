import styled from "styled-components";

const AppLayoutStyle = styled.div`
  .layout {
    margin: 0;
    display: flex;
    min-height: 100vh;
  }
  .sidebar {
    background-color: #f9f9f9;
  }
  .saas-head {
    padding: 3rem 1.5rem;
    background-color: skyblue;
    height: 8.8rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .saas-title {
    font-size: 2.2rem;
    line-height: 2.63rem;
    letter-spacing: 0.05rem;
    font-weight: 500;
  }
  .hr {
    color: #aaa;
  }
  .sidebar-nav {
    flex: 1;
    background-color: yellow;
    height: calc(100vh - 9rem);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .sidebar-ul {
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
  }
  .list {
    background-color: black;
  }
  .menu-list {
    background-color: #f9f9f9;
    color: #5c5f62;
    font-weight: 500;
    font-size: 1.5px;
    border-width: 0;
  }
`;

export default AppLayoutStyle;
