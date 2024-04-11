import './Landing.css';
import AnimatedBackground from '../components/AnimatedBackground/AnimatedBackground';
import Typewriter from '../components/Typewriter/Typewriter';
//import { Typewriter, AnimatedBackground } from '../components/index';

// let msgArray = [
//   " ",
//   "Creative",
//   "Versatile",
//   "a Front-end developer",
//   "Back-end developer",
//   "Full stack developer",
//   "Or!",
//   '"a coder"',
//   " ",
// ];

function Landing() {
  return (
    <AnimatedBackground>
      <div className="landing-type">
        <div>I Am</div>
        <Typewriter />
      </div>
    </AnimatedBackground>
  );
}

export default Landing;
