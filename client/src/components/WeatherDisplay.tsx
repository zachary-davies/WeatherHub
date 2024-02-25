import { WeatherInfo } from "@Common/types";
import { capitalizeFirst } from "../utils";

type WeatherDisplayProps = {
  weatherData: WeatherInfo;
};

const WeatherDisplay: React.FC<WeatherDisplayProps> = (props) => {
  const { weatherData } = props;

  return (
    <div>
      <h1>{capitalizeFirst(weatherData.city)}</h1>
      <h2>{capitalizeFirst(weatherData.forecast)}</h2>
      <p>{capitalizeFirst(weatherData.forecastDetails)}</p>

      <h2>{capitalizeFirst(weatherData.temp.toFixed().toString())} F</h2>

      <ul>
        <li>{weatherData.feelsLike.toFixed()}</li>
        <li>{weatherData.tempMin.toFixed()}</li>
        <li>{weatherData.tempMax.toFixed()}</li>
      </ul>
    </div>
  );
};

export default WeatherDisplay;
