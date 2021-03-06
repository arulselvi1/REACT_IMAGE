import React, { useState } from "react";

export function AddColor() {
  const [color, setColor] = useState("orange");
  const styles = {
    background: color,
  };

  const [colorList, setColorList] = useState([
    "red",
    "teal",
    "yellow",
    "purple",
  ]);
  //todo - Capture typing event
  return (
    <div>
      <input
        value={color}
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        placeholder="Enter a color"
      ></input>
      {/*copy color list and add new color */}
      <button onClick={() => setColorList([...colorList, color])}>
        Add Color
      </button>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
export function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "25px",
    width: "200px",
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}
