import React, { useState, useEffect } from "react";
import { MDBInput, MDBBtn, MDBSpinner } from "mdb-react-ui-kit";
import { MDBTypography } from "mdb-react-ui-kit";
import axios from "axios";

export default function SchoolForm({data}) {
  const [school, setschool] = useState(data?.school || JSON.parse(sessionStorage.getItem("school")));
  useEffect(() => {
    setschool((prevschool) => ({
      ...prevschool, ...data?.school || sessionStorage.getItem("school")
    }));
  }, [data?.school]);

  const baseUrl = process.env.REACT_APP_BASE_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setschool((prevschool) => ({ ...prevschool, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (data?.user?.role === "admin") {
      axios
        .put(
          `${baseUrl}/api/${data?.user?.role}/updateSchool`,
          { phone: school.phone, email: school.email },
          { withCredentials: true },
        )
        .then((res) => {
          // console.log("Save response:", res.data.user);
          if (res.status === 200) {
            alert("Updated successfully!");
          } else if (res.status !== 200) {
            alert("Update failed!");
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  // if (error) return <div><p>Some error has happened.</p> <p>Please try refreshing your page.</p></div>;
  if (!data?.user?.name)
    return (
      <div>
        <MDBSpinner grow style={{ width: "3rem", height: "3rem" }}>
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
      </div>
    );
  return (
    <form className="schoolForm">
      <MDBTypography className="fs-6 mb-3">
        {school?.name}
      </MDBTypography>
      {/* <MDBRow className="mb-4">
        <MDBCol>
          <MDBInput
            value={school?.name}
            type="text"
            label="School"
            name="name"
            readOnly
          />
        </MDBCol>
      </MDBRow> */}
      <MDBInput
        wrapperClass="mb-4"
        name="address"
        label="Address"
        readOnly
        disabled
        value={`${school?.zip} ${school?.city}, ${school?.address}`}
      />
      <MDBInput
        wrapperClass="mb-4"
        type="state"
        value={school?.state}
        label="State"
        readonly
        disabled
      />
      <MDBInput
        wrapperClass="mb-4"
        type="tel"
        name="phone"
        value={school?.phone}
        onChange={handleChange}
        readonly
        disabled
        label="Phone"
      />
      <MDBInput
        wrapperClass="mb-4"
        type="email"
        value={school?.email}
        label="Email"
        readonly
        disabled
      />
      {data?.user?.role ==='admin' && <MDBBtn onClick={handleSave} className="mb-4" type="submit" block>
        Save
      </MDBBtn>}
    </form>
  );
}
