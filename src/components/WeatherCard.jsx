import React, { useEffect, useState } from 'react'
import '../App.css'
import '../components/styles/weatherCard.css'

const WeatherCard = ({weather, temp}) => {
    const [isCel, setIsCel] = useState(true);

    // let contenidoInicial = 'Inicial';
    // let contenidoNuevo = 'Nuevo';

    // let Celcius = temp?.cel;
    // let Farenheit = temp?.fah;

    

    // const [isCel, setIsCel] = useState(true);
    // let [prueba, setPrueba] = useState(contenidoInicial)

    // mi forma -------------------
        // let [changeTemp, setChangeTemp] = useState(temp?.cel)
        // const [isCel, setIsCel] = useState(true);
    // mi forma -------------------

    // useEffect(() => {
        
    // }, [changeTemp])


    // mi forma -------------------
        // let handleTemp = () => {
        //     if(isCel){
        //         setChangeTemp(temp.fah);
        //     } else {
        //         setChangeTemp(temp.cel);
        //     }
        //     setIsCel(!isCel);
        // }
    // mi forma -------------------


        // let handleText = () => {
        //     //
        //     setPrueba(prueba === contenidoInicial ? prueba = contenidoNuevo: contenidoInicial);
        // }

        
        
    // FORMA DEL PROFE ------
        const handleTemp = () => {
            setIsCel(!isCel);
        }       
    // FORMA DEL PROFE ------
        
    
       


  return (
    <>
    <h1 className='title'>Weather App</h1>
    <div className='weather__card-container'>
        <h2 className='weather__main-title'>{weather?.name}, {weather?.sys.country}</h2>
        <div className='weather__main-container'>
            <div>
                <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="weather imagen" />
            </div>
            <div>
                <h3 className='weather__env-condition'>"{weather?.weather[0].description}"</h3>
                <div className='weather__container'>
                    <div className='weather__info-title'>
                        <span>Win Speed</span>
                        <span>Clouds</span>
                        <span>Preasure</span>
                    </div>
                    <div className='weather__info'>
                        <span>{weather?.wind.speed} m/s</span>
                        <span>{weather?.clouds.all} %</span>
                        <span>{weather?.main.pressure} hPa</span>
                    </div>
                </div>
                <p className='weather__temp'>
                    {
                        isCel ? 
                        temp?.cel.toFixed(2) + ' °C'
                        :
                        temp?.fah.toFixed(2) + ' °F'
                    }
                </p>
                {/* <button onClick={handleText}>
                    {prueba}
                </button> */}
                <br />
                <button onClick={handleTemp}>
                    Change to 
                    {
                        isCel ? 
                        ' °F'
                        : 
                        ' °C'
                    }
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default WeatherCard