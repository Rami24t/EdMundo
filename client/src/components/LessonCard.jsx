import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBCol,
  MDBCardSubTitle,
  MDBCardHeader
} from 'mdb-react-ui-kit';

export default function LessonCard({lesson}) {
    // console.log("lesson: ", lesson);
  return (
    <>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>{lesson?.session?.subjectName} - {Date(lesson.date).slice(0,15)}</MDBCardTitle>
          <MDBCardHeader>
            <small className='text-muted'>Lesson {lesson?.session?.periodNumber}</small>
          </MDBCardHeader>
            <MDBCardSubTitle>
                {lesson?.topic} - {lesson?.objectives}
            </MDBCardSubTitle>
            <MDBCardText>
                {lesson?.description}
            </MDBCardText>
            
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
    </>
  );
}