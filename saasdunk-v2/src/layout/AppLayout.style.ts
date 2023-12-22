import styled from "styled-components";

const AppLayoutStyle = styled.div`
  .saas-head {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    max-height: 8rem;
    background-color: #0080ff;
    border-bottom: 1px solid #3399ff;
  }
  .saas-head p span {
    font-weight: 800;
    line-height: 2.6rem;
  }
  .saas-head p {
    font-size: 2.8rem;
    line-height: 3rem;
    letter-spacing: 0.1rem;
    text-align: center;
    font-weight: 500;
    color: white;
    margin-left: 1rem;
  }

  .sidebar-nav {
    flex: 1;
    background-color: yellow;
    height: 100vh;
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
