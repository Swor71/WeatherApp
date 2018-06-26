import React from "react";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";

const DrawerMenu = props => {
  const drawerContent = (
    <div>
      <ul>
        <li>
          <Link to="/todayWeather">Today Weather</Link>
        </li>
        <li>
          <Link to="/fiveDayWeather">5-Day Weather Forecast</Link>
        </li>
      </ul>

      {/* <MenuItem>
        <ListItemText primary="Weather Today" />
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemText primary="5-Day Weather Forecast" />
      </MenuItem> */}
    </div>
  );

  return (
    <Drawer open={props.opened} onClose={props.toggleDrawer}>
      <div
        role="button"
        onClick={props.toggleDrawer}
        onKeyDown={props.toggleDrawer}
      >
        {drawerContent}
      </div>
    </Drawer>
  );
};

export default DrawerMenu;
