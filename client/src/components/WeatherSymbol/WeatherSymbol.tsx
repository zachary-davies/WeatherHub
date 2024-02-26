import React from "react";
import {
  WiCloud,
  WiRain,
  WiRainMix,
  WiSandstorm,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";

type WeatherSymbolProps = {
  type: string;
};

const WeatherSymbol: React.FC<WeatherSymbolProps> = (props) => {
  const { type } = props;

  const renderSwitch = () => {
    switch (type.toLowerCase()) {
      case "clear":
        return <WiCloud size={"20em"} />;
      case "clouds":
        return <WiCloud size={"20em"} />;
      case "thunderstorm":
        return <WiThunderstorm size={"20em"} />;
      case "drizzle":
        return <WiRainMix size={"20em"} />;
      case "rain":
        return <WiRain size={"20em"} />;
      case "snow":
        return <WiSnow size={"20em"} />;
      default:
        return <WiSandstorm size={"20em"} />;
    }
  };

  return <> {renderSwitch()}</>;
};

export default WeatherSymbol;
