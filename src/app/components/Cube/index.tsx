import React from "react";
import Face from "../Face";

interface CubeProps {
  cursorX: number;
  cursorY: number;
}

export default function Cube({ cursorX, cursorY }: CubeProps) {
  const cubeDirection = {
    front: "translateZ(225px)",
    back: "rotateY(180deg) translateZ(225px)",
    left: "rotateY(-90deg) translateZ(225px)",
    right: "rotateY(90deg) translateZ(225px)",
    top: "rotateX(90deg) translateZ(225px)",
    bottom: "rotateX(-90deg) translateZ(225px)",
  };

  const cubeStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    transition: "transform 0.5s ease-out",
    transform: `rotateX(${cursorY}deg) rotateY(${cursorX}deg) rotateZ(0deg)`,
  };

  const cubeContainerStyle: React.CSSProperties = {
    width: "450px",
    height: "450px",
    transformStyle: "preserve-3d",
  };

  return (
    <div style={cubeContainerStyle}>
      <div style={cubeStyle}>
        <Face key={"front"} transform={cubeDirection.front} image="front.jpg" />
        <Face key={"back"} transform={cubeDirection.back} image="none" />
        <Face key={"left"} transform={cubeDirection.left} image="left.jpg" />
        <Face key={"right"} transform={cubeDirection.right} image="right.jpg" />
        <Face key={"top"} transform={cubeDirection.top} image="top.jpg" />
        <Face
          key={"bottom"}
          transform={cubeDirection.bottom}
          image="bottom.jpg"
        />
      </div>
    </div>
  );
}
