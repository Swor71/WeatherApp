import React from 'react'
import './TodayWeather.css'

import _ from 'lodash'

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const TodayWeather = (props) => {

    let temp = props.list.map(item => {
      let tempsArr = [];
      tempsArr.push(item.main.temp);
      return tempsArr;
    });

    let minTemp = _.round(_.min(temp), 1);
    let maxTemp = _.round(_.max(temp), 1);

    return (
        <Card >
            <CardContent>
                <Typography color="primary">
                    {props.list[0].dt_txt.split(' ').shift()}
                </Typography>
                <div className='card-content'>
                    <div>{props.list[0].dt_txt.split(' ').pop().slice(0, 5)}</div>
                    <div>
                        <img className={"pic"} src={`http://openweathermap.org/img/w/${props.list[0].weather[0].icon}.png`} alt="icon" />
                    </div>
                    <div>{props.list[0].weather[0].description}</div>
                    <div>{_.round(props.list[0].main.temp, 1)} &#8451;</div>
                    <div>{`${minTemp} / ${maxTemp}`}</div>
                </div>
            </CardContent>
            {/* <CardActions>
                <Button size="small" color="primary">Learn More</Button>
            </CardActions> */}
        </Card>
    )
}

export default TodayWeather;