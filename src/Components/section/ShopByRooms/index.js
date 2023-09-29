import React from 'react'
import {DataShopByRooms} from '../../../Data/ShopbyRooms_Data'
// import { Button, TextField } from '@mui/material'
// import { Handshake } from '@mui/icons-material'



const ShopByRooms = () => {
  // const [value,setValue]=useState("sothing")
  // const [name,setName]=useState("sothing")
  // const [mobile,setMobile]=useState("sothing")

  // const handleSubmit=()=>{
  //   console.log(value, name,mobile,"jjjjj")
  //   setValue("")
  // }
  
  // http://localhost:3000/
    return (
    <div className='mx-14 w-fill text-overflow'>
        <center>
        <h1 className='my-2 text-center text-3xl font-semibold font-serif leading-loose' >Shop By Rooms</h1>
        </center>
        {/* <div className=' h-auto flex flex-wrap mb-10'>
            {ImageGallery.map((index)=> <img src={index.src} 
            className='mb-10 hover:drop-shadow-xl hover:font-semibold ml-5 w-40 h-40 rounded-md m-3 hover:border-2' />)}
        </div>       */}
        <div className="grid grid-cols-6 gap-4 my-5 mx-5">
          {DataShopByRooms.map((item) => (
            <div>
              <div key={item.id} >
                <img src={item.src} alt={item.desc} className="hover:drop-shadow-xl mx-5 hover:font-semibold w-40 rounded-md hover:border-2"/>
                <h2 className="text-center my-5 hover:font-semibold">{item.desc}</h2>
              </div>
            </div>
          ))}
          </div>         
    </div>
  )
}


export default ShopByRooms;