"use client"

import { useState } from "react";

export default function WeatherForm(userLocation) {

    // Styling variables
    let buttonStyles = "block mt-4 p-3 w-full bg-green-500";

    // Form control state
    const [location, setLocation] = useState("");
    const [weather, setWeather] = useState(null);

    // onChange event handler
    const handleLocationChange = (event) => setLocation(event.target.value);

    // onSubmit event handler
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (location) {
            try {
                const response = await fetch(
                    `http://api.weatherstack.com/current?access_key=eff8028c449d5c2ab6cfd76594c9b7de&query=${location}`
                );
                const data = await response.json();
                setWeather(data);
            } catch (error) {
                console.log(`Error fetching weather: ${error}`);
            }
        } else {
            console.log("Please enter a valid location");
        }
          

        // Clear form after submission
        setLocation("");
    }


    return(
        <div>
            <form onChange={handleSubmit}>
                <div className="border-4 border-green-400 p-10 m-4 w-full" >
                    <div className="text-xl pb-4 text-center">
                    <label htmlFor="location" className="m-2">Enter Location: </label>
                        <input
                        type="text"
                        id="location"
                        onChange={handleLocationChange}
                        value={location}
                        className="p-2 w-full"
                        />
                    </div>
                    <div>
                        <button type="submit" className={buttonStyles}>
                            Get Weather
                        </button>
                    </div>
                </div>
            </form>

            {/* Display Weather Data */}
            {weather && weather.current && (
                <div>
                    <h2 className="text-xl font-bold">Weather in {weather.location.name}</h2>
                    <p><strong>Temperature:</strong> {weather.current.temperature}°C</p>
                    <p><strong>Weather Description:</strong> {weather.current.weather_descriptions[0]}</p>
                    <p><strong>Humidity:</strong> {weather.current.humidity}%</p>
                    <p><strong>Wind Speed:</strong> {weather.current.wind_speed} km/h</p>
                    <img src={weather.current.weather_icons[0]} alt="Weather icon"/>
                </div>
            )}
    </div>
    );
}
