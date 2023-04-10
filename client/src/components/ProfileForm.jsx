import React, { useState, useEffect } from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBSpinner } from "mdb-react-ui-kit";
import { MDBTypography } from "mdb-react-ui-kit";
import axios from "axios";


const FormData = {
  name: "Your Name",
  email: "youremail@domain.com",
  phone: "1256783746",
  address: "Berlin, Berliner Plz., 1",
  class: "0z-00",
};

export default function ProfileForm({data, user}) {

 
  let [profile, setProfile] = useState(FormData);

  useEffect(() => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      name: data?.user?.name,
      email: data?.user?.email,
      phone: data?.user?.phone,
      address: data?.user?.address,
      class: data?.user?.currentClass?.name,
    }));
  }, [data?.user]);

  const baseUrl = process.env.REACT_APP_BASE_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (data?.user?.role) {
      axios
        .put(
          `${baseUrl}/api/${data?.user?.role}/update`,
          { phone: profile.phone, address: profile.address },
          { withCredentials: true },
        )
        .then((res) => {
          // console.log("Save response:", res.data.user);
          if (res.status === 200) {
            alert("Profile updated successfully!");
          } else if (res.status !== 200) {
            alert("Profile update failed!");
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  // if (error) return <div><p>Some error has happened.</p> <p>Please try refreshing your page.</p></div>;
  if (!data?.user?.name && !user?.name)
    return (
      <div>
        <MDBSpinner grow style={{ width: "3rem", height: "3rem" }}>
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
      </div>
    );
    else if(!data?.user?.name && user?.name)
      profile=(user);
  return (
    <form className="profile-form">
      <MDBTypography className="fs-6 mb-3">
        Hello{profile.name ? " , " + profile?.name?.split(" ")[0] : ""}! Here
        you can edit your information.
      </MDBTypography>
      <MDBRow className="mb-4">
        <MDBCol>
          <MDBInput
            label={profile?.name || "Name"}
            placeholder={profile?.name}
            type="text"
            readOnly
            disabled
          />
        </MDBCol>
      </MDBRow>
      {data?.user?.role === "student" && (
        <MDBInput
          wrapperClass="mb-4"
          type="text"
          value={profile?.class}
          label="Class"
          readonly
          disabled
        />
      )}
      <MDBInput
        wrapperClass="mb-4"
        type="email"
        value={profile?.email}
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
        label="Phone"
      />
      <MDBInput
        wrapperClass="mb-4"
        name="address"
        label="Address"
        value={profile?.address}
        onChange={handleChange}
      />
      <MDBBtn className="fs-6 fw-bold rounded-pill mb-4" onClick={handleSave} type="submit" block>
        Save
      </MDBBtn>
    </form>
  );
}
