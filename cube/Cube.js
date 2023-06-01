/**
 * this react component is an adaptation of the Rotating Cube tutorial
 * of David DeSandro (https://3dtransforms.desandro.com/cube)
 * codepen: https://codepen.io/desandro/pen/KRWjzm
 */

import "./CubeStyles.css";
import React, { useState } from "react";
import Button from "../button/Button";

const Cube = (props) => {
  const [faceToShow, setFaceToShow] = useState("top")

  const getStyle = (face) => {
    const defaultBackground = {
      front: "hsla(0, 100%, 50%, 0.7)",
      right: "hsla(60, 100%, 50%, 0.7)",
      back: "hsla(120, 100%, 50%, 0.7)",
      left: "hsla(180, 100%, 50%, 0.7)",
      top: "hsla(240, 100%, 50%, 0.7)",
      bottom: "hsla(300, 100%, 50%, 0.7)",
    };
    if (props.customBackground) {
      return props.customBackground[face];
    } else {
      return defaultBackground[face];
    }
  };

  const getFaces = () => {
    return {
      front: "Front",
      right: "Right",
      back: "Back",
      left: "Left",
      top: "Top",
      bottom: "Bottom",
    };
  };

  const turnCube = () => {
    const sides = Object.keys(getFaces());
    const random = Math.floor(Math.random() * sides.length);
    setFaceToShow(sides[random])
    props.fetchSite();
  };

  const allFacesObject = props.faces ? props.faces : getFaces();

  return (
    <div>
      <Button text={"Turn"} fn={turnCube} />
      <div className="scene">
        <div className={`cube show-${faceToShow}`}>
          {Object.keys(allFacesObject).map((face)=>{
            return(
              <div
                key={face}
                className={`cube__face cube__face--${face}`}
                style={{ background: getStyle(`${face}`) }}
              >
                <a href={props.siteUrl}>
                  {faceToShow === face ? props.siteTitle : '?'}
                </a>
            </div>                
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Cube;
