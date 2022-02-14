import React from "react";
import { Movie } from "./Movie";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export function MovieList({ movies, setMovies }) {
  const history = useHistory();
  return (
    <div class="row">
      {movies.map((nm, index) => (
        <Movie
          key={index}
          name={nm.name}
          profile={nm.profile}
          rating={nm.rating}
          description={nm.description}
          deletebutton={
            <IconButton
              style={{ marginLeft: "auto" }}
              onClick={() => {
                console.log(index);
                const copyMovieList = [...movies];
                copyMovieList.splice(index, 1);
                setMovies(copyMovieList);
              }}
              aria-label="delete"
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          }
          editbutton={
            <IconButton
              onClick={() => history.push(`/movies/edit/${index}`)}
              aria-label="edit"
              color="secondary"
            >
              <EditIcon />
            </IconButton>
          }
          id={index}
        />
      ))}
    </div>
  );
}
