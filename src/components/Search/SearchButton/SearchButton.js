import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
const styles = theme => ({
  text: {
    color: theme.palette.getContrastText("#B71C1C"),
    backgroundColor: "#B71C1C",
    "&:hover": {
      backgroundColor: "#D32F2F"
    }
  }
});

const SearchButton = props => {
  const { classes } = props;

  return (
    <Button
      className={classes.text}
      variant="raised"
      color="secondary"
      type="submit"
    >
      Search
    </Button>
  );
};

export default withStyles(styles)(SearchButton);
