import styled from "styled-components";

const StudentStyle = styled.div`
  background-color: ${(props) => props.theme.contentBg};
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
    background-color: ${(props) => props.theme.blueBg100};
    border-radius: 15px;
    color: ${(props) => props.theme.white};
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
    border: 1px solid ${(props) => props.theme.grayBorder30};
    border-radius: 9px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-right: 1.5rem;
    /* background-color: inherit; */
  }
  .selected-view {
    border: 1px solid ${(props) => props.theme.whiteBorder30};
    border-radius: 9px;
    background-color: ${(props) => props.theme.white} !important;
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
    background-color: ${(props) => props.theme.blueBg100};
    border-radius: 9px;
  }
  .student-card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* row-gap: 3rem; */
    gap: 3rem;
  }
`;

export default StudentStyle;
