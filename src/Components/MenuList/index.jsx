import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const MenuList = (props) => {
  return (
    <div
      style={{
        padding: "12px 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: props.id === props.selected && "#9d9df8",
        color: props.id === props.selected && "#fff",
      }}
    >
      {props.value}
      {/* Show 'Next' icon only if the menu item is selected */}
      {props.id === props.selected && <NavigateNextIcon />}
    </div>
  );
};

export default MenuList;
