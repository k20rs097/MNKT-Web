// Player.js
import React, { useState, useRef, useEffect } from 'react';
import '../../css/player.css';

const videos = [
    "video1.mp4",
    "video2.mp4",
    "video3.mp4",
    "video4.mp4",
    "video5.mp4",
    "video6.mp4"
];

const Player = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollLeft, clientWidth, scrollWidth } = containerRef.current;
            const newIndex = Math.round(scrollLeft / clientWidth);
            setCurrentIndex(newIndex);
        };

        const container = containerRef.current;
        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToIndex = (index) => {
        const container = containerRef.current;
        const child = container.children[index];
        container.scrollTo({
            left: child.offsetLeft,
            behavior: 'smooth'
        });
    };

    const handlePrevClick = () => {
        if (currentIndex > 0) {
            scrollToIndex(currentIndex - 1);
            console.log(`Current index: ${currentIndex}`);
        }
    };

    const handleNextClick = () => {
        if (currentIndex < videos.length - 1) {
            scrollToIndex(currentIndex + 1);
            console.log(`Current index: ${currentIndex}`);
        }
    };

    return (
        <div id="player" className="player">
            <button
                className="nav-button left"
                onClick={handlePrevClick}
                style={{ display: currentIndex === 0 ? 'none' : 'block' }}
            >
                &lt;
            </button>
            <div className="reels-container" ref={containerRef}>
                {videos.map((video, index) => (
                    <div className="reels-inner-container" key={index}>
                        <video className="reels-video" src={video} autoPlay muted loop></video>
                    </div>
                ))}
            </div>
            <button
                className="nav-button right"
                onClick={handleNextClick}
                style={{ display: currentIndex === videos.length - 1 ? 'none' : 'block' }}
            >
                &gt;
            </button>
        </div>
    );
};

export default Player;
