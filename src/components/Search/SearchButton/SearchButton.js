import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

const SearchButton = props => {
  const { classes } = props;
  return (
    <Button
      variant="raised"
      color="primary"
      className={classes.button}
      type="submit"
    >
      Search
    </Button>
  );
};

SearchButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchButton);
