import SignInStyle from "./SignIn.style";
import { images } from "../../config/images";
import { Button, Checkbox, Form, Input } from "antd";

const SignIn = () => {
  type FieldType = {
    "your-name"?: string;
    email?: string;
    password?: string;
    "confirm-password"?: string;
    remember?: string;
  };
  return (
    <SignInStyle>
      <div className="signin-left">
        <div className="left-container">
          <div className="left-head">
            <images.saasDunk />
            <p>
              <span>Saas</span>dunk.
            </p>
          </div>
          <h2>Welcome Back!</h2>

          <Form
            name="basic"
            layout="vertical"
            labelCol={{ span: 16 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            className="form-wrapper"
          >
            <Form.Item<FieldType> label="EMAIL" name="email">
              <Input placeholder="mumuarif@gmail.com" />
            </Form.Item>
            <Form.Item<FieldType> label="PASSWORD" name="password">
              <Input type="password" />
            </Form.Item>

            <Form.Item<FieldType> name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <button type="submit">SIGN IN</button>
            </Form.Item>
          </Form>

          <div className="left-foot">
            <p className="forgot">
              <span>Forgot Password?</span>
            </p>
            <p className="register">
              Don't have account? <span> Register</span>.
            </p>
          </div>
        </div>
      </div>
      <div className="signin-right">
        <div className="right-container">
          <div className="right-image">
            <images.signup.signUpImage />
            <div className="dots">
              <images.signup.signUpDots />
            </div>
          </div>
          <div className="right-info">
            <h3>Connect and manage with your team!</h3>
            <p>
              Aziest Jordan is one of the biggest superstars to have immerged
              from the professional designer in world.
            </p>
          </div>
          <div className="foot-svg">
            <div className="oval-svg">
              <images.signup.signUpOval />
            </div>
            <images.signup.signUpFooter />
          </div>
        </div>
      </div>
    </SignInStyle>
  );
};

export default SignIn;
