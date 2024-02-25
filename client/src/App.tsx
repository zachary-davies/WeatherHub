import { WeatherInfo } from "@Common/types";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  const [data, setData] = useState<WeatherInfo | null>(null);

  useEffect(() => {
    axios
      .get("/api", {
        params: {
          city: "Rochester,ny,us",
        },
      })
      .then((response: AxiosResponse) => {
        const data = response.data;
        setData(data);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {!data ? <p>Loading...</p> : <WeatherDisplay weatherData={data} />}
      </header>
    </div>
  );
}

export default App;
