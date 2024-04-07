import './Landing.css';
import AnimatedBackground from '../components/AnimatedBg/AnimatedBackground';
// import { Typewritter } from '../components/Typewritter/Typewritter';


let msgArray = [
  " ",
  "Creative",
  "Versatile",
  "a Front-end developer",
  "Back-end developer",
  "Full stack developer",
  "Or!",
  '"a coder"',
  " ",
];

function Landing() {
  return (  
    <AnimatedBackground>
      <div className="landing-type">
        <div>I Am</div>
        {/* <Typewritter data={msgArray} /> */}
      </div>
    </AnimatedBackground>
  )
}

export default Landing
