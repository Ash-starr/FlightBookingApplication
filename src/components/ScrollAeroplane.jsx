import { useState, useEffect } from "react";

import aeroplane1 from "../assets/Aeroplane-1.png";

export default function ScrollEffect() {
  const [scale, setScale] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const screenHeight = window.innerHeight;

    const newScale = Math.min(Math.max(scrollPosition / screenHeight, 0), 1);
    setScale(newScale);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateWidth = () => {
    const baseWidth = window.innerWidth < 768 ? 50 : 40;
    const maxWidth = window.innerWidth < 768 ? 70 : 80;
    return baseWidth + scale * (maxWidth - baseWidth);
  };

  const dynamicWidth = calculateWidth();

  return (
    <div className="relative w-full h-[100vh] md:h-[60vh] lg:h-[80vh] bg-white">
      <img
        src={aeroplane1}
        alt="Airplane"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out"
        style={{
          width: `${
            window.innerWidth < 768 ? dynamicWidth + 20 : dynamicWidth
          }vw`,
          height: "auto",
        }}
      />
    </div>
  );
}
