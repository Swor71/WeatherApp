import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import _ from "lodash";
import "./WeatherCard.css";

const styles = theme => ({
  card: {
    width: 320,
    margin: 5
  },
  media: {
    height: 64,
    width: "auto",
    backgroundSize: "contain"
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  button: {
    margin: theme.spacing.unit,
    marginLeft: "auto"
  }
});

class WeatherCard extends React.Component {
  state = {
    expanded: false
  };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes, list, weekday } = this.props;

    let temp = list.map(item => {
      let tempsArr = [];
      tempsArr.push(item.main.temp);
      return tempsArr;
    });

    let minTemp = _.round(_.min(temp), 1);
    let maxTemp = _.round(_.max(temp), 1);
    console.log("rerender", this.state.expanded);
    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            title={`${weekday}`}
            subheader={`${list[0].dt_txt.split(" ").shift()}`}
          />
          <CardMedia
            className={classes.media}
            image={`http://openweathermap.org/img/w/${
              list[0].weather[0].icon
            }.png`}
          />
          <CardContent>
            <Typography align="center" variant="title">
              {`${minTemp} / ${maxTemp}`} &#8451;
            </Typography>
          </CardContent>
          <CardContent>
            <Typography align="center" variant="body2">{`Wind - ${
              list[0].wind.speed
            } m/s`}</Typography>
            <Typography align="center" variant="body2">{`Pressure - ${
              list[0].main.pressure
            } hPa`}</Typography>
            {/* <Typography align="center" variant="body2">{`Rain - ${
              list[0].rain.3h
            } mm`}</Typography> */}
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <Button
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              // aria-label={`Show ${this.state.expanded ? "less" : "more"}`}
              color="primary"
              className={classes.button}
            >
              <ExpandMoreIcon
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded
                })}
              />
              <span>Show {this.state.expanded ? "less" : "more"}</span>
            </Button>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <table className="table">
                <tbody>
                  {list.map((item, key) => (
                    <tr key={key}>
                      <td>
                        {item.dt_txt
                          .split(" ")
                          .pop()
                          .slice(0, 5)}
                      </td>
                      <td>
                        <img
                          className={"weather-icon"}
                          src={`http://openweathermap.org/img/w/${
                            item.weather[0].icon
                          }.png`}
                          alt="icon"
                        />
                      </td>
                      <td>{item.weather[0].main}</td>
                      <td>{_.round(item.main.temp, 1)} &#8451;</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

WeatherCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WeatherCard);
