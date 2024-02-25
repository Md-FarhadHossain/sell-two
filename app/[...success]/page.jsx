"use client";
import Paymentdata from "@/components/Paymentdata";

import { usePathname } from "next/navigation";




const SuccessPage = () => {

  const pathname = usePathname();
  const modifiedPathname = pathname.slice(9);


  console.log(pathname.includes("success"))



  // console.log(data);

  return (
    <div>
      SuccessPage
     
    </div>
  );
};
export default SuccessPage;
