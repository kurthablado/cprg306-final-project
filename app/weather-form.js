"use client"

import { useState, useEffect } from "react";
import Weather from "./weather";

export default function WeatherForm({ city, onCityChange, onSubmit }) {

    // Styling variables
    let buttonStyles = "block mt-4 p-3 w-full bg-green-500";


    return(
        <div>
            <form onSubmit={onSubmit}>
                <div className="border-4 border-green-400 p-10 m-4 w-full" >
                    <div className="text-xl pb-4 text-center">
                    <label htmlFor="city" className="m-2">Enter City: </label>
                        <input
                        type="text"
                        id="city"
                        onChange={onCityChange}
                        value={city}
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
    </div>
    );
}
