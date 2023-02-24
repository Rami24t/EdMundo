import React from "react";
import { CiEdit } from "react-icons/ci";
import { TiDeleteOutline } from "react-icons/ti";
import "./lessonCard.css";

const LessonCard = () => {
  return (
    <>
      <div className="lesson-card">
        <div className="lesson-header">
          <div className="title-container">
            <h2>Math</h2>
          </div>
          <div className="buttons-container">
            <button className="edit-delete-buttons delete-button">
              <TiDeleteOutline />
            </button>
            <button className="edit-delete-buttons">
              <CiEdit />
            </button>
          </div>
        </div>
        <hr />
        <h4 className="topic">Topic: Odd numbers</h4>
        <div className="info-container">
          <div className="column">
            <p>Date: 04.04.23</p>
            <p>Slot: 8 - 8.30</p>
          </div>
          <div className="column">
            <p>
              Link: <a href="https://google.com"> google.com</a>
            </p>
            <p>Classwork: Book pg. 24-28</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LessonCard;
