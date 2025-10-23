import React, { useState } from "react";

export default function WeatherDashboard() {
  const [value, setValue] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [isCity, setIsCity] = useState("");
  const [previousSearches, setPreviousSearches] = useState([]);
  // instead of requesting data from an API, use this mock data
  const mockWeatherData = {
    "New York": {
      temperature: "22°C",
      humidity: "56%",
      windSpeed: "15 km/h",
    },
    "Los Angeles": {
      temperature: "27°C",
      humidity: "45%",
      windSpeed: "10 km/h",
    },
    London: {
      temperature: "15°C",
      humidity: "70%",
      windSpeed: "20 km/h",
    },
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSearch = () => {
    const cityData = mockWeatherData[value];

    if (cityData) {
      setIsCity("YES");
      setWeatherData({ ...cityData });

      if (!previousSearches.includes(value)) {
        setPreviousSearches([...previousSearches, value]);
      }
      return;
    }

    setIsCity("NO");
  };

  console.log(weatherData, "Manan Tandon");
  return (
    <div className="h-screen bg-[#FFFFFF]">
      <input
        value={value}
        className="border border-amber-500"
        type="text"
        id="citySearch"
        placeholder="Search for a city..."
        onChange={(e) => handleChange(e)}
      />
      <button id="searchButton" onClick={handleSearch}>
        Search
      </button>
      <div id="weatherData">
        {isCity === "YES" && (
          <>
            <div>Temperature: {weatherData?.temperature}</div>
            <div>Humidity: {weatherData?.humidity} </div>
            <div>Wind Speed: {weatherData?.windSpeed} </div>
          </>
        )}
        {isCity === "NO" && <div>City not found.</div>}
      </div>

      {previousSearches.length > 0 && (
        <div id="previousSearches">
          <div className="flex flex-wrap gap-2">
            {previousSearches.map((city, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsCity("YES");
                  setValue(city);
                  const cityData = mockWeatherData[city];
                  setWeatherData({ city, ...cityData });
                }}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
