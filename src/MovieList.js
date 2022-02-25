import React, { useEffect, useState } from "react";
import { Movie } from "./Movie";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { API } from "./global";

// const API = "https://my-json-server.typicode.com/arulselvi1/APIREAD";

export function MovieList() {
  const [moviesList, setMoviesList] = useState([]);
  const history = useHistory();
  const getMovies = () => {
    fetch(`${API}/movies`, {
      method: "GET",
    }) // promise
      .then((data) => data.json()) // Response object
      .then((mvs) => setMoviesList(mvs));
  };
  useEffect(() => getMovies(), []);

  const deleteMovie = (id) => {
    fetch(`${API}/movies/${id}`, {
      method: "DELETE",
    }).then(() => getMovies());
  };

  return (
    <div class="row">
      {moviesList.map((nm, index) => (
        <Movie
          key={index}
          name={nm.name}
          poster={nm.poster}
          rating={nm.rating}
          description={nm.description}
          deletebutton={
            <IconButton
              style={{ marginLeft: "auto" }}
              onClick={() => deleteMovie(nm.id)}
              aria-label="delete"
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          }
          editbutton={
            <IconButton
              onClick={() => history.push(`/movies/edit/${nm.id}`)}
              aria-label="edit"
              color="secondary"
            >
              <EditIcon />
            </IconButton>
          }
          id={nm.id}
        />
      ))}
    </div>
  );
}
