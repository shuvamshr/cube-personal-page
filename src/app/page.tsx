"use client";

import { useState, useEffect } from "react";
import Cube from "./components/Cube";
import Navigation from "./components/Navigation";
import Link from "next/link";

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
      <div className="absolute h-screen w-full z-30 md:block hidden">
        <Navigation />
      </div>
      <div
        className="absolute h-screen w-full md:flex justify-center items-center z-20  hidden"
        style={{ perspective: "1200px" }}
      >
        <Cube cursorX={mousePosition.x} cursorY={mousePosition.y} />
      </div>
      <div className="absolute h-screen w-full z-10 bg-[#F4F9FC] border-[16px] border-white">
        <div className="flex flex-col md:hidden p-8">
          <h2 className="font-display font-semibold text-2xl text-[#0f1b61] mt-8">
            Hi! Cube is currently super unresponsive on smaller devices, or if
            you decided to zoom in infinitely.
            <br />
            <br /> Check out this demo video to get an idea or the GitHub repo
            <span className="text-[#73BBC5]">.</span>
          </h2>

          <Link
            href="https://www.linkedin.com/posts/shuvamshr_as-i-continue-to-deepen-my-expertise-in-frontend-activity-7148152866463973376-bk_W?utm_source=share&utm_medium=member_desktop"
            className="bg-[#0f1b61] p-4 font-semibold font-display text-white w-fit mt-8 hover:tracking-widest transition-all ease-out"
          >
            Check out Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
