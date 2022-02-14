import React from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function MovieDetails({ movies }) {
  const { id } = useParams();
  console.log(id, movies);
  const history = useHistory();

  const movienew = movies[id];
  return (
    <div>
      <iframe
        width="80%"
        height="650"
        src={movienew.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movienew.name}</h2>

          <p className="movie-rating">⭐{movienew.rating}</p>
        </div>
        <p className="movie-summary">{movienew.description}</p>

        <Button
          variant="outlined"
          onClick={() => history.goBack()}
          startIcon={<ArrowBackIosIcon />}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
