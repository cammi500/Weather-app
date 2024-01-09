
import React from 'react'
import { FaCloudMoonRain } from "react-icons/fa";
import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

const Card = ({data}) => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);


  // console.log(data);
  if(JSON.stringify(data) !== '{}'){
    return (
      <div className='flex flex-col items-center rounded'>
        <p > <Clock value={value} className='my-3' /></p>
        <h2>{data.name},{data.sys.country}</h2>
        <h1 className='flex'><img src={ `http://openweathermap.org//img/w/${data.weather[0].icon}.png`}/>{data.main.temp} 'C</h1>
        <p>{data.weather[0].main}</p>
        <p>Humidity:{data.main.humidity} %</p>
        <p>Visibility:{data.visibility/1000}km</p>
      </div>
    )
  }else{
    return(<h1 className='text-center'> Loading....</h1>)
  }
  
}

export default Card