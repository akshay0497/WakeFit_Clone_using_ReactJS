import React from "react"
import logo from '../../Asset/Navbar/images/logo.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import LeftDrawer from "../Drawer";


const NavBar = () => {
    return (
        <>
            <div className='bg-[#433487] text-[#F6D2C8]'>
                <div id="headerno-1">
                    <div className='flex items-center justify-between py-2'>
                        <div className='flex justify-between mx-2'>
                            <div className='flex items-center pr-2 pl-3' >
                                <LeftDrawer />
                            </div>
                            <div className='logo px-3'>
                                <img className='h-14' alt='logo' src={logo} />
                            </div>
                            <div className='flex items-center justify-between border-b-2'>
                                <SearchOutlinedIcon />
                                <input className='px-3 bg-transparent  text-white'
                                    type='text' placeholder='Search 5000+ products' />
                            </div>
                        </div>

                        <div className='flex align-middle justify-between list-none px-9'>
                            <ul className='mx-50'>
                                <a href='#' className='px-3'>Stores</a>
                                <a href='#' className='px-3 '>Bulk Orders</a>
                            </ul>

                            <div id='pincode' className='flex justify-evenly text-white'>
                                <LocationOnIcon />
                                <input type='text' maxLength={6} placeholder="Enter pincode" className='border-none bg-transparent w-32  px-2' />
                            </div>
                            <div className='flex items-center px-2'>
                                <li className='px-3'><CallIcon /></li>

                                <li className='px-3'><FavoriteBorderIcon /></li>

                                <li className='px-3'><PersonIcon /></li>

                                <a href='#' className='px-3' ><ShoppingCartIcon /></a>

                                <a href='#' className='p-1 flex bg-white rounded-md' >
                                    <img src='#'></img>
                                    <span className=''><CurrencyRupeeOutlinedIcon /> 0</span>

                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="headerno-2" className='flex justify-end py-2 mx-2 '>
                    <div id="hov-mat" >
                        <a href="#" className='flex  mx-4 hover:underline'>Mattress</a>
                        <div id='drop-mat' className=' bg-white'>
                            <div>
                                <h4 >WakeFit Mattress</h4>
                                <a href='#'>Orthopedic Memory Foam Mattress</a>
                                <a href='#'>Elevate Ortho Pocket Spring Mattress</a>
                                <a href='#'>XpertGRID Mattress</a>
                                <a href='#'>7-ZOne Latex Mattress</a>
                                <a href='#'>Dual Comfort Mattress</a>
                                <a href='#'>DreamPod Medium Firm Mattress</a>
                                <a href='#'>Rollup Mattress</a>
                                <a href='#'>Baby Mattress</a>
                                <a href='#'>Flexagon Trifold Pro</a>
                            </div>
                            <div>
                                <h4>WakeFit PLus Mattress</h4>
                                <a href='#'>Latex Plus Mattress</a>
                                <a href='#'>Ortho Plus Mattress</a>
                                <a href='#'>Duo Plus Mattress</a>
                                <a href='#'>Ortho Plus ActiveCool Mattress</a>
                                <a href='#'>IcyBreeze ActiveCool HR Foam Mattress</a>
                            </div>
                        </div>
                    </div>
                    <a href="#" className='mx-4 hover:underline'>Bedroom</a>
                    <a href="#" className='mx-4 hover:underline'>Living</a>
                    <a href="#" className='mx-4 hover:underline'>Dining</a>
                    <a href="#" className='mx-4 hover:underline'>Study</a>
                    <a href="#" className='mx-4 hover:underline'>Kids</a>
                    <a href="#" className='mx-4 hover:underline'>Decor</a>
                    <a href="#" className='mx-4 hover:underline'>Kitchen</a>
                    <a href="#" className='mx-4 hover:underline'>Refer & Earn</a>
                    <a href="#" className='mx-4 hover:underline'>About</a>
                </div>
            </div>
        </>
    )
}

export default NavBar;