import styled from "styled-components";

const PageContentStyle = styled.div`
  background-color: ${(props) => props.theme.contentBg};
  padding: 3rem;
  max-height: calc(100vh - 8rem);
  max-width: calc(100vw - 23.4rem);
  /* overflow-y: hidden; */
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
    color: ${(props) => props.theme.primary};
  }
  .card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    gap: 3rem;
    padding-bottom: 3rem;
  }
`;

export default PageContentStyle;
