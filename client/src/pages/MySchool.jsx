import React from "react";
import SchoolForm from "../components/SchoolForm";
import teacher_profile_image from "../images/teacher_profile_image.png";
import student_profile_image from "../images/student_profile_image.png";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { MDBTypography } from "mdb-react-ui-kit";
import useUser from "../hooks/useUser";

const MySchool = () => {
  let { data } = useUser();
  data = data?.data;

  return (
    <>
      <MDBContainer fluid className="p-3 my-5 h-custom">
        {" "}
        <header className="text-center">
          <MDBTypography variant="h1">My School</MDBTypography>
        </header>
        <main>
          <MDBRow
            className="d-flex  align-items-center m-auto"
            style={{ maxWidth: "1300px" }}
          >
            <MDBCol col="10" md="6" className="d-flex justify-content-center">
              <img
                src={data.user.role==='student' ? teacher_profile_image : student_profile_image}
                alt="Student Profile Decorative "
                className="my-5 rounded object-cover"
                style={{ width: "20rem", height: "20rem" }}
              />
            </MDBCol>
            <MDBCol className="mt-4" col="4" md="6">
              <div className="  d-flex align-items-center justify-content-center">
                <SchoolForm data={data} />
              </div>
            </MDBCol>
          </MDBRow>
        </main>
      </MDBContainer>
    </>
  );
};

export default MySchool;
