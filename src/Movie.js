import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Counter } from "./Counter";

export function Movie({ name, profile, rating, description }) {
  // const styles = {
  //   color : rating >8.5 ? "green" : "red",
  // };
  // const [show,setShow] = useState(true);
  // const summaryStyles ={
  //   display: show ? "block" : "none",
  // };
  const [showText, setShowText] = useState(false);
  return (
    <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
      <div class="col mb-4">
        <div class="card">
          <img src={profile} class="card-img-top img-fluid img" alt="IMG" />
          <div class="card-body">
            <h5 class="card-title text-center">{name}</h5>
            <p class="card-text">
              <span class="h5"> Rating : </span>{" "}
              <span class="pfont"> ⭐{rating}</span>{" "}
            </p>
            <IconButton
              color="primary"
              onClick={() => setShowText(!showText)}
              aria-label="Description of movie"
            >
              {showText ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>

            <p class="card-text" id="para">
              <span class="h5"> </span>{" "}
            </p>

            {/* {showText && (
                <span class="pfont"> Description: {description}</span>
              )} */}
            {/* <p style={styles} classname ="description">{summary}</p> */}
            {showText ? (
              <span class="pfont"> Description: {description}</span>
            ) : (
              ""
            )}

            <Counter />
          </div>
        </div>
      </div>
    </div>
  );
}
