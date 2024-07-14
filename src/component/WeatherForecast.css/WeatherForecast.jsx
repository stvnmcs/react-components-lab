
import './WeatherForecast.css'



const WeatherForecast = function ({ forecast }) {

 return (


<div className="weather">
  <h2>{forecast.day}</h2>
  <img src="" alt="" />
  <p><span>conditions: {forecast.conditions} </span></p>
  <p><span>time: {forecast.time} </span></p>
</div>
   )
};

export default WeatherForecast