import axios from "axios";
import { useState } from "react";
import { Container, AppLabel } from "./components/App.Style";
import CityComponent from "./components/CityComponent";
import WeatherComponent from "./components/WeatherComponent";
const API_KEY = "47b75d5aa491f7616086e9609c1327fb";

function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    setWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>Weather App</AppLabel>
      {weather ? (
        <WeatherComponent weather={weather} />
      ) : (
        <CityComponent setCity={setCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}
export default App;
