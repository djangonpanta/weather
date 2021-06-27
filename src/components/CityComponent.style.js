import styled from "styled-components";

export const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;

export const ChooseCityLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: 800;
  margin: 10px auto;
`;
export const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  border-radius: 3px;
  color: black;
  font-size: 18px;
  font-weight: 800;
  margin: 10px auto;
  &input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight: 800;
  }
  &button {
    padding: 10px;
    font-size: 14px;
    color: white;
    background-color: black;
    border: none;
    outline: none;
    font-weight: 800;
    cursor: pointer;
  }
`;
