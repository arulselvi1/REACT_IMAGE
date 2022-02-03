import "./App.css";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Movie } from "./Movie";
export default function App() {
  const user = [
    {
      profile:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      name: "Ratatouille",
      rating: "9.3",
      description:
        "Ratatouille is a 2007 American computer-animated comedy film produced by Pixar Animation Studios and released by Walt Disney Pictures. The eighth film produced by Pixar, it was written and directed by Brad Bird, who took over from Jan Pinkava in 2005, and produced by Brad Lewis, from an original idea from Bird, Pinkava and Jim Capobianco. The title refers to the French dish ratatouille, which is served at the end of the film, and also references the species of the main character, a rat. ",
    },
    {
      profile:
        "https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg?region=0%2C0%2C540%2C810",
      name: "Frozen",
      rating: "8",
      description:
        "Frozen is a 2013 American computer-animated musical fantasy film produced by Walt Disney Animation Studios and released by Walt Disney Pictures.The 53rd Disney animated feature film, it is inspired by Hans Christian Andersen's fairy tale of The Snow Queen. The film depicts a princess who sets off on a journey alongside an iceman, his reindeer, and a snowman to find her estranged sister, whose icy powers have inadvertently trapped their kingdom in eternal winter.",
    },
    {
      profile:
        "https://2.bp.blogspot.com/-CGIKiw6Sbng/VpL1pY1tdQI/AAAAAAAAOcc/2W4IAxQ6MBI/s1600/finding%2Bnemo%2Bposter.jpg",
      name: "Finding Nemo",
      rating: "9.2",
      description:
        "Finding Nemo is a 2003 American computer-animated adventure film produced by Pixar Animation Studios and released by Walt Disney Pictures. It tells the story of an overprotective clownfish named Marlin who, along with a regal blue tang named Dory, searches for his missing son Nemo. Along the way, Marlin learns to take risks and comes to terms with Nemo taking care of himself.",
    },
    {
      profile:
        "https://static1.moviewebimages.com/wordpress/wp-content/uploads/movie/LoafGCYY52KVosa261df2t9KTFVCuF.jpg",
      name: "Despicable Me",
      rating: "9.0",
      description:
        "A man who delights in all things wicked, supervillain Gru (Steve Carell) hatches a plan to steal the moon. Surrounded by an army of little yellow minions and his impenetrable arsenal of weapons and war machines, Gru makes ready to vanquish all who stand in his way. But nothing in his calculations and groundwork has prepared him for his greatest challenge: three adorable orphan girls (Miranda Cosgrove, Dana Gaier, Elsie Fisher) who want to make him their dad.",
    },
    {
      profile: "https://m.media-amazon.com/images/I/51xlf28jbiL.jpg",
      name: "kung fu panda",
      rating: "9.0",
      description:
        "Kung Fu Panda is an American media franchise by DreamWorks Animation, consisting of three films: Kung Fu Panda (2008), Kung Fu Panda 2 (2011), and Kung Fu Panda 3 (2016). Po, a clumsy panda, is a kung fu fanatic who lives in the Valley of Peace and works in his goose father Mr. Ping's noodle shop, unable to realize his dream of learning the art of kung fu. One day, a kung fu tournament is held for the elderly spiritual leader of the valley, Grand Master Oogway, to determine the identity of the Dragon Warrior, the one kung fu master capable of understanding the secret of the Dragon Scroll",
    },
  ];
  const [movies, setMovies] = useState(user);

  const [movieName, setMovieName] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieDes, setMovieDes] = useState("");

  const addMovie = () => {
    const newMovie = {
      name: movieName,
      profile: moviePoster,
      rating: movieRating,
      description: movieDes,
    };

    setMovies([...movies, newMovie]);
  };
  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand text-center">Top 5 Animation Movies</span>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="Text"
            placeholder="Search"
            aria-label="Search"
          />
          <Button class="btn btn-outline-info" variant="contained">
            Search
          </Button>
        </form>
      </nav>

      <div class="row">
        {movies.map((nm, index) => (
          <Movie
            key={index}
            name={nm.name}
            profile={nm.profile}
            rating={nm.rating}
            description={nm.description}
          />
        ))}
      </div>
      <hr></hr>

      <div class="content">
        <p class="lead1"> Add movies by giving below details</p>
      </div>

      <div className="movie_form">
        <TextField
          onChange={(event) => setMoviePoster(event.target.value)}
          label="Movie Poster URL"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setMovieName(event.target.value)}
          label="Movie Name"
          variant="outlined"
        />
        <TextField
          type="number"
          onChange={(event) => setMovieRating(event.target.value)}
          label="Movie Rating"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setMovieDes(event.target.value)}
          label="Movie Description"
          variant="outlined"
        />

        <Button onClick={addMovie} variant="contained">
          Add Movie
        </Button>
      </div>
    </div>
  );
}
