import React from "react";
import "./profileForm.css";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { MDBTypography } from "mdb-react-ui-kit";

const FormData = {
  name: "Carol Peletier",
  email: "peletier_school@school.com",
  phone: "1256783746",
  address: "Berlin, Berliner Plz., 1",
  class: "9a-23",
};

export default function ProfileForm({ role }) {
  return (
    <form className="profileForm">
      <MDBTypography variant="h2" className="header-2">
        Hello, {FormData.name.split(" ")[0]}! Here you can edit your
        information.
      </MDBTypography>
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
      {role === "student" ? (
        <MDBInput
          wrapperClass="mb-4"
          type="text"
          defaultValue={FormData.class}
          id="form6Example5"
          label="Class"
          readonly
          disabled
        />
      ) : null}
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
