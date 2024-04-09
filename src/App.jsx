import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';




function App() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [temp, setTemp] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const success = (position) => {
    console.log(position);
    // console.log(position.coords.latitude)
    const obj = {
      lat: position.coords.latitude,
      long: position.coords.longitude
    }
    setCoords(obj);
    // console.log(obj.lat);
    // console.log(obj.long);
  }

  console.log(coords);
  console.log(temp)

  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, [])

  useEffect(() => {
    if(coords){
      const apiKey = 'b78148dd1fbc7dda455f66bf599a61ad';
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=${apiKey}`;
      axios.get(url)
        .then(res => {
          const cel = res.data.main.temp - 273.15;
          const fah = cel * 9/5 + 32;
          setTemp({cel, fah});
          setWeather(res.data);
        })
        .catch(err => console.log(err))
        .finally(() => {
          setIsLoading(false);
          // setTimeout(() => {
            
          // }, 2000)
        });
    }
  }, [coords]);

  
  

  return (
    <>
      <div className='app'>
        {
          isLoading ?
          <h2>Loading...</h2>
          : 
          <WeatherCard weather={weather} temp={temp}/>
        }
      </div>
    </>
  )
}

export default App
