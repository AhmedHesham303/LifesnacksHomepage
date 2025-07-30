import React, { useEffect, useRef } from "react";

function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const endTime = 7;

    const handleEndTime = (e) => {
      if (e.target.currentTime >= endTime) {
        e.target.currentTime = 0;
        e.target.play(); // continue playing from the beginning
      }
    };

    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.addEventListener("timeupdate", handleEndTime);
    }

    return () => {
      if (videoEl) {
        videoEl.removeEventListener("timeupdate", handleEndTime);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src="/assets/Hero.mp4"
      type="video/mp4"
      className="z-10 w-full h-[calc(100vh-4.5rem)] object-cover"
      autoPlay
      muted
      playsInline
    />
  );
}

export default Hero;
