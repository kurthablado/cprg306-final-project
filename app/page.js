"use client"

import WeatherForm from "./weather-form";

export default function Home() {

  const headerStyle = "text-4xl font-bold text-center p-3 m-4 text-cyan-600";

  return(
    <main>      
      <h1 className="justify-center w-full">
        <img src="logo.png" alt="Iced coffee logo" />
      </h1>
        <p className=" block text-center text-3xl p-3 m-2">Find out if it's iced coffee weather in your area!</p>
        <div className="flex justify-center w-full">
          <WeatherForm /> 
          </div>
    </main>
  );
}