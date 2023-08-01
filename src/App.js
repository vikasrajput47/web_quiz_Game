import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro";
import Quiz from "./components/Quiz";
import LeaderBoard from "./components/LeaderBoard";
import About from "./components/About";

const App = () => {

  return (
    <div>
        <BrowserRouter>
          <Navbar />
          <Routes> 
            <Route exact path="/" element={<Home  />}></Route>
            <Route exact path="/home" element={<Home />}></Route>
            <Route path="/next" element={<Intro  />}></Route>
            <Route path="/quiz" element={<Quiz   />}></Route>
            <Route path="/leader" element={<LeaderBoard   />}></Route>
            <Route path="/about" element={<About   />}></Route>
          </Routes>
        </BrowserRouter>
    
    </div>
  );
};

export default App;
