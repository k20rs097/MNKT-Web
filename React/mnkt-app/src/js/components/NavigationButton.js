import React, { useState, useRef, useEffect } from "react";
import { SlArrowUpCircle } from "react-icons/sl";
import { SlArrowDownCircle } from "react-icons/sl";

import "../../css/player.css";

const NavigationButton = ({ className, length, containerRef }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight } = containerRef.current;
      const newIndex = Math.round(scrollTop / clientHeight);
      setCurrentIndex(newIndex);
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [containerRef]);

  const isEdge = (className) => {
    switch (className) {
      case "above":
        return currentIndex === 0;
      case "below":
        return currentIndex >= length;
      default:
        return false;
    }
  };

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
    <button
      className={`navigation-button ${className} ${isEdge(className) ? "hide" : "show"}`}
      onClick={className === "above" ? handlePrevClick : handleNextClick}
    >
      {className === "above" ? <SlArrowUpCircle />: <SlArrowDownCircle />}
    </button>
  );
};

export default NavigationButton;
