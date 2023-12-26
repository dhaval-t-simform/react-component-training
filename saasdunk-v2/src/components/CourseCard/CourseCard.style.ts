import styled from "styled-components";

const CourseCardStyle = styled.div`
  .course-card {
    background-color: ${(props) => props.theme.white};
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
    border: 1px solid ${(props) => props.theme.grayBorder20};
  }
  .card-head span {
    font-size: 2rem;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: 0.1rem;
    color: ${(props) => props.theme.primary};
  }
  .course-tag {
    align-items: flex-start;
    padding: 0.5rem 1rem;
    background-color: ${(props) => props.theme.tagBg};
    color: ${(props) => props.theme.tag};
    border-radius: 5px;
    margin-bottom: 1.5rem;
  }
  .course-desc {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2.2rem;
    letter-spacing: 0.075rem;
    color: ${(props) => props.theme.grayText100};
    margin-bottom: 1.5rem;
  }
  .author-desc {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 2rem;
    border-bottom: 1px solid ${(props) => props.theme.grayBorder20};
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
    color: ${(props) => props.theme.grayText100};
  }
  .card-foot button {
    width: 14rem;
    height: 4rem;
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.primary};
    border: none;
    border-radius: 11px;
    font-size: 1.6rem;
    border: 1px solid ${(props) => props.theme.primary};
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 600;
  }
  .card-foot button:hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
  }
`;

export default CourseCardStyle;
