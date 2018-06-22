import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import SearchButton from "./SearchButton/SearchButton";

const styles = theme => ({
  container: {
    display: "block",
    margin: "0 auto"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

const Search = props => {
  const { classes } = props;

  return (
    <form
      className={classes.container}
      onSubmit={props.onClickData}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="search"
        label="Weather in..."
        type="search"
        className={classes.textField}
        margin="normal"
        onChange={props.changeHandler}
      />
      <SearchButton onClickData={props.onClickData} />
    </form>
  );
};

Search.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Search);
