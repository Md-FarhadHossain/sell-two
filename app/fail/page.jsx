"use client";
import React, { useEffect, useState } from "react";
import paymentfail from "../../public/payment-fail.png";
import paymentfail2 from "../../public/payment-fail-2.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


const FailPage = () => {
  // const pathname = usePathname();
  // console.log(pathname)\
  


  // if(window.location.search === "?message=Insufficient+Balance") {
    
  // }
  // const [message, setMessage] = useState("");

  //   useEffect(() => {
  //       // const message = window.location.search === "?message=Insufficient+Balance" || "?message=Insufficient Balance" ? " : "";

  //       if(window.location.search === "?message=Insufficient+Balance" || "?message=Insufficient Balance") {
  //          setMessage("আপনার একাউন্টট এ পর্যাপ্ত পরিমান টাকা নেই!")
  //       } else {
  //         setMessage("আপনার পেমেন্ট টি সফল হয় নি!")
  //       }

  //       setMessage(message);
  //   }, []);




  const searchParams = useSearchParams()
  console.log(searchParams.get("message"))

  useEffect(() => {
    if (localStorage.getItem("email") || localStorage.getItem("number")) {
      localStorage.removeItem("email");
      localStorage.removeItem("number");
    } else {
      console.log("not found");
    }
  }, []); // Empty dependency array: Execute once on component mount

  return (
    <>
      <section>
        <div className="h-[100dvh] bg-red-200 flex items-center justify-center px-4">
          <div className="border shadow-lg p-12 bg-white rounded-lg">
            <div>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center pb-4">
                  <Image
                    className="w-[90%]"
                    src={paymentfail2}
                    alt="payment fail image"
                  />
                </div>
              </div>
              <div className="text-center text-3xl text-red-500 font-semibold py-3">
              

              {searchParams.get("message") === "Insufficient Balance" ? <>আপনার একাউন্টট এ পর্যাপ্ত পরিমান টাকা নেই!</> : <>আপনার পেমেন্ট টি সফল হয় নি!</>}
              </div>
            </div>
            <h1 className="text-4xl text-green-600 border-b pb-3 pt-4">
            আবার পেমেন্ট করতে নিচের বাটন এ ক্লিক করুন
            </h1>
            <div className="flex justify-center pt-4">
              
             <Link href="/download-now">
             <button
                className="border px-8 py-4 rounded-lg text-lg  bg-green-500 text-white font-semibold hover:bg-green-400"
                // onClick={handleSubmit}
              >
                ডাউনলোড করুন
              </button>
             </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FailPage;
