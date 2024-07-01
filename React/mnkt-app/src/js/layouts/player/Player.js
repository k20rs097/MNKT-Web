import React, { useRef } from "react";
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
  const containerRef = useRef(null);
  // const [playerSize, setPlayerSize] = useState({ width: 0, height: 0});

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

  return (
    <section className="player-wrapper">
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
        <PlayerController 
          length={length}
          containerRef={containerRef}
        />
      </div>
    </section>
  );
};

export default Player;
