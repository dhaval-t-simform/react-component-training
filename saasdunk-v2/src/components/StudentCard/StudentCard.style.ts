import styled from "styled-components";

const StudentCardStyle = styled.div`
  .student-card {
    position: relative;
    background-color: ${(props) => props.theme.white};
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
    background-color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme.blueBg100};
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
export default StudentCardStyle;
