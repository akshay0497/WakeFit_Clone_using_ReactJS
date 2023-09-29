import React from "react";
import MoodRoundedIcon from "@mui/icons-material/MoodRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";

const AdsBanner = () => {
  return (
    <>
      <div className=" bg-gray-300"></div>
      <div className="flex items-center justify-around mx-28 py-5 font-medium">
        <div className="bg-slate-300 h-10 w-10 rounded-full">
          <MoodRoundedIcon className="m-2 text-violet-600" />
        </div>
        <div className="text-[#926ba8]">Million+ Happy Customer</div>

        <div className="bg-slate-300  h-10 w-10 rounded-full">
          <LocalShippingRoundedIcon className="m-2 text-violet-600" />
        </div>
        <div className="text-[#926ba8]">Free Shipping</div>

        <div className="bg-slate-300  h-10 w-10 rounded-full">
          <HandymanRoundedIcon className="m-2 text-violet-600" />
        </div>
        <div className="text-[#926ba8]">Free Installation</div>

        <div className="bg-slate-300  h-10 w-10 rounded-full">
          <CreditCardRoundedIcon className="m-2 text-violet-600" />
        </div>
        <div className="text-[#926ba8]">No Cost EMIs</div>
      </div>
      <div className="h-3 bg-gray-300"></div>
    </>
  );
};

export default AdsBanner;
