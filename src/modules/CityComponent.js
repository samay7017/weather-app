import styled from "styled-components";

const Weatherlogo = styled.img`
width: 140px;
hiegth: 140px;
margin: 20px auto;
`;
const Choosecity = styled.span`
font-size : 20px;
font-family: Montserrat;
padding: 5px;
margin: 10px auto; 
`;
const Inputbox = styled.form`
display: flex;
flex-direction : row;
border: 1px solid black;
font-size: 20px;
border-radius:2px;
margin: 25px;
margin-bottom: 35px;
& input{
    padding:10px;
    font-size:15px;
    border:none;
    outline:none;
}
& button{ 
    padding:10px;
    font-size: 15px;
    border: none;
    outline none;
    color: white;
    background: black;
    margin-right: -1px;
    cursor: pointer;
}

`;


const CityComponent =({setCity ,fetchWeather})=>{
    return(
        <>
        <Weatherlogo src="/icons/mainlogo.png"></Weatherlogo>
        <Choosecity>enter your city</Choosecity>
        <Inputbox onSubmit={fetchWeather}>
            <input onChange={(e)=>{setCity(e.target.value)}} placeholder="enter your city name"></input>
            <button type="submit">Search</button>
        </Inputbox>
        </>
    );
};
export default CityComponent;