import * as React from 'react'
import './App.css';

import Header from './Components/Header';
import NavBar from './Components/Navbar';
import ImageSlider from './Components/Image_slider';
import ShopByCategories from './Components/section/ShopByCategories';
import ShopByRooms from './Components/section/ShopByRooms';
import {AdsSection} from './Components/AdsSection';
import AdsBanner from './Components/Banner';
import DiscountPartner from './Components/Discount';
import RealHook from './Components/RealHook';
import Contents from './Components/Seo-content';
import TopSellingProducts from './Components/TopSellingProducts';
// import CallbackHellFunc from './Components/RealHook/callback';



export default function App() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Navbar  with left side drawer open*/}
      <NavBar />

      {/* ImageSlider */}
      <ImageSlider />

      {/* Ads Section */}
      <AdsSection/>

      {/* Ads Banner */}
      <AdsBanner/>

      {/* image section  */}
      <ShopByCategories/>
      
      {/* Discount Partner */}
      <DiscountPartner/>

      {/* shopsection */}
      <ShopByRooms/>

      {/* Top Selling Products */}
      <TopSellingProducts/>

      {/* SEO-Contents */}
      <Contents/>

      {/* callbackhell */}
      {/* <CallbackHellFunc/> */}
      
    </>
  );
}

