import { WeatherInfo } from "@Common/types";
import axios, { AxiosResponse } from "axios";
import React, { useState, useEffect } from "react";
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";
import { capitalizeFirst } from "./utils";

function App() {
  const [data, setData] = useState<WeatherInfo | null>(null);
  const [error, setError] = useState<string>("");
  const [location, setLocation] = useState<string>("");

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
      })
      .catch((e) => {
        setError(e.response.data.message);
      });
  }, []);

  const searchCity = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setError("");
    if (e.key === "Enter") {
      axios
        .get("/api", {
          params: {
            city: location,
          },
        })
        .then((response: AxiosResponse) => {
          const data = response.data;
          setData(data);
        })
        .catch((e) => {
          setError(e.response.data.message);
        });
    }
  };

  return (
    <div className="app--container">
      <div className="app__content--container">
        {!data ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className={"app__search--container " + (error && "error")}>
              <input
                value={location}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setLocation(e.target.value)
                }
                onKeyUp={searchCity}
              />
              {error ? (
                <p>{error}</p>
              ) : (
                <p>
                  <br />
                </p>
              )}
              <h2>{capitalizeFirst(data.city)}</h2>
            </div>
            <WeatherDisplay weatherData={data} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
