"use client"

// TODO:
// Figure out why API is not working

import WeatherForm from "./weather-form";
import { useState } from "react";
import Weather from "./weather";

export default function Home() {

  const headerStyle = "text-4xl font-bold text-center p-3 m-4 text-cyan-600";

  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");

    // Handle city input change
    const handleCityChange = (event) => setCity(event.target.value.toLowerCase());

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          if (city) {
            const data = await getWeatherByCity(city);
            setWeather(data);
          } else {
            console.log("Please enter a valid city");
          }
        } catch (error) {
          console.log("Error fetching weather data", error);
        }

        // Clear form after submission
        // setCity("");
    };

    // Fetch weather data by city
    async function getWeatherByCity(city) {
        try {
            const response = await fetch(
              `https://goweather.herokuapp.com/weather/${city}`
            );
            const data = await response.json();
            console.log("Weather data", data);
            return data;
        } catch (error) {
            console.error(error);
            return {};
        }
    }

  return(
    <main>      
      <h1 className="justify-center w-full">
        <img src="logo.png" alt="Iced coffee logo" />
      </h1>
        <p className=" block text-center text-3xl p-3 m-2">Find out if it's iced coffee weather in your area!</p>
        <div className="flex justify-center w-full">
        <WeatherForm city={city} onCityChange={handleCityChange} onSubmit={handleSubmit} />
        <Weather weatherObj={weather} city={city}/>
        </div>
    </main>
  );
}