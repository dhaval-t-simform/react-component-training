import styled from "styled-components";

const CoursesStyle = styled.div`
  /* background-color: #f4f7fc; */
  background-color: beige;
  padding: 3rem;
  max-height: 100vh;
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
    color: #0080ff;
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
    color: #242f57;
  }
  .filter-button {
    width: 4rem;
    height: 4rem;
    border: 1px solid #d2d5e1;
    border-radius: 9px;
    margin-right: 1.5rem;
    background-color: white;
  }
  .toggle-view {
    width: 8rem;
    height: 4rem;
    border: 1px solid #d2d5e1;
    border-radius: 9px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* margin-right: 1.5rem; */
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
  .courses-card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* row-gap: 3rem; */
    gap: 3rem;
  }
  .course-card {
    background-color: white;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 2rem 3rem;
    /* width: 90%; */
    border-radius: 11px;
    box-shadow: 0px 2px 4px 0px rgba(28, 41, 90, 0.04);
  }
  .card-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1.5rem;
  }
  .card-head img {
    height: 4rem;
    width: 4rem;
    padding: 0.5rem;
    border-radius: 11px;
    border: 1px solid #e2e5f0;
  }
  .card-head span {
    font-size: 2rem;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: 0.1rem;
    color: #0080ff;
  }
  .course-tag {
    align-items: flex-start;
    padding: 0.5rem 1rem;
    background-color: #e4e5ff;
    color: #434bff;
    border-radius: 5px;
    margin-bottom: 1.5rem;
  }
  .course-desc {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2.2rem;
    letter-spacing: 0.075rem;
    color: #242f57;
    margin-bottom: 1.5rem;
  }
  .author-desc {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 2rem;
    border-bottom: 1px solid #e2e5f0;
    width: 100%;
  }
  .author-desc img {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 1rem;
  }
  .author-desc p {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: 0.1rem;
  }
  .card-foot {
    padding: 2rem 0 1rem;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
  .card-rating {
    display: flex;
    align-items: center;
  }
  .card-rating svg {
    height: 2.4rem;
    width: 2.4rem;
    margin-right: 1rem;
  }
  .card-rating p {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.6rem;
    letter-spacing: 0.1rem;
    color: #242f57;
  }
  .card-foot button {
    width: 14rem;
    height: 4rem;
    background-color: white;
    color: #0080ff;
    border: none;
    border-radius: 11px;
    font-size: 1.6rem;
    border: 1px solid #0080ff;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 600;
  }
  .card-foot button:hover {
    background-color: #0080ff;
    color: white;
  }
`;

export default CoursesStyle;
