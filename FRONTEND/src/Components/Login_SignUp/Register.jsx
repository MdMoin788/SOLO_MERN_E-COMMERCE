import React, { useState } from "react";
import axios from "axios";
import Styles from "../../Styles/LoginResgiter.module.css";
import { Link } from "react-router-dom";
import StylesNAV from "../../Styles/Styles.module.css"
import Navbar from "../Navbar/Navbar";

export default function Register() {
  const[toggle,setToggle]=useState(true)
  const [user, setUser] = useState({
    firstName:"",
    lastName:"",
    email: "",
    password: "",
  });
  const handleRegister = (e) => {
    
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    user.email!="" && user.password!="" && user.lastName != "" && user.firstName != ""?  setToggle(false) : <></>

    console.log("user", user);
  };
  const handleregisterSubmit = () => {
    axios.post("https://moin-mern.herokuapp.com/register", user).then((res) => {
      console.log(res.data.token);
    });
  };
  return (

  <>
  
  <div className={StylesNAV.Navbar}>
    <Navbar></Navbar>
</div>

    <div className={Styles.login_container}>
      <h1>Register/Sign Up</h1>
      <div className={Styles.login_input}>
        <input
          className={Styles.inputBox}
          type="text"
          placeholder="Enter first Name here."
          name="firstName"
          onChange={handleRegister}
        />
        <input
          className={Styles.inputBox}
          type="text"
          placeholder="Enter last Name here."
          name="lastName"
          onChange={handleRegister}
        />
        <input
          className={Styles.inputBox}
          type="text"
          placeholder="Enter email here."
          name="email"
          onChange={handleRegister}
        />
        <input
          className={Styles.inputBox}
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleRegister}
        />
     
        <div className={Styles.login_btn}>
          <Link to="/login">
            <button
              className={Styles.submit}
              type="submit"
              onClick={handleregisterSubmit}
              disabled={toggle}
            >
              Register
            </button>
          </Link>
        </div>
        <br />
        <div className={Styles.login_btns}>
          <Link to="/login" className={Styles.link_btn}>
            Already a user? Click here
            <button
              className={Styles.submits}
              type="submit"
              onClick={handleregisterSubmit}
            >
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  </>
  );
}