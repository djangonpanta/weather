import React from "react";
import { WeatherLogo, ChooseCityLabel, SearchBox } from "./CityComponent.style";
const CityComponent = (props) => {
  const { setCity, fetchWeather } = props;
  return (
    <>
      <WeatherLogo src="/icons/perfect-day.svg" />
      <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input placeholder="City" onChange={(e) => setCity(e.target.value)} />
        <button type="submit">Search</button>
      </SearchBox>
    </>
  );
};

export default CityComponent;
