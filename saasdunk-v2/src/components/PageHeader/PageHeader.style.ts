import styled from "styled-components";

const PageHeaderStyle = styled.div`
  border-bottom: 1px solid #eceff8;
  max-height: 40rem;
  .page-header {
    display: grid;
    grid-template-columns: 4fr 1fr;
    /* height: 8.8rem; */
    padding: 2rem 3rem;
    align-items: center;
    background-color: white;
  }
  .search-notif {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 6rem 0 3rem;
  }

  .search {
    max-width: 65rem;
    border-radius: 11px;
    border: 1px solid #d2d5e1;
    background: #fafcfe;
    /* height: 4rem; */
  }
  .notif {
    width: 5rem;
  }
  .profile-info {
    display: flex;
    align-items: center;
  }
  .profile-info img {
    width: 4rem;
  }
  .profile-dropdown {
    margin-left: 2rem;
  }
  .profile-name {
    font-weight: 500;
    line-height: 2.2rem;
    font-size: 1.8rem;
    margin-right: 1rem;
    letter-spacing: 0.1rem;
    color: #242f57;
  }
`;

export default PageHeaderStyle;
