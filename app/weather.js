import { useEffect, useState } from 'react';
import WeatherForm from './weather-form';

export default function Weather( {city, weatherObj}) {

    console.log("Received weatherObj", weatherObj);

    const {
        temperature = "N/A",
        wind = "N/A",
        description = "no description available",
    } = weatherObj || {};

        return(
            <div className="block ml-7 p-4 border-2 border-yellow-700 items-center text-center">
            <h2 className="text-xl font-bold pb-4">Weather in {city}:</h2>
            <p><strong>Temperature:</strong> {temperature}</p>
            <p><strong>Wind:</strong> {wind}</p>
            <p><strong>Description:</strong> {description}</p>

        </div>
        );
    }
    