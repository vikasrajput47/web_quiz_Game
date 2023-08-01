import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="navbar downAnime">
        <div className="left">
          <li className="navbarItems">
            <a href="/home">Home</a>
          </li>
          <li className="navbarItems">
            <a href="/leader">Leaderboard</a>
          </li>
          <li className="navbarItems">
            <a href="/about">About</a>
          </li>
        </div>
        <li className="navbarItems icon">
         
        &#x1F4D6;
          
        </li>
      </div>
    </div>
  );
};

export default Navbar;
