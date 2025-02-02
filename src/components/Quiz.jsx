import axios from "axios";
import React, { useEffect, useState } from "react";
import Question from "./Question";
import Options from "./Options";
import "../App.css";

const Quiz = () => {
  const [buttonState, setButtonClicked] = useState(false);
  const [question, setQuestion] = useState([]);
  const [index, setindex] = useState(0);

  const fetchQues = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/ques");
      const data = response.data.questions;
      setQuestion(data);
      console.log(data);
    } catch (error) {
      console.error("ERROR WHILE FETCHING DATA FROM API");
    }
  };
  useEffect(() => {
    // if (buttonState) {
    fetchQues();
    //   setButtonClicked(false);
    // }
  }, [buttonState]);

  const handleClick = () => {
    setButtonClicked((prev) => !prev);
  };
  const handleNext = () => {
    setindex((prev) => (prev + 1) % question.length);
    console.log("CLICKED");
  };
  const handlePrev = () => {
    // if (index<question.length) {
    //   setindex(1)
    // }
    setindex((prev) => (prev - 1) % question.length);
  };
  return (
    <div className="quiz-page">
      <h2>{`${index} of ${question.length}`}</h2>
      <div className="ques-div">
        {question === null || question.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div>
            <Question data={question[index].description} />
            <Options options={question[index].options} />
          </div>
        )}
      </div>
      {/* <button onClick={handleClick}>click</button> */}
      <div className="btns">
        {question.length > 0 && index > 0 && (
          <button onClick={handlePrev}>Previous</button>
        )}

        <button className="next-btn" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Quiz;
