
import React, {useEffect,useState} from 'react';
import Form from './components/Form.jsx';
import Card from './components/Card.jsx';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {api,api_key}  from './api/api.js';

 const App = () => {

const [country,setCountry] =useState('Mandalay')
const [data,setData] =useState({})

  const fetchWeather = async(country_name) => {
    // console.log(country_name);
    if(country_name !== undefined){
      setCountry(country_name)

    }


    try{
      const res =await api.get( `/weather?q=${country}&appid=${api_key}`)
      // console.log(res);
      setData (res.data)
    }
    catch(error){
      console.log('error');
    }
   
  }
  useEffect( ()=> {
    fetchWeather();
  },[country]);

  // fetchWeather();
  return (
  
    <div className="w-full min-vh-100 d-flex justify-content-center align-items-center ">
      <div className="shadow-lg bg-light  gap-4">
        <h1 className='text-center'>Weather App </h1>
      <Form fetchWeather={fetchWeather}/> 
      <Card data={data}/>
    </div>
    </div>
  )
}
export default App

