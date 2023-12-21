import styled from "styled-components";

const PageContentStyle = styled.div`
  background-color: #f4f7fc;
  padding: 3rem;
  max-height: calc(100vh - 8.8rem);
  max-width: calc(100vw - 23.4rem);
  .page-header {
    padding-bottom: 3rem;
  }
  .page-name {
    font-size: 2.6rem;
    font-weight: 700;
    line-height: 3.6rem;
    letter-spacing: 0.075rem;
    align-items: center;
  }
  .page-summary {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.9rem;
    letter-spacing: 0.075rem;
    align-items: center;
  }
  .page-span {
    font-weight: 500;
    color: #0080ff;
  }
  .card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    gap: 3rem;
    padding-bottom: 3rem;
  }
  .card-1 {
    background-color: white;
    height: 16rem;
    width: inherit;
    border-radius: 13px;
    padding: 2.5rem 2rem;
  }
  .card-title {
    font-weight: 400;
    color: #97a0c3;
    font-size: 2.2rem;
    margin-bottom: 1rem;
    line-height: 3rem;
    letter-spacing: 0.075rem;
  }
  .card-values-graph {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
  .card-value {
    font-size: 4rem;
    line-height: 3.2rem;
    letter-spacing: 0.25rem;
    align-items: center;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  .card-graph {
    width: 100%;
  }
  .card-graph svg {
    height: 70px;
    width: 160px;
  }
  .card-per {
    font-size: 1.5rem;
    line-height: 1.7rem;
    letter-spacing: 0.1rem;
    display: flex;
    align-items: center;
    font-weight: 500;
    color: #04b78a;
    margin-bottom: 0;
  }
  .card-per span {
    margin-left: 0.7rem;
  }
  .row-2 {
    display: grid;
    grid-template-columns: 3fr 1fr;
    max-height: 90rem;
  }
  .marketing-card {
    background-color: white;
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
    color: #636e95;
    font-weight: 400;
    line-height: 2.6rem;
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
  }
  .rectangle {
    height: 1.6rem;
    width: 1.6rem;
    background-color: #369afe;
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
    color: #242f57;
  }
  .marketing-stat {
    display: flex;
  }
  .marketing-card-row {
    width: inherit;
    border-radius: 13px;
    padding: 2.5rem 2rem;
    background-color: white;
  }
  .marketing-card-title {
    font-weight: 400;
    color: #97a0c3;
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
    color: #04b78a;
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
    background-color: white;
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
    border-bottom: 1px solid #eaedf7;
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
    color: #9390f3;
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
    color: #97a0c3;
  }
  .user-row-2-col-1 span,
  .user-row-2-col-2 span {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: 0.1rem;
    color: #242f57;
  }

  .members-col p {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.8rem;
    letter-spacing: 0.1rem;
    color: #97a0c3;
  }
  .members-col span {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: 0.1rem;
    color: #242f57;
  }
  .marketing-graph {
    width: 100%;
  }
`;

export default PageContentStyle;

// .user-row-2-col {
//   align-items: center;
//   justify-content: center;
//   display: flex;
//   flex-direction: column;
//   margin-left: 2rem;
// }
// .user-row-2-col p {
//   font-size: 1.8rem;
//   font-weight: 400;
//   line-height: 2.8rem;
//   letter-spacing: 0.1rem;
//   color: #97a0c3;
// }
// .user-row-2-col span {
//   font-size: 2.4rem;
//   font-weight: 700;
//   line-height: 3rem;
//   letter-spacing: 0.1rem;
//   color: #242f57;
// } */
// /* .marketing-members p {
//   padding: 3rem;
// }
