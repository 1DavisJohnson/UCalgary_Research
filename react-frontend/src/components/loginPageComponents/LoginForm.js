import { useState } from "react";
import "./LoginForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import googleLogo from "../../images/loginPageImages/googleLogo.png";
import facebookLogo from "../../images/loginPageImages/facebookLogo.png";
function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  const onSignUpClick = () => {
    props.navigate("/signup");
  };
  return (
    <div>
      <div className="login-form-container">
        <button className="googleButton">
          <img src={googleLogo} alt="logo from google" />
          Login with Google
        </button>
        <button className="facebookButton">
          <img src={facebookLogo} alt="logo from facebook" />
          Login with Facebook
        </button>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            id="login"
            className=""
            name="username"
            placeholder="Username"
            onChange={usernameChangeHandler}
            value={username}
          />
          <input
            type="password"
            id="password"
            className=""
            name="login"
            placeholder="password"
            onChange={passwordChangeHandler}
            value={password}
          />
          <div className="formButtons">
            <input type="submit" className="" value="Log In" />
            <input
              type="button"
              className=""
              value="Sign-up"
              onClick={onSignUpClick}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
export default LoginForm;
