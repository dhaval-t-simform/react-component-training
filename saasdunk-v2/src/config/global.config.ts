import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
* {
  margin: 0;
  padding: 0%;
  box-sizing: border-box;
  /* font-family: 'Poppins'; */
  font-family:'Inter';
  overflow:hidden;
}

ul {
  list-style: none;
}

li {
  display: inline-block;
}
/* h2{
  font-size:48px;
  font-weight:600;
  line-height:56px;
text-align: center;
}
h6 {
  font-size: 20px;
  color : ${(props) => props.theme.stateBold};
  line-height: 24px;
  text-align: center;
  font-weight: 600;
  letter-spacing: 0em;
} */
`;
