import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="text-center text-lg-start text-muted footer">
      <section className="p-1">
        <MDBContainer className="text-center text-md-start mt-4 ">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-2 "><a
                href="https://github.com/Rami24t/EdMundo"
                className="m-3 text-reset"
              >
              <span>Check out our github repository  </span>
              
                <MDBIcon fab icon="github" />
              </a>
            </MDBCol>
            <MDBCol md="3" className="mx-auto" />
            <MDBCol md="3" className="mx-auto" />
          </MDBRow>
        </MDBContainer>
      </section>

      <section className="footer-body">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">About us</h6>
              <p>
                We are a group of students who have completed a Full-Stack Web/Software Development
                course at Digital Career Institute in 2023. This was our final
                project that we have built using the MERN stack.
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4 w-50 text-center d-flex flex-column align-content-around">
              <h6 className="text-uppercase fw-bold mb-4">Credits</h6>
              <p>
                Mr. Rami Al-Saadi
                <a href="https://github.com/Rami24t" className="m-3 text-reset">
                  <MDBIcon fab icon="github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rami-al-saadi-16a14223a"
                  className="me-3 text-reset"
                >
                  <MDBIcon fab icon="linkedin" />
                </a>
              </p>
              <p>
                Ms. Alina Cuznetov
                <a
                  href="https://github.com/alinaincodeland"
                  className="m-3 text-reset"
                >
                  <MDBIcon fab icon="github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/alina-cuznetov-733071138"
                  className="me-3 text-reset"
                >
                  <MDBIcon fab icon="linkedin" />
                </a>
              </p>
              <p>
                Mrs. Julia Kobzar
                <a href="https://github.com/ju8ko" className="m-3 text-reset">
                  <MDBIcon fab icon="github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/julia-kobzar-497bb5164"
                  className="me-3 text-reset"
                >
                  <MDBIcon fab icon="linkedin" />
                </a>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Tech stack</h6>
              <p className="mb-0">React JS</p>
              <p className="mb-0">MongoDB</p>
              <p className="mb-0">Express JS</p>
              <p className="mb-0">Node JS</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className="text-center pt-2 pb-4">
        &copy; {new Date().getFullYear()}
      </div>
    </MDBFooter>
  );
}
