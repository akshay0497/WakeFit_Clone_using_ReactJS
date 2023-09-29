import React  from "react";
import {Data} from '../../../Data/ShopbyCategories_Data'

const ShopByCategories = () => {
  
  return (
    <>
      <div className="mx-14 ">
        <center>
          <h1 className="mt-5 mb-3 text-center text-3xl font-semibold font-serif leading-loose">
            Shop By Categories
          </h1>
        </center>
          {/* {listingComponents} */}
          <div className="grid lg:grid-cols-6 md:grid-cols-3  gap-4 my-5 mx-5">
          {Data.map((item) => (
            <div>
              <div key={item.id} >
                <img src={item.src} alt={item.description} className="hover:drop-shadow-xl !mx-auto hover:font-semibold w-40 rounded-md hover:border-2"/>
                <h2 className="text-center my-5 hover:font-semibold">{item.description}</h2>
              </div>
            </div>
          ))}
          </div>
      </div>
      <div className="h-3 bg-gray-300"></div>
    </>
  );
};

export default ShopByCategories;