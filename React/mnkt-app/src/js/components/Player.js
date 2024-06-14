import React, { useState, useRef, useEffect } from "react";
import "../../css/player.css";

const videos = [
  "video1.mp4",
  "video2.mp4",
  "video3.mp4",
  "video4.mp4",
  "video5.mp4",
  "video6.mp4",
];

const NavigationButton = ({ className, onClick }) => {
  return (
    <button className={`nav-button ${className}`} onClick={onClick} style={{}}>
      {className === "right" ? ">" : "<"}
    </button>
  );
};

const Player = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight } = containerRef.current;
      const newIndex = Math.round(scrollTop / clientHeight);
      setCurrentIndex(newIndex);
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    const child = container.children[index];
    container.scrollTo({
      top: child.offsetTop,
      behavior: "smooth",
    });
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < videos.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  return (
    <div id="player" className="player">
      <div className="player-controller">
        <NavigationButton className="left" onClick={handlePrevClick} />
        <NavigationButton className="right" onClick={handleNextClick} />
      </div>
      <div className="reels-container" ref={containerRef}>
        {videos.map((video, index) => (
          <div className="reels-inner-container" key={index}>
            <video
              className="reels-video"
              src={`../videos/${video}`}
              autoPlay
              muted
              loop
            ></video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Player;
