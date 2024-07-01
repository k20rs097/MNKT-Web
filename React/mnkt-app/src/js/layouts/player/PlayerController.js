import NavigationButton from "./NavigationButton";
import useWindowSize from "../../hooks/useWindowSize";

const PlayerController = ({ length, containerRef }) => {
  const [width] = useWindowSize();
  return (
    <div
      className="player-controller"
      style={{ display: width <= 600 ? "none" : "block" }}
    >
      <div className="navigation-buttons">
        <NavigationButton
          className="above"
          length={length}
          containerRef={containerRef}
        />
        <NavigationButton
          className="below"
          length={length}
          containerRef={containerRef}
        />
      </div>
    </div>
  );
};

export default PlayerController;
