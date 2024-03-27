import style from "./SignUp.module.css";
import logo from "../../images/image1.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BeatLoader } from "react-spinners";
import {
  registerUserAsync,
  user,
  userToggle,
} from "../../Redux/User/UserSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [loader, setloader] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigateUserToSignInPage = (route) => {
    navigate(route);
  };
  const userInfo = useSelector(user);
  const toggle = useSelector(userToggle);

  const handleSubmit = () => {
    const phonePattern = /^[6-9]\d{9}$/;
    const emailPattern = /\S+@\S+\.\S+/;
    if (!email && !password && !phoneNumber && !nameError) {
      setloader(false);
      setPasswordError(true);
      setEmailError(true);
      setNameError(true);
      setPhoneNumberError(true);
    } else if (!name) {
      setloader(false);
      setNameError(true);
    } else if (!email || !emailPattern.test(email)) {
      if (!email) {
        setloader(false);
        setEmailError(true);
      } else {
        toast.error("Please insert a valid email!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else if (!password) {
      setloader(false);
      setPasswordError(false);
    } else if (!phoneNumber || !phonePattern.test(phoneNumber)) {
      if (!phoneNumber) {
        setloader(false);
        setPhoneNumberError(true);
      } else {
        toast.error("Please insert a valid mobile number!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      const userData = {
        name,
        email,
        mobile: phoneNumber,
        password,
      };
      setloader(true);
      dispatch(registerUserAsync(userData));
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

  useEffect(() => {
    if (userInfo?.name) {
      navigate("/");
      setloader(false);
    }
  }, [toggle]);
  return (
    <section className={style.signup_container}>
      <ToastContainer />
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
                onChange={(e) => handleSetUserName(e.target.value)}
                type="text"
                value={name}
              />
              {nameError && <span>Name is required!</span>}
            </div>
            <div className={style.input_section}>
              <label>Mobile number</label>
              <input
                onChange={(e) => handleSetUserPhoneNumber(e.target.value)}
                type="text"
                value={phoneNumber}
              />
              {phoneNumberError && <span>Mobile number is required!</span>}
            </div>
            <div className={style.input_section}>
              <label>Email id</label>
              <input
                onChange={(e) => handleSetUserEmail(e.target.value)}
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
            <button onClick={() => handleSubmit()}>
              {!loader ? "Continue" : <BeatLoader size={13} color="white" />}
            </button>
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
