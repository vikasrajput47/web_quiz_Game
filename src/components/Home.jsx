import "./Home.css";
import quiz from "./img/quiz.png";

const Home = () => {
    
  return (
    <div>
      <div className="homeMidBox">
        <div className="photo  ">
          <img className="leftAnime" src={quiz} alt="" />
        </div>
        <div className="logo rightAnime">
          Are you ready to put your knowledge to the test? Get ready for an
          exhilarating journey through a world of questions and answers. Our
          quiz game will challenge your wits, broaden your horizons, and keep
          you on the edge of your seat!
        </div>
      </div>
      <div className="start">
        <a className="homeA" href= "/next">
          Next
        </a>
      </div>
    </div>
  );
};

export default Home;
