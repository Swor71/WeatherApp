import React from "react";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";

const MenuDrawer = props => {
  const drawerMenu = (
    <div>
      <MenuItem>
        <ListItemText primary="Weather Today" />
      </MenuItem>
      <MenuItem>
        <ListItemText primary="5-Day Weather Forecast" />
      </MenuItem>
    </div>
  );

  return (
    <Drawer
      variant="temporary"
      open={props.opened}
      onClose={props.toggleDrawer}
    >
      <div
        role="button"
        onClick={props.toggleDrawer}
        onKeyDown={props.toggleDrawer}
      >
        {drawerMenu}
      </div>
    </Drawer>
  );
};

export default MenuDrawer;
