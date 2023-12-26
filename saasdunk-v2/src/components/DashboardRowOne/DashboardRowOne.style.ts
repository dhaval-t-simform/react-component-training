import styled from "styled-components";

const DashboardRowOneStyle = styled.div`
  .card-1 {
    background-color: ${(props) => props.theme.white};
    height: 16rem;
    width: inherit;
    border-radius: 13px;
    padding: 2.5rem 2rem;
  }
  .card-title {
    font-weight: 400;
    color: ${(props) => props.theme.grayText70};
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
    color: ${(props) => props.theme.greenText};
    margin-bottom: 0;
  }
  .card-per span {
    margin-left: 0.7rem;
  }
`;
export default DashboardRowOneStyle;
