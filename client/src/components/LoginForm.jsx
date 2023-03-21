import React, { useState, useContext } from "react";
import axios from "axios";
import { useSWRConfig } from "swr";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { Context } from "./Context";
import styles from "./LoginForm.scss";
import LoginPageImage from "../assets/login-page-image.png";
import WavyRedLines from "../assets/wavy-red-lines.png";
import ThreeGreenLines from "../assets/three-green-lines.png";

function LoginForm() {
  const navigate = useNavigate();
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate } = useSWRConfig();
  const { state, dispatch } = useContext(Context);

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
          if (res.status === 200 && res.data.user.role) {
            dispatch({ type: "DATA", payload: res.data });
            navigate(`/${res.data.user.role}/profile`);
          } else if (res.status !== 200 || !res.data.user.role) {
            navigate("/login");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <MDBContainer fluid className="  h-custom login-container">
      <MDBRow className="d-flex  align-items-center login-form-container">
        <MDBCol col="10" className="login-image-container">
          {/* <img
            src={WavyRedLines}
            alt="wavy red lines"
            className="login-wavy-red-lines"
          /> */}
          <img
            src={LoginPageImage}
            className="img-fluid login-image"
            alt="Sample"
          />
        </MDBCol>

        <MDBCol className=" login-form" col="4" md="6">
          <header>
            <h1 className="login-form-header">
              Please <span className="violet-underline">login</span> here:
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
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
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
