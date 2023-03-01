import React from "react";
import "./profileForm.css";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";

const FormData = {
  name: "Carol Peletier",
  email: "peletier_school@school.com",
  phone: "1256783746",
  address: "Berlin, Berliner Plz., 1",
};
const FormDataStudent = {
  name: "Daryl Dixon",
  email: "dixon_school@school.com",
  phone: "1256783746",
  address: "Berlin, Berliner Plz., 1",
};

export default function ProfileForm() {
  return (
    <form className="profileForm">
      <MDBRow className="mb-4">
        <MDBCol>
          <MDBInput
            label={FormData.name}
            placeholder={FormData.name}
            id="formControlReadOnly"
            type="text"
            readonly
            disabled
          />
        </MDBCol>
      </MDBRow>
      <MDBInput
        wrapperClass="mb-4"
        type="email"
        defaultValue={FormData.email}
        id="form6Example5"
        label="Email"
        readonly
        disabled
      />
      <MDBInput
        wrapperClass="mb-4"
        type="tel"
        defaultValue={FormData.phone}
        id="form6Example6"
        label="Phone"
      />
      <MDBInput
        wrapperClass="mb-4"
        id="form6Example4"
        label="Address"
        defaultValue={FormData.address}
      />

      <MDBBtn className="mb-4" type="submit" block>
        Save
      </MDBBtn>
    </form>
  );
}
