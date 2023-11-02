import React from "react";
import { Link, Outlet } from "react-router-dom";

function More() {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "1400px",
          paddingLeft:'40px'
        }}
      >
        <h3>
          <Link to="movies">Movies</Link>
        </h3>
        <h3>
          <Link to="weatherapp">WeatherApp</Link>
        </h3>
        <h3>
          <Link to="planner">Planner</Link>{" "}
        </h3>
      </nav>

      <Outlet />

      {/* <iframe src="https://wool-mature-llama.glitch.me/" alt='SudeepAryanWeatherapp'height='500px' width="100%" className='weatherapp'></iframe>
      <iframe src="https://sudeeparyantimely.glitch.me/" alt='SudeepAryanWeatherapp'height='500px' width="100%" className='weatherapp'></iframe> */}
    </div>
  );
}

export default More;
