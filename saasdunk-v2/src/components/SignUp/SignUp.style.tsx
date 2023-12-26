import styled from "styled-components";

const SignUpStyle = styled.div`
  height: 100vh;
  display: flex;
  /* grid-template-columns: 1fr 1.6fr; */
  .signin-left {
    width: 44%;
    background-color: ${(props) => props.theme.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .left-container {
    width: 55%;
    /* margin-top: 20rem; */
  }
  .left-head {
    display: flex;
    margin-bottom: 0.5rem;
  }
  .left-head p {
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 2.8rem;
    letter-spacing: 0.1rem;
    text-align: center;
    font-weight: 500;
    color: ${(props) => props.theme.primary};
    margin-left: 1rem;
  }
  .left-head p span {
    font-weight: 800;
  }
  .left-container h2 {
    color: ${(props) => props.theme.grayText100};
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 4rem;
    letter-spacing: 0.1rem;
    margin-bottom: 3rem;
  }
  .form-wrapper .ant-form-item {
    margin-bottom: 1.5rem;
  }
  .form-wrapper .ant-form-item .ant-form-item-label {
    padding-bottom: 1.5rem;
  }
  .form-wrapper label {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.5rem;
    letter-spacing: 0.15rem;
    color: ${(props) => props.theme.grayText70};
  }
  .form-wrapper input {
    border: 0.5px solid ${(props) => props.theme.grayText70};
    background-color: ${(props) => props.theme.inputBg};
    border-radius: 11px;
    height: 4rem;
  }
  .form-wrapper .ant-form-item:nth-child(4) {
    margin-bottom: 4rem;
  }
  .form-wrapper .ant-form-item button {
    color: ${(props) => props.theme.white};
    width: 100%;
    height: 5rem;
    border-radius: 11px;
    border: none;
    background-color: ${(props) => props.theme.blueBg100};
    font-size: 1.8rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    margin-bottom: 1.5rem;
  }

  .left-foot {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 66.66%;
    color: ${(props) => props.theme.grayText100};
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.8rem;
    letter-spacing: 0.1rem;
    height: 12rem;
  }

  .left-foot span {
    color: ${(props) => props.theme.blueBg100};
  }
  .signin-right {
    width: 56%;
    background-color: ${(props) => props.theme.primary};
    z-index: -2;
    position: relative;
  }
  .signin-right:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 34rem;
    height: 33rem;
    border-radius: 0px 50px;
    border: 1px solid ${(props) => props.theme.blueBorder80};
    z-index: -1;
  }
  .signin-right:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 60rem;
    height: 53rem;
    border-radius: 0px 50px;
    border: 1px solid ${(props) => props.theme.blueBorder80};
    z-index: -1;
  }

  .right-container {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .right-image {
    position: relative;
    border-radius: 4px;
    margin-bottom: 6rem;
    overflow: visible;
  }
  .right-image svg {
    border-radius: 1.5rem;
  }
  .right-image::before {
    content: "";
    position: absolute;
    top: -4rem;
    left: -4rem;
    width: 34rem;
    height: 33rem;
    border-radius: 0px 50px;
    background: #0075e8;
    z-index: -1;
  }
  .right-image::after {
    content: "";
    position: absolute;
    top: 24rem;
    left: 43rem;
    width: 12rem;
    height: 13rem;
    border-radius: 0px 50px;
    background: #1788f8;
    z-index: -1;
  }
  .dots {
    position: absolute;
    top: -6.2rem;
    left: 45.4rem;
  }
  .right-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    padding-top: 1em;
  }
  .right-info h3 {
    color: ${(props) => props.theme.white};
    text-align: center;
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 3.4rem;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;
  }
  .right-info p {
    color: ${(props) => props.theme.white};
    text-align: center;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.4rem;
    letter-spacing: 0.1rem;
    margin-bottom: 8rem;
  }
  .foot-svg {
    position: relative;
    overflow: visible;
  }
  .oval-svg {
    position: absolute;
    width: 6rem;
    height: 6rem;
    bottom: -2rem;
    left: -30rem;
  }
`;

export default SignUpStyle;
