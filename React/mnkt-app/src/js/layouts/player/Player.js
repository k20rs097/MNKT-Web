// Player.js
import React, { useState, useRef, useEffect } from "react";
import YouTube from "react-youtube";
import PlayerController from "./PlayerController";

const videos = [
  "Ljlml922GM8",
  "LslF_9XTFVs",
  "9dasPfkrryk",
  "uvOcxOPPPDI",
  "eQ3hMV-FHjk",
];

const length = videos.length - 1;

const Player = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const playerRefs = useRef([]);

  useEffect(() => {
    const initialRef = playerRefs.current[0];
    console.log(initialRef)
    return () => {};
  }, []);

  useEffect(() => {
    console.log("currentIndex changed");
    // Stop all players
    playerRefs.current.forEach((player) => {
      if (player && typeof player.stopVideo === "function") {
        player.stopVideo();
      }
    });

    // Play the current player
    const currentRef = playerRefs.current[currentIndex];
    if (currentRef && typeof currentRef.playVideo === "function") {
      currentRef.playVideo();
      console.log(`play, ${currentIndex}`);
    }
  }, [currentIndex]);

  const opts = {
    width: "350",
    height: "650",
    playerVars: {
      autoplay: 0,
      controls: 0,
      fs: 0,
      loop: 1,
      modestbranding: 1,
      mute: 0,
    }, 
  };

  const onReady = (event, index) => {
    playerRefs.current[index] = event.target;
  };

  return (
    <section className="player-wrapper">
      <div id="player" className="player">
        <div className="reels-container" ref={containerRef}>
          {videos.map((video, index) => (
            <div id={index} className="reels-inner-container" key={index}>
              <YouTube
                videoId={video}
                opts={opts}
                onReady={(event) => onReady(event, index)}
              />
            </div>
          ))}
        </div>
        <PlayerController 
          length={length}
          containerRef={containerRef}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <div>
          Current Index: {currentIndex}
        </div>
      </div>
    </section>
  );
};

export default Player;
