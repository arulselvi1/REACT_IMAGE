import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

export function Counter() {
  const [like, setLike] = useState(0);
  const [unlike, setunLike] = useState(0);
  useEffect(() => {
    console.log("Like is updated", like);
  }, [like]);
  const incrementLike = () => setLike(like + 1);
  const incrementDislike = () => setunLike(unlike + 1);
  return (
    <div>
      <br></br>
      <IconButton
        class="btn btn1 btn-outline-success"
        onClick={incrementLike}
        aria-label="like button"
        color="primary"
      >
        <Badge badgeContent={like} color="success">
          👍
        </Badge>
      </IconButton>
      <IconButton
        class="btn btn-outline-error"
        onClick={incrementDislike}
        aria-label="dislike button"
        color="error"
      >
        <Badge badgeContent={unlike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}
