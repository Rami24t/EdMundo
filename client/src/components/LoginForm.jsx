import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSWRConfig } from "swr";
import axios from "axios";
import {Context} from "../components/Context";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import styles from "./LoginForm.scss";
import LoginPageImage from "../assets/login-page-image.png";
import ThreeGreenLines from "../assets/three-green-lines.png";

function LoginForm() {
  const navigate = useNavigate();
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate } = useSWRConfig();
  const { setUser } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate("/api/users/login", () => {
      axios
        .post(
          `${baseUrl}/api/users/login`,
          { email, password },
          { withCredentials: true },
        )
        .then((res) => {
          console.log(res.data);
          if(res.data.scheduleSettings) {
            sessionStorage.setItem("scheduleSettings", JSON.stringify(res.data.scheduleSettings));
          }
          if (res.status === 200 && res.data.user.role) {
            // console.log(" token from login form", res.data.token);
            setUser(res.data.user);
            // console.log(res.data?.school);
            sessionStorage.setItem("token", res.data.token);
            sessionStorage.setItem("school", JSON.stringify(res.data?.school));
            navigate(`/${res.data.user.role}/profile`);
          } else if (res.status !== 200 || !res.data.user.role) {
            navigate("/login");
          }
        })
        .catch((err) => {
          console.log(err.message);
          if(err.message === "Network Error") {
            setTimeout(() => {
              handleSubmit(e)
            }, 1000);
          }
        });
    });
  };

  return (
    <MDBContainer fluid className="  h-custom login-container">
      <MDBRow className="d-flex  align-items-center login-form-container">
        <MDBCol col="10" className="login-image-container">
          <img
            src={LoginPageImage}
            className="img-fluid login-image"
            alt="Sample"
          />
        </MDBCol>
        <MDBCol className=" login-form" col="4" md="6">
          <header>
            <h1 className="login-form-header mb-4">
              Log<span className="login-violet-color">in</span>
            </h1>
          </header>
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="formControlLg"
            type="email"
            size="lg"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="formControlLg"
            type="password"
            size="lg"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />

          {/* <div className="d-flex justify-content-between mb-4">
            <a href="!#">Forgot password?</a>
          </div> */}

          <div className="text-center text-md-start mt-4 pt-2 login-button-container">
            <MDBBtn
              className="mb-0 px-5 login-button"
              size="lg"
              onClick={handleSubmit}
            >
              Login
            </MDBBtn>
            {/* <p className="d-none small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p> */}
          </div>
        </MDBCol>
        <img
          src={ThreeGreenLines}
          alt="three green lines "
          className="login-three-green-lines"
        />
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginForm;
