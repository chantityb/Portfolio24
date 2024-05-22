import tictac from "./images/tic-tac.png";
import movie from "./images/movie.png"; 
import backroads from "./images/backroads.png"; 
import pushing from "./images/pf.jpg"; 
import dealership from "./images/dealership.png"



export const projects = [
  {
    title: "Tic Tac Toe",
    description: "The project is an alternative version of the tic tac toe game created using React.js. This app also uses CSS grid layout and JS audio functionality.",
    image: tictac,
    url: "https://react-tactoe.netlify.app",
  },
  {
    title: "Tour App",
    description: "This project is a simple landing page for a travel agency using React.js.",
    image: backroads,
    url: "https://react-backroads-tour.netlify.app/",
  },
  {
    title: "Movie App",
    description: "This project is a movie app created using React.js that fetches data from the OMDb API with search functionality",
    image: movie,
    url: "https://rctjs-movie-app.netlify.app",
  },
  {
    title: "Pushing Forward",
    description: "This project was created using WordPress as the CMS and Divi as the theme. The site consists of custom CSS and Vanilla JS throughout",
    image: pushing,
    url: "https://pushingforwardinc-com.stackstaging.com/",
  },
  {
    title: "Car Dealership",
    description: "This project is car dealership that loads cars as well as featured cars dynamically using Vanilla JS",
    image: dealership,
    url: "https://car-dealership-javascript.netlify.app/",
  },
  
]