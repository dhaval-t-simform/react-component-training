import styled from "styled-components";

const CoursesStyle = styled.div`
  background-color: ${(props) => props.theme.contentBg};
  padding: 3rem;
  max-height: calc(100vh - 8rem);
  max-width: calc(100vw - 23.4rem);
  overflow-y: scroll;
  .page-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 3rem;
  }
  .page-header {
    /* padding-bottom: 3rem; */
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
    letter-spacing: 0.1rem;
    align-items: center;
  }
  .page-summary span {
    font-weight: 500;
    color: ${(props) => props.theme.primary};
  }
  .page-end {
    display: flex;
    align-items: center;
  }
  .select {
    margin-right: 3rem;
  }
  .dropdown-options {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .dropdown-options p {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.1rem;
    color: ${(props) => props.theme.grayText100};
  }
  .filter-button {
    width: 4rem;
    height: 4rem;
    border: 1px solid ${(props) => props.theme.grayBorder30};
    border-radius: 9px;
    margin-right: 1.5rem;
    background-color: ${(props) => props.theme.white};
  }
  .toggle-view {
    width: 8rem;
    height: 4rem;
    border: 1px solid ${(props) => props.theme.grayBorder30};
    border-radius: 9px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* margin-right: 1.5rem; */
    /* background-color: inherit; */
  }
  .selected-view {
    border-radius: 9px;
    background-color: ${(props) => props.theme.white} !important;
    box-shadow: 0px 2px 4px 0px ${(props) => props.theme.boxShadowBlack};
  }
  .button-view {
    border: none;
    overflow: hidden;
    background-color: inherit;
  }
  .courses-card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* row-gap: 3rem; */
    gap: 3rem;
  }
`;

export default CoursesStyle;
