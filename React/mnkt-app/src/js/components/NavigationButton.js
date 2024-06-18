import React, { useState, useRef, useEffect } from "react";
import "../../css/player.css";

const NavigationButton = ({ className, length}) => {
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
    if (currentIndex < length) {
      scrollToIndex(currentIndex + 1);
    }
    console.log("handleNextClicked");
  };

  return (
    <button className={`navigation-button ${className}`} onClick={className === "above" ? handlePrevClick : handleNextClick}>
      {className === "above" ? "⬆︎" : "⬇︎"}
    </button>
  );

};

export default NavigationButton;