import styled from 'styled-components';
import CityComponent from './modules/CityComponent';
import WeatherComponent from './modules/WeatherComponent';
import axios from 'axios';
import React,{useState} from 'react';

const Container = styled.div`
display:flex;
flex-direction: column;
margin:auto;
align-items: center;
box-shadow: 0 3px 6px 0 #555;
border-radius: 10px;
width: 350px;
background:white; 
`;

const AppLabel  =styled.span`
margin-top: 20px;
color : black;
font-size : 23px;
font-weight : 450;
font-family: Montserrat;
padding: 8px;
border: 1px solid black;
border-radius: 5px`;

function App() {
  const [city ,setCity]  =useState();
  const [weather  ,setWeather] = useState();
  const fetchWeather = async (e) =>{
    e.preventDefault();
   const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=62a63c6492c0f01e3b026daaf969031c`);
   console.log(response);
   setWeather(response.data);
  }
  return (
    <Container>
      <AppLabel> React based weather app</AppLabel>
      {weather?<WeatherComponent weather={weather} />:<CityComponent setCity ={setCity}  fetchWeather={fetchWeather}/>}
       
    </Container>

  );
}

export default App;
