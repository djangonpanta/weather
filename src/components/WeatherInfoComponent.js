import React from "react";
import { InfoContainer, InfoIcon, InfoLabel } from "./WeatherComponent.style";

import { WeatherInfoIcons } from "../data/Data";
const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  console.log(WeatherInfoIcons);
  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]} />
      <InfoLabel>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  );
};

export default WeatherInfoComponent;
