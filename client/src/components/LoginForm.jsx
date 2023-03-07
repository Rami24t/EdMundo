import React, { useState } from "react";
import { useSWRConfig } from "swr";
import axios from "axios";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";

function LoginForm() {
  const { mutate } = useSWRConfig();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate("/login", () =>
      axios.post("http://localhost:5001/api/users/login", { email, password })
    );
  };

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow className="d-flex  align-items-center ">
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid"
            alt="Sample"
          />
        </MDBCol>

        <MDBCol className="mt-4" col="4" md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="formControlLg"
            type="email"
            size="lg"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          />

          {/* <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div> */}

          <div className="text-center text-md-start mt-4 pt-2">
            <MDBBtn className="mb-0 px-5" size="lg" onClick={handleSubmit}>
              Login
            </MDBBtn>
            {/* <p className="d-none small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p> */}
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginForm;
