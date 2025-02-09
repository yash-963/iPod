import HomeScreen from "../HomeScreen";
import CoverFlow from "./CoverFlow";
import GameScreen from "./Games";
import MusicScreen from "./MusicScreen";
import SettingScreen from "./Settings";

const IpodScreen = (props) => {
  return (
    <div
      style={{
        background: "#fff",
        backgroundImage: `URL("/static/images/iPhoneWallpaper.jpg")`,
        borderRadius: "20px",
        width: "100%",
        height: "250px",
        backgroundSize: "cover",
        overflow: "hidden",
        border: "2px solid #000",
      }}
    >
      {props.showMenu && <HomeScreen selectedMenu={props.selectedMenu} />}
      {props.gameScreen && <GameScreen />}
      {props.settingScreen && <SettingScreen />}
      {props.coverFlow && <CoverFlow />}
      {props.musicScreen && <MusicScreen />}
    </div>
  );
};

export default IpodScreen;
