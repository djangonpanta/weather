import styled from "styled-components";
export const WeatherCondition = styled.div`
  display: flex;
  flex-direction: row;
  align-item: center;
  width: 100%;
  margin: 30px auto;
  justify-content: space-between;
`;
export const Condition = styled.span`
  margin: 20px auto;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;
export const WeatherLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;
export const Location = styled.span`
  font-size: 28px;
  font-weight: 800;
`;
export const WeatherInfoLabel = styled.span`
  font-size: 14px;
  font-weight: 800;
  margin: 20px 25px 10px;
  text-align: start;
  width: 90%;
`;
export const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
export const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
export const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
export const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;
