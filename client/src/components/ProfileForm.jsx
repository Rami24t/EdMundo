import React from "react";
import "./profileForm.css";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { MDBTypography } from "mdb-react-ui-kit";
import { useContext } from "react";
import { Context } from "../components/Context";

const FormData = {
  name: "Carol Peletier",
  email: "peletier_school@school.com",
  phone: "1256783746",
  address: "Berlin, Berliner Plz., 1",
  class: "9a-23",
};

export default function ProfileForm({ role }) {
  const { state, dispatch } = useContext(Context);
  const profile = {...state.user} || FormData;
  profile.class = state.user?.currentClass?.name;
  console.log("profile", state.user);



  return (
    <form className="profileForm">
      <MDBTypography variant="h2" className="header-2">
        Hello, {profile?.name.split(" ")[0]}! Here you can edit your
        information.
      </MDBTypography>
      <MDBRow className="mb-4">
        <MDBCol>
          <MDBInput
            label={profile?.name}
            placeholder={profile?.name}
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
          defaultValue={profile?.class}
          id="form6Example5"
          label="Class"
          readonly
          disabled
        />
      ) : null}
      <MDBInput
        wrapperClass="mb-4"
        type="email"
        defaultValue={profile?.email}
        id="form6Example5"
        label="Email"
        readonly
        disabled
      />
      <MDBInput
        wrapperClass="mb-4"
        type="tel"
        defaultValue={profile?.phone}
        id="form6Example6"
        label="Phone"
      />
      <MDBInput
        wrapperClass="mb-4"
        id="form6Example4"
        label="Address"
        defaultValue={profile?.address}
      />

      <MDBBtn className="mb-4" type="submit" block>
        Save
      </MDBBtn>
    </form>
  );
}
