import styled from "styled-components";

const StudentStyle = styled.div`
  background-color: #f4f7fc;
  /* background-color: beige; */
  /* overflow-y: hidden; */
  padding: 3rem;
  max-height: calc(100vh - 8rem);
  max-width: calc(100vw - 23.4rem);
  .page-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 3rem;
  }
  .page-header {
    display: flex;
  }
  .page-name {
    font-size: 2.6rem;
    font-weight: 700;
    line-height: 3.6rem;
    letter-spacing: 0.075rem;
    align-items: center;
    margin-right: 1rem;
  }
  .rectangle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 2rem;
    background-color: #369afe;
    border-radius: 15px;
    color: white;
    margin: auto;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.6rem;
    letter-spacing: 0.1rem;
  }
  .view {
    display: flex;
  }
  .toggle-view {
    width: 8rem;
    height: 4rem;
    border: 1px solid #d2d5e1;
    border-radius: 9px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-right: 1.5rem;
    /* background-color: inherit; */
  }
  .selected-view {
    border: 1px solid #eaedf7;
    border-radius: 9px;
    background-color: white !important;
    overflow: hidden;
    box-shadow: 0px 2px 4px 0px #1c295a;
  }
  .button-view {
    border: none;
    overflow: hidden;
    background-color: inherit;
  }
  .something {
    width: 21rem;
    height: 4rem;
    background-color: #369afe;
    border-radius: 9px;
  }
  .student-card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* row-gap: 3rem; */
    gap: 3rem;
  }
  .student-card {
    position: relative;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2.5rem 3rem;
    /* width: 90%; */
    border-radius: 11px;
    box-shadow: 0px 2px 4px 0px rgba(28, 41, 90, 0.04);
  }
  .student-card img {
    width: 7rem;
    padding-bottom: 1.5rem;
  }
  .student-card button {
    width: 13rem;
    height: 4rem;
    background-color: white;
    border: 1px solid #369afe;
    border-radius: 11px;
  }
  .student-card svg {
    position: absolute;
    top: 1.4rem;
    right: 1.4rem;
  }
  .student-name {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.8rem;
    letter-spacing: 0.1rem;
  }
  .student-email {
    padding-bottom: 1.5rem;
  }
`;

export default StudentStyle;
