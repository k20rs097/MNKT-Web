import React, { useState, useEffect } from "react";
import { SlArrowUpCircle } from "react-icons/sl";
import { SlArrowDownCircle } from "react-icons/sl";

const NavigationButton = ({ className, length, containerRef }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight } = containerRef.current;
      // console.log(`scrollTop: ${scrollTop}\nclientHeight:${clientHeight}`)
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
  };

  const handleNextClick = () => {
    if (currentIndex < length) {
      scrollToIndex(currentIndex + 1);
    }
  };

  return (
    <button
      className={`navigation-button ${className}`}
      onClick={className === "above" ? handlePrevClick : handleNextClick}
      style={{
        opacity: isEdge(className) ? 0 : 1,
        visibility: isEdge(className) ? "hidden" : "visible",
        transition: "opacity 0.3s, visibility 0.3s",
      }}
    >
      {className === "above" ? <SlArrowUpCircle /> : <SlArrowDownCircle />}
    </button>
  );
};

export default NavigationButton;
