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
            <div>
            <h2 className="text-xl font-bold">Weather in {city}</h2>
            <p><strong>Temperature:</strong> {temperature}</p>
            <p><strong>Wind:</strong> {wind}</p>
            <p><strong>Description:</strong> {description}</p>

        </div>
        );
    }
    