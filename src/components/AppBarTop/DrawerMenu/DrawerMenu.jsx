import React from "react";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";

const DrawerMenu = props => {
  return (
    <Drawer open={props.opened} onClose={props.toggleDrawer}>
      <div
        role="button"
        onClick={props.toggleDrawer}
        onKeyDown={props.toggleDrawer}
      >
        <div>
          <MenuItem>
            <Link to="/todayWeather">Today's Weather</Link>
          </MenuItem>
          <Divider />
          <MenuItem>
            <Link to="/fiveDayWeather">5-Day Weather Forecast</Link>
          </MenuItem>
        </div>
      </div>
    </Drawer>
  );
};

export default DrawerMenu;
