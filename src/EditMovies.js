import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom";
import * as React from "react";

export function EditMovies({ movies, setMovies }) {
  const { id } = useParams();
  const movie = movies[id];
  console.log(movie);
  const [movieName, setMovieName] = useState(movie.name);
  const [moviePoster, setMoviePoster] = useState(movie.profile);
  const [movieRating, setMovieRating] = useState(movie.rating);
  const [movieDes, setMovieDes] = useState(movie.description);
  const [movieTrailer, setMovieTrailer] = useState(movie.trailer);
  const history = useHistory();

  const editMovie = () => {
    const updatedMovie = {
      name: movieName,
      profile: moviePoster,
      rating: movieRating,
      description: movieDes,
      trailer: movieTrailer,
    };
    const copyMovieList = [...movies];
    copyMovieList[id] = updatedMovie;
    setMovies(copyMovieList);
    history.push("/movies");

    // setMovies([...movies, newMovie]);
    // history.push("/movies/edit");
  };
  return (
    <div class="content">
      <p class="lead1"> Edit Movie Details</p>

      <div className="movie_form">
        <TextField
          onChange={(event) => setMoviePoster(event.target.value)}
          label="Movie Poster URL"
          variant="outlined"
          value={moviePoster}
        />
        <TextField
          onChange={(event) => setMovieName(event.target.value)}
          label="Movie Name"
          variant="outlined"
          value={movieName}
        />
        <TextField
          type="number"
          onChange={(event) => setMovieRating(event.target.value)}
          label="Movie Rating"
          variant="outlined"
          value={movieRating}
        />
        <TextField
          onChange={(event) => setMovieDes(event.target.value)}
          label="Movie Description"
          variant="outlined"
          value={movieDes}
        />
        <TextField
          onChange={(event) => setMovieTrailer(event.target.value)}
          label="Movie Trailer URL"
          variant="outlined"
          value={movieTrailer}
        />
        <Button onClick={editMovie} variant="contained" color="success">
          Save
        </Button>
      </div>
    </div>
  );
}
