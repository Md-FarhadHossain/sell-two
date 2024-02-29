"use client";
import Paymentdata from "@/components/Paymentdata";

import { redirect, usePathname, useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/AuthContext";
import axios from "axios";
import { Button } from "@/components/ui/button";
import Link from "next/link";





const SuccessPage = () => {
  const { signup } = useContext(UserContext);
  
  const router = useRouter();
  const pathname = usePathname();
  const modifiedPathname = pathname.slice(9);

  const userEmail = localStorage.getItem("email")
  const userNumber = localStorage.getItem("number")



  // console.log(pathname.includes("success"))

  if (userEmail) {

    console.log(true)
  } else {
    console.log(false)
  }



  const handleSubmit = async () => { // Make handleSubmit async
    if (userEmail && userNumber) {
      try {
        await signup(userEmail, userNumber); // Wait for signup
        console.log("Signup Successfully!");
  
        const result = await axios.post("http://localhost:5000/user-payment-details", {
          userEmail: userEmail,
          userNumber: userNumber,
          paymentId: modifiedPathname,
        });
  
        if (result.status === 200) {
          localStorage.removeItem(userEmail);
          localStorage.removeItem(userNumber);
          router.push("/dashboard"); // Redirect after all operations succeed
        } 
  
      } catch (err) {
        console.log(err);  // Handle sign up or axios errors
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
    <div className="container mx-auto">
      SuccessPage

      <h1 className="text-4xl">ডাউনলোড করার জন্য নিচের বাটন এ ক্লিক করুন</h1>

      <Button onClick={handleSubmit}>Click me</Button>
     
    </div>
  );
};
export default SuccessPage;
