import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function AddMovieFunc({ movies, setMovies }) {
  const [movieName, setMovieName] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieDes, setMovieDes] = useState("");
  const [movieTrailer, setMovieTrailer] = useState("");
  const history = useHistory();

  const addMovie = () => {
    const newMovie = {
      name: movieName,
      profile: moviePoster,
      rating: movieRating,
      description: movieDes,
      trailer: movieTrailer,
    };

    setMovies([...movies, newMovie]);
    history.push("/movies");
  };
  return (
    <div class="content">
      <p class="lead1"> Add movies by giving below details</p>

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
        <TextField
          onChange={(event) => setMovieTrailer(event.target.value)}
          label="Movie Trailer URL"
          variant="outlined"
        />
        <Button onClick={addMovie} variant="contained">
          Add Movie
        </Button>
      </div>
    </div>
  );
}
