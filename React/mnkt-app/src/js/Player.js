import '../css/player.css';

const Player = () => {
    const videos = ["video1", "video2", "video3", "video4", "video5", "video6"]
    const videoElements = [];

    videos.forEach((video, index) => {
        videoElements.push(
            <div className='reel' key={index}>
                <video src={`/videos/${video}.mp4`} autoPlay muted></video>
            </div>
        );
    });

    return (
        <div id="player" style={{display: 'flex', justifyContent: 'center'}}>
            <div className="reels-container">
                {videoElements}
            </div>
        </div>
    );
}

export default Player;