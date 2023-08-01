// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD5fcozI0ZsHOPml26vcTQgNDXcDuH4Xcg",
  authDomain: "quiz-game-a1852.firebaseapp.com",
  projectId: "quiz-game-a1852",
  storageBucket: "quiz-game-a1852.appspot.com",
  messagingSenderId: "794698353433",
  appId: "1:794698353433:web:ca3afda24ca92b8c1d5388",
  measurementId: "G-NQVV0H15EX",
  databaseURL:'https://quiz-game-a1852-default-rtdb.firebaseio.com/',
};
initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
   
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);