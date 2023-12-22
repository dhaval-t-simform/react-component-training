import styled from "styled-components";

const SignUpStyle = styled.div`
  height: 100vh;
  display: flex;
  /* grid-template-columns: 1fr 1.6fr; */
  .signin-left {
    width: 44%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .left-container {
    width: 55%;
    margin-top: 20rem;
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
    color: #0080ff;
    margin-left: 1rem;
  }
  .left-head p span {
    font-weight: 800;
  }
  .left-container h2 {
    color: #242f57;
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 4rem;
    letter-spacing: 0.1rem;
    margin-bottom: 3rem;
  }
  .form-wrapper {
    /* background-color: black; */
  }
  .form-wrapper .ant-form-item {
    margin-bottom: 1.5rem;
  }
  .form-wrapper .ant-input-affix-wrapper {
    background-color: pink;
  }
  .form-wrapper .ant-form-item .ant-form-item-label {
    padding-bottom: 1.5rem;
  }
  .form-wrapper label {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.5rem;
    letter-spacing: 0.15rem;
    color: #97a0c3;
  }
  .form-wrapper input {
    border: 0.5px solid #97a0c3;
    background-color: #fafcfe;
    border-radius: 11px;
    height: 4rem;
  }
  .form-wrapper .ant-form-item:nth-child(4) {
    margin-bottom: 4rem;
  }
  .form-wrapper .ant-form-item button {
    color: white;
    width: 100%;
    height: 5rem;
    border-radius: 11px;
    border: none;
    background-color: #369afe;
    font-size: 1.8rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    margin-bottom: 1.5rem;
  }
  .tnc,
  .left-foot {
    width: 66.66%;
    color: #242f57;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.8rem;
    letter-spacing: 0.1rem;
    margin-bottom: 10rem;
  }
  .left-foot {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tnc span,
  .left-foot span {
    color: #369afe;
  }
  .left-foot span {
    margin-left: 0.5rem;
  }
  .signin-right {
    width: 56%;
    background-color: #0080ff;
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
    border: 1px solid #2291ff;
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
    border: 1px solid #2291ff;
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
    color: #fff;
    text-align: center;
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 3.4rem;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;
  }
  .right-info p {
    color: #fff;
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
