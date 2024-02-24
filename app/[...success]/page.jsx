"use client";
import Paymentdata from "@/components/Paymentdata";

import { usePathname } from "next/navigation";

const SuccessPage = () => {
  const pathname = usePathname();
  const modifiedPathname = pathname.slice(9);

  console.log(modifiedPathname);

  return (
    <div>
      SuccessPage
      <Paymentdata modifiedPathname={modifiedPathname} />
    </div>
  );
};
export default SuccessPage;
