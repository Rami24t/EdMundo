import React, { useState } from "react";
import "./profileForm.css";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { MDBTypography } from "mdb-react-ui-kit";
import { useContext } from "react";
import { Context } from "../components/Context";
import axios from "axios";

const FormData = {
  name: "Your Name",
  email: "youremail@domain.com",
  phone: "1256783746",
  address: "Berlin, Berliner Plz., 1",
  class: "0z-00",
};

export default function ProfileForm({ role }) {
  const { state, dispatch } = useContext(Context);
  const [profile, setProfile] = useState({ ...state.user } || FormData);
  if (state.user.role === "student")
    profile.class = state.user?.currentClass?.name;
  // console.log("profile", state.user);
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // backend call /api/users/update
    axios
      .put(
        `${baseUrl}/api/${state.user.role}/update`,
        { phone: profile.phone, address: profile.address },
        { withCredentials: true },
      )
      .then((res) => {
        console.log("Save response:", res.data.user);
        if (res.status === 200) {
          alert("Profile updated successfully!");
        } else if (res.status !== 200) {
          alert("Profile update failed!");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

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
        name="phone"
        value={profile?.phone}
        onChange={handleChange}
        id="form6Example6"
        label="Phone"
      />
      <MDBInput
        wrapperClass="mb-4"
        id="form6Example4"
        name="address"
        label="Address"
        value={profile?.address}
        onChange={handleChange}
      />

      <MDBBtn onClick={handleSave} className="mb-4" type="submit" block>
        Save
      </MDBBtn>
    </form>
  );
}
