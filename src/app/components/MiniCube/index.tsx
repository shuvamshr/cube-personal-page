import React, { useState, useEffect } from "react";
import Face from "../Face";

export default function MiniCube() {
  const cubeDirection = {
    front: "translateZ(100px)",
    back: "rotateY(180deg) translateZ(100px)",
    left: "rotateY(-90deg) translateZ(100px)",
    right: "rotateY(90deg) translateZ(100px)",
    top: "rotateX(90deg) translateZ(100px)",
    bottom: "rotateX(-90deg) translateZ(100px)",
  };

  const getRandomRotation = () => {
    const randomX = Math.floor(Math.random() * 360);
    const randomY = Math.floor(Math.random() * 360);
    const randomZ = Math.floor(Math.random() * 360);

    return `rotateX(${randomX}deg) rotateY(${randomY}deg) rotateZ(${randomZ}deg)`;
  };

  const [rotation, setRotation] = useState(getRandomRotation);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(getRandomRotation);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const cubeStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    transition: "transform 6s ease-out",
    transform: rotation,
  };

  const cubeContainerStyle: React.CSSProperties = {
    width: "200px",
    height: "200px",
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
