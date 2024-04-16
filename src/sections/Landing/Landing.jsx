import './Landing.css';
import AnimatedBackground from '../components/AnimatedBackground/AnimatedBackground';
import Typewriter from '../components/Typewriter/Typewriter';
//import { Typewriter, AnimatedBackground } from '../components/index';

let msgArray = [
  " ",
  "Creative",
  "Versatile",
  "Curious",
  // "Passionate",
  "Always Learning & Growing",
  "a Full Stack Developer",
  " ",
];

function Landing() {
  return (
    <AnimatedBackground>
      <div className="landing-type">
        <div>I Am</div>
        <Typewriter data={msgArray} />
      </div>
    </AnimatedBackground>
  );
}

export default Landing;
