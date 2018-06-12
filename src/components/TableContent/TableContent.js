import React from "react";
import PropTypes from "prop-types";
import "./TableContent.css";

import _ from "lodash";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const TableContent = props => {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary">
          {props.list[0].dt_txt.split(" ").shift()}
        </Typography>
        <table className="table">
          <tbody>
            {props.list.map((item, key) => (
              <tr key={key}>
                <td>
                  {item.dt_txt
                    .split(" ")
                    .pop()
                    .slice(0, 5)}
                </td>
                <td>
                  <img
                    className={"pic"}
                    src={`http://openweathermap.org/img/w/${
                      item.weather[0].icon
                    }.png`}
                    alt="icon"
                  />
                </td>
                <td>{item.weather[0].description}</td>
                <td>{_.round(item.main.temp, 1)} &#8451;</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

TableContent.propTypes = {
  list: PropTypes.array
};

export default TableContent;
