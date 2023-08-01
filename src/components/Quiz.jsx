import React, { useState, useEffect } from "react";
import { getDatabase, ref, set } from "firebase/database";
import data from "./data";
import './Quiz.css'
const Quiz = () => {
  const [start, setStart] = useState(true);
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const totalQuestion = data.length;
  const currQuestion = data[question];
  const [complete, setComplete] = useState(true);
  const initialTime = 20 * 60;
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [Name, setName] = useState("Vikas");
  const [pressedButton,setPressedButton]=useState(-1);
  const [ans,setAns]=useState('');
  //create the score record in firebase database
  const db = getDatabase();
  if(complete===false){
    set(ref(db, "score/" + Name), {
      score: score,
      username: Name,
    });
  }

//setting the timer for 20min
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining((prevTime) => prevTime - 1);
      } else {
        setComplete(false);
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [timeRemaining]);


  //setting the stopwatch
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };


//handelling questions
  const handleNextQuestion = () => {
    if(ans===currQuestion.answer ){
      setScore((prevScore)=>prevScore+5);
    }
    if (question + 1 < totalQuestion) {
      setQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setComplete(false);
    }
    setPressedButton(-1);
    
    setAns('');
  };
  
 


//set the user name
  const findName = (e) => {
    setName(e.target.value);
  };
  const checkStart=()=>{
    setStart(false)
  }
useEffect(() => {
  console.log(score)
}, [score]);
  return (
    <div>
  
      {start ? (
        <div className="userName">
          <input
            type="text"
            placeholder="Enter your name"
            onChange={findName}
          />{" "}
          <button onClick={checkStart}>Start!</button>
        </div>
      ) : null}
      {
        start===false ?
        complete ? (
          <div className="quesContainer">
            <div className="time">{formatTime(timeRemaining)}</div>
            <div className="question">
              {question === 0 ? <div className="cat">Aptitude Questions</div> : null}
              {question === 10 ? <div className="cat">Tech Questions</div> : null}
              {question === 20 ? <div className="cat">Coding Questions</div> : null}
              {currQuestion.question}
            <ol className="options">
              {currQuestion.options.map((option, index) => (
                <button
                key={index}
                onClick={() => {
                  setAns(option);
                  setPressedButton(index);
                }}
                style={{
                  backgroundColor:
                    pressedButton === index ? "green" : "white", 
                  
                }}
              >
                {option}
              </button>
              ))}
            </ol>
            <button className="quesBtn" onClick={handleNextQuestion }>next</button>
            </div>
          </div>
        ) : (
          <div className="score">
           <div>Your Score :{score}{" "}</div> 
            <div className="lead">
              <a href="/leader">LeaderBoard</a>
            </div>
          </div>
        )
        :null


      }
      
    </div>
  );
};

export default Quiz;



