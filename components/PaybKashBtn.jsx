"use client";
import { Button } from "./ui/button";
import Image from "next/image";


import bKashLogo2 from "@/public/BKash-Icon2-Logo.wine.svg";



const PaybKashBtn = () => {

 
  return (
    <div>
      <Button      
        size="lg"
        className="w-full h-14 rounded-lg bg-[#DF146E] border text-lg "
        type="submit"
      >
        <div className="relative left-2"> Pay with bKash</div>
        <div className="relative -left-2">
          <Image className="w-16" src={bKashLogo2} alt="bKashLogo" />
        </div>
      </Button>
    </div>
  );
};
export default PaybKashBtn;
