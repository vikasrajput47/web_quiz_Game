import './About.css'
import In from './img/in.png'
import codechef from './img/codechef.png'
import git from './img/git.png'
import hr from './img/hr.png'
import gfg from './img/gfg.png'
const About = () => {
 
  return (
    <div>
      <div className="mainAbt">
        <div className="contentAbt upAnime">
         <article>The Quiz Web App is a very simple website application made using React.js ,Javascript ,CSS and Firebase.It is created by me ,
          Vikas a Web Developer and Data Science enthusiast.A final year Btech student currently seeking job roles in tech industry.
          I excelled in various tech stacks like HTML ,CSS,JavaScript, Node.js, mongoDB,React.js,Express js,FireBase.
          I can execute Full Stack Web Development which include front-end as well as backend .I also have knowledge about Machine Learning and
          Data Science ,DSA,C/C++,Python and a lot more </article>
        </div>
        <footer className='footer'>
        <div className="footerContent">Made By Vikas</div>
        <div className="footerContent">
            <ul className="contactCol">
              <li className="contact"><a href="https://github.com/vikasrajput47" target="_blank" rel='noreferrer' ><img src={git} alt="" /></a></li>
              <li className="contact"><a href="https://www.linkedin.com/in/vikas-rajpoot-0908991b7/" target="_blank"  rel='noreferrer'><img src={In} alt="" /></a></li>
              <li className="contact"><a href="https://www.codechef.com/users/vikasrajpoot47" target="_blank"  rel='noreferrer'><img src={codechef} alt="" /></a></li>
              <li className="contact"><a href="https://auth.geeksforgeeks.org/user/vikasrajpoot479" target="_blank" rel='noreferrer'><img src={gfg} alt="" /></a></li>
              <li className="contact"><a href="https://www.hackerrank.com/vikasrajpoot479?hr_r=1" target="_blank" rel='noreferrer'><img src={hr} alt="" /></a></li>
            </ul>
        </div>
      </footer>
      </div>
    </div>
  )
}
export default About