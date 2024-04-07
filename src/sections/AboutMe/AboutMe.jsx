import './AboutMe.css';

let imgUrl = 'https://picsum.photos/800'

function AboutMe() {
  return (
    <div id="about" className="aboutme-container">
          <img src={imgUrl} alt="About Me" />
          <div>
              <h1>About Me</h1>
              <p>
                I am a versatile and productive Full Stack Developer with over 7 years of
                experience and over 5 years of specialized education. Currently I create
                and design user-friendly interfaces as well as maintain web applications
                for a wide range of business platforms. I possess excellent organizational and
                team communication skills, and I am dedicated to both continuous learning as well
                as the ongoing improvement of my craft.
              </p>
          </div>
    </div>
  )
}

export default AboutMe
