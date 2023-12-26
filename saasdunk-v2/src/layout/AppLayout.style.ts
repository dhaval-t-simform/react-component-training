import styled from "styled-components";

const AppLayoutStyle = styled.div`
  .saas-head {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    max-height: 8rem;
    background-color: ${(props) => props.theme.primary};
    border-bottom: 1px solid #3399ff;
    cursor: pointer;
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
    color: ${(props) => props.theme.white};
    margin-left: 1rem;
  }

  .sidebar-nav {
    flex: 1;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .sidebar-ul {
    display: flex;
    flex-direction: column;
  }
`;

export default AppLayoutStyle;
