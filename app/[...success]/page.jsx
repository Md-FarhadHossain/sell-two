"use client";
import Paymentdata from "@/components/Paymentdata";

import { redirect, usePathname, useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/AuthContext";
import axios from "axios";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

const SuccessPage = () => {
  const { signup } = useContext(UserContext);

  const router = useRouter();
  const pathname = usePathname();
  const modifiedPathname = pathname.slice(9);

  const userEmail = localStorage.getItem("email");
  const userNumber = localStorage.getItem("number");


  

  // console.log(pathname.includes("success"))

  if (userEmail) {
    console.log(true);
  } else {
    console.log(false);
  }

  const handleSubmit = async () => {
    // Make handleSubmit async
    if (userEmail && userNumber) {
      try {
        await signup(userEmail, userNumber); // Wait for signup
        console.log("Signup Successfully!");

        const result = await axios.post(
          "http://localhost:5000/user-payment-details",
          {
            userEmail: userEmail,
            userNumber: userNumber,
            paymentId: modifiedPathname,
          }
        );

        localStorage.removeItem("email");
        localStorage.removeItem("number");
        router.push("/dashboard"); // Redirect after all operations succeed
      } catch (err) {
        console.log(err);
        if (err) {
          localStorage.removeItem(userEmail);
          localStorage.removeItem(userNumber);
          router.push("/");
        } // Handle sign up or axios errors
      }
    } else {
      router.push("/");
    }
  };

  // useEffect(() => {
  // Execute the logic only if on the 'success' page
  //  if (pathname.includes("success") && localStorage.key("email")) {

  // }
  // }, []);

  return (
    <div className="h-[100dvh] bg-blue-200 flex items-center justify-center px-4">
      <div className="border shadow-lg p-12 rounded-lg bg-white">
        <div>
          <div className="flex items-center justify-center">
          <div className="text-white bg-gradient-to-r from-[#188fff] bg-[#18C0FF] w-24 h-24 rounded-full flex items-center justify-center text-8xl">
            <Check size="5rem" />
          </div>
          </div>
          <div className="text-center text-3xl font-semibold py-3">জাযাকাল্লাহ ! </div>
          <p className="text-center pb-4">
            আপনার অর্ডার আমাদের নিকট জমা হয়েছে ।<br />
            খুব শীঘ্রই ফোন কলের মাধ্যমে আপনার সাথে যোগাযোগ করা হবে ।{" "}
          </p>
        </div>
      <h1 className="text-4xl border-b pb-3">ডাউনলোড করার জন্য নিচের বাটন এ ক্লিক করুন</h1>
     <div className="flex justify-center pt-4" > <button className="border px-8 py-4 rounded-lg text-lg  bg-blue-500 text-white font-semibold hover:bg-blue-400" onClick={handleSubmit}>ডাউনলোড করুন</button></div>
      </div>

    </div>
  );
};
export default SuccessPage;
