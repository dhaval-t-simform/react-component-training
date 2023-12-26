import styled from "styled-components";

const DashboardRowTwoStyle = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  max-height: 90rem;
  .marketing-card {
    background-color: ${(props) => props.theme.white};
    border-radius: 13px;
    padding: 2.5rem 2rem;
  }
  .marketing-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
  }
  .marketing-head h2 {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: 0.1rem;
  }
  .marketing-head p {
    color: ${(props) => props.theme.grayText80};
    font-weight: 400;
    line-height: 2.6rem;
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
  }
  .rectangle {
    height: 1.6rem;
    width: 1.6rem;
    background-color: ${(props) => props.theme.blueBg100};
    border-radius: 3px;
  }
  .select {
    margin-right: 3rem;
  }
  .dropdown-options {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .dropdown-options p {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.1rem;
    color: ${(props) => props.theme.grayText100};
  }
  .marketing-stat {
    display: flex;
  }
  .marketing-card-row {
    width: inherit;
    border-radius: 13px;
    padding: 2.5rem 2rem;
    background-color: ${(props) => props.theme.white};
  }
  .marketing-card-title {
    font-weight: 400;
    color: ${(props) => props.theme.grayText70};
    font-size: 1.6rem;
    line-height: 2.4rem;
    letter-spacing: 0.1rem;
  }
  .marketing-card-values {
    display: flex;
    align-items: center;
  }
  .marketing-card-value {
    font-size: 2.4rem;
    line-height: 3rem;
    letter-spacing: 0.2rem;
    align-items: center;
    font-weight: 700;
  }
  .marketing-card-per {
    font-size: 1.4rem;
    line-height: 1.7rem;
    letter-spacing: 0.1rem;
    display: flex;
    align-items: center;
    font-weight: 500;
    color: ${(props) => props.theme.greenText};
    margin: 0 0 0.5rem 0.5rem;
  }
  .marketing-card-per span {
    margin-left: 0.7rem;
  }
  .marketing-graph svg {
    width: 100%;
  }
  .marketing-col-2 {
    display: grid;
    grid-template-rows: 1fr 1fr;
    margin-left: 3rem;
    row-gap: 3rem;
  }
  .marketing-user,
  .marketing-members {
    background-color: ${(props) => props.theme.white};
    border-radius: 13px;
    padding: 3rem 3rem 1rem;
  }
  .marketing-user {
    display: grid;
    grid-template-rows: 5.5fr 4.5fr;
  }
  .user-row-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.whiteBorder30};
  }
  .user-report {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2rem;
  }
  .user-report p,
  .marketing-members p {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3rem;
    letter-spacing: 0.1rem;
  }
  .user-report span {
    color: ${(props) => props.theme.violet60};
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.2rem;
    letter-spacing: 0.1rem;
  }
  .progress-bar {
    display: inline !important;
    align-items: center;
    justify-content: center;
  }
  .ant-progress-bg {
    height: 17px !important;
  }
  .user-row-2 {
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding: 3rem; */
    gap: 7rem;
    margin-top: 0.5rem;
  }

  .user-row-2-col-1,
  .user-row-2-col-2 {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  .user-row-2-col-1 {
    margin-left: 2rem;
  }
  .user-row-2-col-2 {
    margin-right: 2rem;
  }

  .user-row-2-col-1 p,
  .user-row-2-col-2 p {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.8rem;
    letter-spacing: 0.1rem;
    color: ${(props) => props.theme.grayText70};
  }
  .user-row-2-col-1 span,
  .user-row-2-col-2 span {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: 0.1rem;
    color: ${(props) => props.theme.grayText100};
  }

  .members-col p {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.8rem;
    letter-spacing: 0.1rem;
    color: ${(props) => props.theme.grayText70};
  }
  .members-col span {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: 0.1rem;
    color: ${(props) => props.theme.grayText100};
  }
  .marketing-graph {
    width: 100%;
  }
`;

export default DashboardRowTwoStyle;
