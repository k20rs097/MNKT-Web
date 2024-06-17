import YouTube from "react-youtube";
import "../../../css/player.css"

const videos = [
    "qRQZAyPF5mM",
    "l8gblNhYBXc",
    "V1QkHvWhz3M",
    "1eJdy57lFPU",
    "8BrJHja_PNw",
    "UHOcyALfCAA",
];

const React_YouTube = () => {
  return (
    <div id="player" className="player">
        <div id="player" className="reels-container">
        {videos.map((video, index) => (
          <div className="reels-inner-container" key={index}>
            <YouTube
              videoId={video}
            />
          </div>
        ))}
        </div>
    </div>
  );
};

export default React_YouTube;
