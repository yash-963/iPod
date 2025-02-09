import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

const IpodControls = (props) => {
  return (
    <div
      style={{
        width: "180px",
        margin: "auto",
        background: "#d0cfcf",
        height: "180px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
      }}
      onMouseMove={props.handleGoNext}
      onMouseLeave={props.handleMouseLeave}
    >
      <div>
        <SkipPreviousIcon />
      </div>
      {/* Center Control with Menu, Select Button, and Play/Pause Icons */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        {/* Menu Button */}
        <div
          style={{ fontSize: "18px", cursor: "pointer" }}
          onClick={props.handleMenu}
        >
          Menu
        </div>
        {/* Select Button in the center */}
        <div
          style={{
            width: "100px",
            height: "100px",
            background: "#000",
            borderRadius: "50%",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            cursor: "pointer",
          }}
          onClick={props.handleSelect}
        >
          Select
        </div>
        {/* Play/Pause Icons */}
        <div>
          <PlayArrowIcon />
          <PauseIcon />
        </div>
      </div>
      {/* Next Button */}
      <div>
        <SkipNextIcon />
      </div>
    </div>
  );
};

export default IpodControls;
