import style from "./SignUp.module.css";
import logo from "../../images/image1.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const navigate = useNavigate();
  const handleNavigateUserToSignInPage = (route) => {
    navigate(route);
  };

  const handleSubmit = () => {
    if (!email && !password && !phoneNumber && !nameError) {
      setPasswordError(true);
      setEmailError(true);
      setNameError(true);
      setPhoneNumberError(true);
    } else if (!name) {
      setNameError(true);
    } else if (!email) {
      setEmailError(true);
    } else if (!password) {
      setPasswordError(false);
    } else if (!phoneNumber) {
      setPhoneNumberError(true);
    }
  };

  const handleSetUserEmail = (value) => {
    setEmailError(false);
    setEmail(value);
  };
  const handleSetUserPasword = (value) => {
    setPasswordError(false);
    setPassword(value);
  };
  const handleSetUserPhoneNumber = (value) => {
    setPhoneNumberError(false);
    setPhoneNumber(value);
  };
  const handleSetUserName = (value) => {
    setNameError(false);
    setName(value);
  };
  return (
    <section className={style.signup_container}>
      <div className={style.signup_top}>
        <img src={logo} alt="MusiCart" />
        <span>MusiCart</span>
      </div>
      <div className={style.signup_buttom}>
        <div className={style.signup_buttom_container1}>
          <div className={style.input_container}>
            <span>Create Account</span>
            <div className={style.input_section}>
              <label>Name</label>
              <input
                onClick={(e) => setName(e.target.value)}
                type="text"
                value={name}
              />
              {nameError && <span>Name is required!</span>}
            </div>
            <div className={style.input_section}>
              <label>Mobile number</label>
              <input
                onClick={(e) => setPhoneNumber(e.target.value)}
                type="text"
                value={email}
              />
              {phoneNumberError && <span>Mobile number is required!</span>}
            </div>
            <div className={style.input_section}>
              <label>Email id</label>
              <input
                onClick={(e) => setEmail(e.target.value)}
                type="text"
                value={email}
              />
              {emailError && <span>Email is required!</span>}
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
            <span>
              By enrolling your mobile phone number, you consent to receive
              automated security notifications via text message from Musicart.
              Message and data rates may apply.
            </span>
            <button onClick={() => handleSubmit()}>Continue</button>
            <span>
              By continuing, you agree to Musicart privacy notice and conditions
              of use
            </span>
          </div>
        </div>
        <div className={style.signup_buttom_container2}>
          <span className={style.have_account}>Already have an account?</span>
          <span
            onClick={() => handleNavigateUserToSignInPage("/sign-in")}
            className={style.signin}
          >
            Signin
          </span>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
