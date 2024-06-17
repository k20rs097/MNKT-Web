import React, { useState, useRef, useEffect } from "react";
import YouTube from "react-youtube";
import "../../css/player.css";

const videos = [
  "IidrVaZ2z_w",
  "V1QkHvWhz3M",
  "1eJdy57lFPU",
  "8BrJHja_PNw",
  "UHOcyALfCAA",
];

const NavigationButton = ({ className, onClick, currentIndex }) => {
  // const displayStyle = isEdge(className, currentIndex) ? "none" : "block";
  // const isDisabled = (className === "above" && currentIndex === 0) ||
  // (className === "below" && currentIndex === videos.length - 1);
  return (
    <button
      className={`navigation-button ${className}`}
      onClick={onClick}
    >
      {className === "above" ? "⬆︎" : "⬇︎"}
    </button>
  );
};

const Player = () => {
  const opts = {
    width: '450',
    height: '800',
    playerVars: {   
      autoplay: 0,
      controls: 0,
      fs: 0,
      loop: 1,
      modestbranding: 1,
      mute: 0,
    }, 
  };
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
    console.log("handlePrevClicked");
  };

  const handleNextClick = () => {
    if (currentIndex < videos.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
    console.log("handleNextClicked");
  };

  return (
    <div id="player" className="player">
      <div className="reels-container" ref={containerRef}>
        {videos.map((video, index) => (
          <div className="reels-inner-container" key={index}>
            <YouTube
              videoId={video}
              opts={opts}
            />
          </div>
        ))}
      </div>
      <div className="player-controller">
        <div className="navigation-buttons">
          <NavigationButton
            className="above"
            onClick={handlePrevClick}
            // currentIndex={currentIndex}
          />
          <NavigationButton
            className="below"
            onClick={handleNextClick}
            // currentIndex={currentIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
