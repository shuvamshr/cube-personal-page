import React from "react";
import Image from "next/image";

interface FaceProps {
  transform: string;
  image: string;
}

export default function Face({ transform, image }: FaceProps) {
  const baseStyle: React.CSSProperties = {
    position: "absolute",

    boxSizing: "border-box",
    transform: transform,
  };

  return (
    <div
      style={baseStyle}
      className="w-full h-full flex justify-center items-center border-black border-lg border-8"
    >
      {image != "none" ? (
        <Image
          src={"/" + image}
          alt="Face Image"
          fill={true}
          className="bg-black"
        />
      ) : (
        <div className="w-full h-full backdrop-blur-xl bg-white/30"></div>
      )}
    </div>
  );
}
