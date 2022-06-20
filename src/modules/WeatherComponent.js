import { getNodeText } from "@testing-library/react";
import styled from "styled-components";
import suns from "/icons/sunset.png";
import sunr from "/icons/sunrise.png";
import humid from "/icons/humidity.png";
import win from "/icons/wind.png";
import press from  "/icons/pressure.png";



const WeatherInfoIcons = {
sunset : suns,
sunrise :sunr ,
humidity:humid ,
wind :win ,
pressure press:
};

const WeatherCondition = styled.div`
display: flex;
flex-direction: row;
align-items : center;
justify-content : space-between;
width: 100%;
margin: 30px auto;

`;
const Weatherlogo=styled.img`
height: 100px;
width: 100px;
margin:5px auto;`;
const Condition= styled.span`
margin: 20px auto;
font-size: 15px;
& span {
    font-size: 35px;

}
`;
const Location  = styled.span`
font-size: 27px;
font-weight: 400;`;
const WeatherinfoLabel = styled.span`
font-size : 15px;
margin: 20px;
font-weight: 350;
text-align : start;
width :90%;
`;
const WeatherInfoContainer = styled.div`
    margin: 5px;
    margin-bottom: 20px;
    display: flex;
    flex-direction : row;
    justify-content:space-evenly;
    align-items : center;
    flex-wrap : wrap;
    flex-basis: 50%;

`;
const InfoContainer = styled.div`
display: flex;
flex-direction : row;
width: 33%;
margin: 5px 10px;
align-items:center;
justify-content : space-evenly;
`;

const InfoIcon = styled.img`
width:35px;
margin: 5px;
height: 35px;`

const InfoLabel = styled.span`
display:flex;
font-weight: 350;
flex-direction: column;
margin: 5px;
font-size: 15px;
`;
const WeatherInfoComponent=(props)=>{
    const {name , value} = props;
    
    return(
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]}/>
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    );
};
const WeatherComponent = ({weather}) =>{
    const isday = weather?.weather[0].icon?.includes("d");
    const getTime = (timestamp) =>{
        return `${new Date(timestamp*1000).getHours()}:${new Date(timestamp*1000).getMinutes()}`
    }
    return(
        <>
        <WeatherCondition>
            <Condition><span>{Math.floor(weather.main.temp) -273} °C</span> | {weather?.weather[0].description}</Condition>
            <Weatherlogo src="/icons/weatherlogo.png"></Weatherlogo>
        </WeatherCondition>
        <Location>{`${weather.name}, ${weather.sys.country}`}</Location>
        <WeatherinfoLabel>   Weather info</WeatherinfoLabel>
        <WeatherInfoContainer>
            <WeatherInfoComponent name={isday?"sunset":"sunrise"} value={getTime(weather?.sys[isday?"sunset":"sunrise"])}/>
            <WeatherInfoComponent name="humidity" value={weather?.main?.humidity}/>
            <WeatherInfoComponent name="wind" value={weather?.wind?.speed}/>
            <WeatherInfoComponent name = "pressure" value={weather.main.pressure} />
        </WeatherInfoContainer>
        </> 
    );
};
export default WeatherComponent;
