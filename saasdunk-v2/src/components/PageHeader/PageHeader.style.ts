import styled from "styled-components";

const PageHeaderStyle = styled.div`
  .page-header {
    display: grid;
    grid-template-columns: 4fr 1fr;
    /* height: 8.8rem; */
    padding: 2rem 3rem;
    align-items: center;
    background-color: aqua;
  }
  .search-notif {
    display: flex;
    justify-content: space-between;
    padding: 0 6rem 0 3rem;
  }
  .search {
    max-width: 65rem;
    border-radius: 11px;
    /* height: 4rem; */
  }
  .notif {
    width: 5rem;
  }
  .profile-info {
    /* margin: 0 auto; */
    display: flex;
    align-items: center;
  }
  .profile-dropdown {
    margin-left: 2rem;
  }
  .profile-name {
    font-size: 1.8rem;
    margin-right: 1rem;
    letter-spacing: 0.075rem;
  }
`;

export default PageHeaderStyle;
