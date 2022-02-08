import React, { useState } from "react";
import Button from "@mui/material/Button";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

export function Tictactoe() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const { width, height } = useWindowSize();
  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
        console.log("Winner", board[a]);
        return board[a];
      }
      //return null;
    }
  };

  const winner = decideWinner(board);
  const [isXTurn, setIsXTurn] = useState(true);
  const handelClick = (index) => {
    console.log(index);
    const boardCopy = [...board];
    if (!winner && !board[index]) {
      boardCopy[index] = isXTurn ? "X" : "O";
      setIsXTurn(!isXTurn);
      setBoard(boardCopy);
    }
  };

  const reset = () => {
    setBoard([null, null, null, null, null, null, null, null, null]);
    setIsXTurn(true);
  };

  return (
    <>
      {winner ? <Confetti width={width} height={height} /> : ""}
      <h2 className={"game-name"}>Tic - Tac - Toe</h2>
      <div className={"board"}>
        {board.map((value, index) => (
          <GameBox
            value={value}
            key={index}
            onPlayerClick={() => handelClick(index)}
          />
        ))}
      </div>
      <div className={"game-message"}>
        <Button variant="contained" color="secondary" onClick={reset}>
          Restart the game
        </Button>

        <p>{winner ? "The Winner is: " + winner : ""}</p>
        <p>{!winner ? `The Player ${isXTurn ? "X" : "O"} has to play` : ""}</p>
      </div>
    </>
  );
}
export const GameBox = ({ value, onPlayerClick }) => {
  const styles = {};
  if (!!value) {
    // not undefined
    styles.color = value === "X" ? "green" : "red";
  }
  return (
    <div className="game-box" onClick={onPlayerClick} style={styles}>
      {value}
    </div>
  );
};
