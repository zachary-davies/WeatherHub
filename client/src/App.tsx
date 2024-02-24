import { useEffect, useState } from "react";
import { WeatherInfo } from "@Common/types";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/api", {
        params: {
          city: "Rochester,ny,us",
        },
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
