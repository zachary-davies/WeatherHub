import { AxiosResponse } from "axios";
import { WeatherInfo, WeatherResponse } from "../common/types";
import Express from "express";

const express = require("express");
const axios = require("axios");

const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req: Express.Request, res: Express.Response) => {
  if (!req.query) {
    throw new Error("No city included");
  }

  const city = req.query.city;

  axios
    .get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        q: city,
        units: "imperial",
        appid: "8b706b02fb49d0580828e3e014410ada",
      },
    })
    .then((response: AxiosResponse) => {
      const data = response.data as WeatherResponse;
      let weatherInfo: WeatherInfo = {
        city: data.name,
        forecast: data.weather[0].main,
        forecastDetails: data.weather[0].description,
        temp: data.main.temp,
        feelsLike: data.main.feels_like,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
      };
      res.status(200).json(weatherInfo);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
