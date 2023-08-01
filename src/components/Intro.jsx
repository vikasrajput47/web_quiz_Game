import "./Intro.css";
const Intro = () => {

  return (
    <div>
      <div className="intoMainBox">
        <div className="intro upAnime">
          <h1>Introduction</h1>
          <p>
            Welcome to our quiz experience! Challenge your knowledge, have a
            blast with our app! Dive into trivia, where learning is engaging.
            Test your wits, unlock achievements, and top the leaderboard. Ready
            for the challenge? Let's begin the quest for knowledge! Step into
            our quiz universe, let the games begin! Discover new facts, become a
            quiz master! Join the journey of exploration, curiosity, and
            quizzes. Prepare to be amazed, mind-boggling questions await! Time
            to exercise your brain! Unleash your inner genius, conquer quizzes.
            Ready to prove yourself? Show us what you've got! Knowledge awaits –
            let's start quizzing!
          </p>
        </div>
        <div className="rules upAnime">
          <h1>Rules</h1>
          <ul className="rulesL">
            <li>
              Welcome to the quiz game there will be 3 section in total and
              containing 10 questions and having marks 5 for each
            </li>
            <ol>
              <li>
                The first section contain the question related to Aptitude and
                Reasoning
              </li>
              <li>
                The second will contain the question related to the various
                trends in technologies
              </li>
              <li>The third section will contain question related to coding</li>
            </ol>
            <li>
              The total time limit will be 20 minutes the test will be
              automatically submitted
            </li>
            <li>There will a timer to keep the track of the time limit</li>
          </ul>
        </div>
        <div className="start start2">
          <a className="homeA" href="/quiz">
            Let's Start
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
