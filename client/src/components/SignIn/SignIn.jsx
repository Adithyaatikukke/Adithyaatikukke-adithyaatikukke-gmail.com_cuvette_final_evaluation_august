import style from "./SignIn.module.css";
import logo from "../../images/image1.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const [emailOrMobileNumber, setEmailOrMobileNumber] = useState();
  const [password, setPassword] = useState();
  const [emailOrMobileNumberError, setEmailOrMobileNumberError] =
    useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();
  const handleNavigateUserToSignInPage = (route) => {
    navigate(route);
  };

  const handleSubmit = () => {
    if (!emailOrMobileNumber && !password) {
      setPasswordError(true);
      setEmailOrMobileNumberError(true);
    } else if (!emailOrMobileNumber) {
      setEmailOrMobileNumberError(true);
    } else if (!password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      setEmailOrMobileNumberError(false);
      setEmailOrMobileNumber("");
      setPassword("");
    }
  };

  const handleSetUserEmailOrMonbileNumber = (value) => {
    setEmailOrMobileNumberError(false);
    setEmailOrMobileNumber(value);
  };
  const handleSetUserPasword = (value) => {
    setPasswordError(false);
    setPassword(value);
  };
  return (
    <section className={style.signin_container}>
      <div className={style.signin_top}>
        <img src={logo} alt="MusiCart" />
        <span>MusiCart</span>
      </div>
      <div className={style.signin_buttom}>
        <div className={style.signin_buttom_container1}>
          <div className={style.input_container}>
            <span>Sign in</span>
            <div className={style.input_section}>
              <label>Enter your email or mobile number</label>
              <input
                onChange={(e) =>
                  handleSetUserEmailOrMonbileNumber(e.target.value)
                }
                type="text"
                value={emailOrMobileNumber}
              />
              {emailOrMobileNumberError && (
                <span>Email or mobile number is required!</span>
              )}
            </div>
            <div className={style.input_section}>
              <label>Password</label>
              <input
                onChange={(e) => handleSetUserPasword(e.target.value)}
                type="password"
                value={password}
              />
              {passwordError && <span>Password is required!</span>}
            </div>
          </div>
          <div className={style.submit}>
            <button onClick={() => handleSubmit()}>Continue</button>
            <span>
              By continuing, you agree to Musicart privacy notice and conditions
              of use
            </span>
          </div>
        </div>
        <div className={style.signin_buttom_container2}>
          <div></div>
          <span>New to musicart?</span>
        </div>
        <div className={style.signin_buttom_container3}>
          <button onClick={() => handleNavigateUserToSignInPage("/sign-up")}>
            Create your Musicart account
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
