import { WeatherInfo } from "@Common/types";
import { capitalizeFirst } from "../../utils";
import "./WeatherDisplay.css";

import WeatherSymbol from "../WeatherSymbol/WeatherSymbol";

type WeatherDisplayProps = {
  weatherData: WeatherInfo;
};

const WeatherDisplay: React.FC<WeatherDisplayProps> = (props) => {
  const { weatherData } = props;

  return (
    <div className="weatherDisplay--container">
      <div className="weatherDisplay__main--container">
        <WeatherSymbol type={weatherData.forecast} />
        <h1 style={{ marginBottom: "15px" }}>
          {capitalizeFirst(weatherData.temp.toFixed().toString())}&deg;F
        </h1>
        <h3>{capitalizeFirst(weatherData.forecast)}</h3>
        <p>{capitalizeFirst(weatherData.forecastDetails)}</p>
      </div>

      <div className="weatherDisplay__extras--container">
        <div>
          Feels Like <h2>{weatherData.feelsLike.toFixed()}</h2>
        </div>
        <div>
          Min <h2>{weatherData.tempMin.toFixed()}</h2>
        </div>
        <div>
          Max <h2>{weatherData.tempMax.toFixed()}</h2>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
