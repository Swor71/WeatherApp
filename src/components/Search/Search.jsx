import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import SearchButton from "./SearchButton/SearchButton";

const styles = theme => ({
  container: {
    textAlign: "center",
    display: "flex",
    alignItems: "center"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    backgroundColor: "white",
    borderRadius: "4px"
  }
});

const Search = props => {
  const { classes } = props;

  return (
    <form
      className={classes.container}
      onSubmit={e => props.onGetData(e)}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-search"
        label="Weather in..."
        type="search"
        className={classes.textField}
        margin="normal"
        variant="filled"
        color="secondary"
        onChange={e => props.onSearchChange(e)}
      />
      <SearchButton />
    </form>
  );
};

Search.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Search);
