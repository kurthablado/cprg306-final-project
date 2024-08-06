

// TODO:
// Fix logic with the getWeather function

import { useEffect } from "react";


export default function IcedCoffee({weatherObj}) {

    async function getWeather({temperature, wind}) {
        if (temperature > 15 && wind < 10) {
            alert("It's iced coffee weather!");
        }
        else {
            alert("It's not iced coffee weather!");
        }
    }; 

    // logic for determining iced coffee weather
    useEffect ( () => (
        getWeather(weatherObj)
    ), []);

    return(
        <div>
            <IcedCoffee weatherObj={weatherObj} />
        </div>
    );
}