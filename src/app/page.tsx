"use client";

import { useState, useEffect } from "react";
import Cube from "./components/Cube";
import Navigation from "./components/Navigation";

export default function Home() {
  const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    });

    useEffect(() => {
      const updateMousePosition = (ev: any) => {
        const rect = document.body.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        let relativeX = Math.round(((ev.clientX - centerX) / rect.width) * 220);
        let relativeY = -Math.round(
          ((ev.clientY - centerY) / rect.height) * 220
        );

        relativeY = Math.max(relativeY, -20);

        setMousePosition({ x: relativeX, y: relativeY });
      };

      window.addEventListener("mousemove", updateMousePosition);

      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }, []);

    return mousePosition;
  };

  const mousePosition = useMousePosition();

  return (
    <div className="h-screen w-full">
      <div className="absolute h-screen w-full z-30">
        <Navigation />
      </div>
      <div
        className="absolute h-screen w-full flex justify-center items-center z-20 "
        style={{ perspective: "1200px" }}
      >
        <Cube cursorX={mousePosition.x} cursorY={mousePosition.y} />
      </div>
    </div>
  );
}
