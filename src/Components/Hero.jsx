import React, { useEffect, useRef } from "react";

function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const endTime = 7;

    const handleEndTime = (e) => {
      if (e.target.currentTime >= endTime) {
        e.target.currentTime = 0;
        e.target.play();
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
    <div className="relative z-10 flex h-[calc(100vh-4.5rem)]  items-center">
      <div className=" container mx-auto">
        <p className="text-5xl max-w-[35rem] font-medium  text-white">
          At Our Core, We Are a Team Of Passionate Individuals Dedicated To
          Providing Top-Quality Products by Using Superior Ingredients.
        </p>
        <button className="btn green-btn mt-12 border-white">Our Story</button>
      </div>

      <video
        ref={videoRef}
        src="/assets/Hero.mp4"
        type="video/mp4"
        className="z-[-1] w-full inset-0 h-full absolute   object-cover"
        autoPlay
        muted
        playsInline
      />
    </div>
  );
}

export default Hero;
