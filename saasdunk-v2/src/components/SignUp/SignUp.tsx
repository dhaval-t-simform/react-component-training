import SignUpStyle from "./SignUp.style";
import { images } from "../../config/images";
import { Button, Form, Input } from "antd";

const SignUp = () => {
  type FieldType = {
    "your-name"?: string;
    email?: string;
    password?: string;
    "confirm-password"?: string;
  };
  return (
    <SignUpStyle>
      <div className="signin-left">
        <div className="left-container">
          <div className="left-head">
            <images.saasDunk />
            <p>
              <span>Saas</span>dunk.
            </p>
          </div>
          <h2>Create Account</h2>

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
            <Form.Item<FieldType> label="YOUR NAME" name="your-name">
              <Input placeholder="Muarif" />
            </Form.Item>

            <Form.Item<FieldType> label="EMAIL" name="email">
              <Input placeholder="mumuarif@gmail.com" />
            </Form.Item>
            <Form.Item<FieldType> label="PASSWORD" name="password">
              <Input type="password" />
            </Form.Item>

            <Form.Item<FieldType>
              label="CONFIRM PASSWORD"
              name="confirm-password"
            >
              <Input type="password" />
            </Form.Item>

            <Form.Item>
              <button type="submit">SIGN UP</button>
            </Form.Item>
          </Form>

          <p className="tnc">
            By clicking Sign Up, you agree to our <span>Terms</span>,{" "}
            <span>Data Policy</span> and <span>Cookie Policy</span>.
          </p>

          <p className="left-foot">
            Already have account? <span>Sign In</span>.
          </p>
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
    </SignUpStyle>
  );
};

export default SignUp;
