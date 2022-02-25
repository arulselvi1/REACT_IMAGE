import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom";
import * as React from "react";
import { API } from "./global";
import { useFormik } from "formik";
import { movieValidationSchema } from "./AddMovieFunc";

export function EditMovies({ moviesList, setMoviesList }) {
  const { id } = useParams();
  // const movie = movies[id];
  // console.log(movie);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(`${API}/movies/${id}`, {
      method: "GET",
    }) //promise
      .then((data) => data.json()) //Response Object
      .then((mvs) => setMovie(mvs))
      .catch((err) => console.log(err));
  }, []);
  console.log(movie);
  return <div>{movie ? <Save movie={movie} /> : <h2>Loading</h2>}</div>;
  // setMovies([...movies, newMovie]);
  // history.push("/movies/edit");
}

function Save({ movie }) {
  // const [movieName, setMovieName] = useState(movie.name);
  // const [moviePoster, setMoviePoster] = useState(movie.profile);
  // const [movieRating, setMovieRating] = useState(movie.rating);
  // const [movieDes, setMovieDes] = useState(movie.description);
  // const [movieTrailer, setMovieTrailer] = useState(movie.trailer);
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      name: movie.name,
      poster: movie.poster,
      rating: movie.rating,
      description: movie.description,
      trailer: movie.trailer,
    },
    validationSchema: movieValidationSchema,
    onSubmit: (editedMovie) => {
      // console.log("onSubmit", values);
      editMovie(editedMovie);
    },
  });

  const editMovie = (editedMovie) => {
    console.log("onSubmit", editedMovie);

    // const editMovie = () => {
    //   const editedMovie = {
    //     name: movieName,
    //     profile: moviePoster,
    //     rating: movieRating,
    //     description: movieDes,
    //     trailer: movieTrailer,
    //   };

    fetch(`${API}/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(editedMovie),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => history.push("/movies"));
  };

  console.log(movie);
  return (
    <div class="content">
      <p class="lead1"> Edit Movie Details</p>

      <form className="movie_form" onSubmit={formik.handleSubmit}>
        <TextField
          onChange={formik.handleChange}
          id="poster"
          name="poster"
          value={formik.values.poster}
          onBlur={formik.handleBlur}
          label="Movie Poster URL"
          variant="outlined"
          error={formik.touched.poster && formik.errors.poster}
          helperText={
            formik.touched.poster && formik.errors.poster
              ? formik.errors.poster
              : ""
          }
        />
        <TextField
          onChange={formik.handleChange}
          id="name"
          name="name"
          value={formik.values.name}
          onBlur={formik.handleBlur}
          label="Movie Name"
          variant="outlined"
          error={formik.touched.name && formik.errors.name}
          helperText={
            formik.touched.name && formik.errors.name ? formik.errors.name : ""
          }
        />
        <TextField
          type="number"
          onChange={formik.handleChange}
          id="rating"
          name="rating"
          value={formik.values.rating}
          onBlur={formik.handleBlur}
          label="Movie Rating"
          variant="outlined"
          error={formik.touched.rating && formik.errors.rating}
          helperText={
            formik.touched.rating && formik.errors.rating
              ? formik.errors.rating
              : ""
          }
        />
        <TextField
          onChange={formik.handleChange}
          id="description"
          name="description"
          value={formik.values.description}
          onBlur={formik.handleBlur}
          label="Movie Description"
          variant="outlined"
          error={formik.touched.description && formik.errors.description}
          helperText={
            formik.touched.description && formik.errors.description
              ? formik.errors.description
              : ""
          }
        />
        <TextField
          onChange={formik.handleChange}
          id="trailer"
          name="trailer"
          value={formik.values.trailer}
          onBlur={formik.handleBlur}
          label="Movie Trailer URL"
          variant="outlined"
          error={formik.touched.trailer && formik.errors.trailer}
          helperText={
            formik.touched.trailer && formik.errors.trailer
              ? formik.errors.trailer
              : ""
          }
        />
        <Button type="submit" variant="contained" color="success">
          Save
        </Button>
      </form>
    </div>
  );
}
