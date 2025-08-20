import { useRef, useState } from "react";
import IpodControls from "./IpodControls";
import IpodScreen from "./IpodScreen";

const Ipod = () => {
  // State for managing different screens
  const [showMenu, setShowMenu] = useState(true);
  const [gameScreen, setShowGameScreen] = useState(false);
  const [settingScreen, setShowSettingScreen] = useState(false);
  const [coverFlow, ShowCoverFlow] = useState(false);
  const [musicScreen, showMusicScreen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(1);

  // Ref for tracking previous mouse position
  const previousX = useRef(null);
  const movementThreshold = 20;

  // Handle menu button click - resets to main menu
  const handleMenu = () => {
    setShowGameScreen(false);
    setShowSettingScreen(false);
    ShowCoverFlow(false);
    showMusicScreen(false);
    setShowMenu(true);
  };

  // Handles mouse movement to navigate menu items
  const handleGoNext = (event) => {
    const currentX = event.clientX; // Current mouse X position

    if (previousX.current !== null) {
      const deltaX = currentX - previousX.current; // Difference in X positions

      if (Math.abs(deltaX) > movementThreshold) {
        setSelectedMenu((prev) => {
          if (deltaX > 0) {
            // Moving right
            return prev + 1 > 4 ? 1 : prev + 1;
          } else {
            // Moving left
            return prev - 1 < 1 ? 4 : prev - 1;
          }
        });
        previousX.current = currentX; // Update the previous position after the change
      }
    } else {
      // Initialize previousX on first movement
      previousX.current = currentX;
    }
  };

  // Reset previous mouse position when cursor leaves the component
  const handleMouseLeave = () => {
    previousX.current = null; // Reset on mouse leave
  };

  // Handle selection of a menu item
  const handleSelect = () => {
    setShowMenu(false);
    if (selectedMenu === 2) {
      showMusicScreen(true);
    }
    if (selectedMenu === 3) {
      setShowGameScreen(true);
    }
    if (selectedMenu === 4) {
      setShowSettingScreen(true);
    }
    if (selectedMenu === 1) {
      ShowCoverFlow(true);
    }
  };

  return (
    <div
      style={{
        width: "300px",
        background: "#67afc0",
        borderRadius: "20px",
        margin: "auto",
        height: "90vh",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        border: "2px solid #000",
      }}
    >
      {/* iPod Screen Component */}
      <div>
        <IpodScreen
          showMenu={showMenu}
          gameScreen={gameScreen}
          settingScreen={settingScreen}
          selectedMenu={selectedMenu}
          coverFlow={coverFlow}
          musicScreen={musicScreen}
        />
      </div>
      {/* iPod Controls Component */}
      <div>
        <IpodControls
          handleMenu={handleMenu}
          handleGoNext={handleGoNext}
          handleMouseLeave={handleMouseLeave}
          handleSelect={handleSelect}
        />
      </div>
    </div>
  );
};

export default Ipod;
