import React, { useRef } from 'react'

const Form = ({fetchWeather}) => {


  //if i was use 
  // const (key,setKey) =useState('')
  // console.log(key);
  // <input type="text"value={key}  onChange={(e)=>setKey(e.target.value)}  className=' form-control ms-5' placeholder='Enter Country...' name="" id=""  />

  const searchKey =useRef('')

  // const showSearchKey = () =>{
  //   console.log(searchKey.current.value);
  // }
  return (
    <div className='w-100 d-flex justify-content-center mt-3 rounded'>
      <input type="text" ref={searchKey} className=' form-control ms-5' placeholder='Enter Country...' name="" id=""  />
      <input type='button' onClick={()=>fetchWeather(searchKey.current.value)} value='Search' className='btn ms-2 me-2 bg-dark text-white'/>
    </div>
   
  )
}

export default Form