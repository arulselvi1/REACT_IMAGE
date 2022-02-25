import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";

// Validation - on Add movie - Task 15mins
// name - required
// poster - min 4, required
// rating - 0 - 10, required
// summary - min 20 chars, required
// trailer -min 4, required

export const movieValidationSchema = yup.object({
  name: yup.string().required("Fill the name blank"),
  poster: yup
    .string()
    .required("Fill the movie poster url")
    .min(4, "Need a longer Poster"),
  rating: yup
    .number()
    .required("Fill the movie rating between 0-10")
    .min(0)
    .max(10),
  description: yup.string().required("Fill the movie description").min(20),
  trailer: yup.string().required("Fill the movie trailer link").min(4),
});
export function AddMovieFunc() {
  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      rating: "",
      description: "",
      trailer: "",
    },
    validationSchema: movieValidationSchema,
    onSubmit: (newMovie) => {
      // console.log("onSubmit", values);
      addMovie(newMovie);
    },
  });
  // const [movieName, setMovieName] = useState("");
  // const [moviePoster, setMoviePoster] = useState("");
  // const [movieRating, setMovieRating] = useState("");
  // const [movieDes, setMovieDes] = useState("");
  // const [movieTrailer, setMovieTrailer] = useState("");
  const history = useHistory();

  const addMovie = (newMovie) => {
    console.log("onSubmit", newMovie);
    // const newMovie = {
    //   name: movieName,
    //   profile: moviePoster,
    //   rating: movieRating,
    //   description: movieDes,
    //   trailer: movieTrailer,
    // };

    fetch(`${API}/movies/`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/movies"));

    // setMovieList([...movieList, newMovie]);
  };

  //setMovies([...movies, newMovie]);

  return (
    <div class="content">
      <p class="lead1"> Add movies by giving below details</p>

      <form className="movie_form" onSubmit={formik.handleSubmit}>
        {/* <input
        value={formik.values.email}
        id="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="email"
        placeholder="email"
      />  */}
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
        {/* {formik.touched.name && formik.errors.name ? formik.errors.name : ""} */}
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
        {/* {formik.touched.rating && formik.errors.rating
          ? formik.errors.rating
          : ""} */}
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
        {/* {formik.touched.description && formik.errors.description
          ? formik.errors.description
          : ""} */}
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
        {/* {formik.touched.trailer && formik.errors.trailer
          ? formik.errors.trailer
          : ""} */}
        <Button type="submit" variant="contained">
          Add Movie
        </Button>
      </form>
    </div>
  );
}
