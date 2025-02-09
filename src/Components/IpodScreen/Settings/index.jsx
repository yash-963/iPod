import SettingsIcon from "@mui/icons-material/Settings";

const SettingScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        background: "#fff",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <SettingsIcon sx={{ fontSize: "40px" }} /> Settings
    </div>
  );
};

export default SettingScreen;
