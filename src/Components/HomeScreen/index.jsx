import MenuList from "../MenuList";

const HomeScreen = (props) => {
  // Defining the menu list with names and unique IDs
  const menuList = [
    { name: "Cover Flow", id: 1 },
    { name: "Music", id: 2 },
    { name: "Games", id: 3 },
    { name: "Settings", id: 4 },
  ];

  return (
    <div
      style={{
        width: "40%",
        height: "100%",
        background: "#fff",
        padding: "16px",
      }}
    >
      {/* Title section */}
      <div
        style={{
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Menu
      </div>
      {/* Rendering the menu items */}
      <div style={{ marginTop: "10px" }}>
        {menuList.map((e) => {
          return (
            <MenuList
              value={e.name}
              key={e.id}
              id={e.id}
              selected={props.selectedMenu}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomeScreen;
