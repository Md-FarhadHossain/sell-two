"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import PaybKashBtn from "./PaybKashBtn";

import axios from "axios";
import { useContext } from "react";
import { UserContext } from "@/app/context/AuthContext";

const DownloadNowInput = () => {
  // const { signup } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // On submit function

  const onSubmit = async (data) => {
    // Sign up with email and password
    const userEmail = {
      email: data.email,
    };

   
   localStorage.setItem('email', data.email);
   localStorage.setItem('number', data.number);





    // await signup(data.email, data.number)
    //   .then((result) => {
    //     console.log(result);
    //     console.log("Signup Successfully!");
    //     navigate(from, { replace: true });
    //   })
    //   .catch((err) => console.log(err));

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/bkash/payment/create",
        { amount: 1, orderId: 1 },
        { withCredentials: true }
      );

      window.location.href = data.bkashURL;
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/bkash/payment/create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userEmail),
        }
      );

      if (response.ok) {
        const { paymentID, redirectUrl } = await response.json();
        // window.location.href = redirectUrl; // Redirect to Bkash
      } else {
        // Handle error from backend
      }
    } catch (error) {
      console.error("Error initiating payment:", error);
    }

    console.log(data, data.email);
  };

  return (
    <div>
      <div className="lg:px-16 md:px-12 px-0 py-16">
        <div className="text-4xl mb-8">Give me your details.</div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <Label className="text-lg font-medium text-gray-700" htmlFor="name">
              আপনার নাম লিখুন <span className="text-red-500">*</span>
            </Label>
            <Input
              className="h-14 text-base px-4"
              type="text"
              id="name"
              placeholder="Name"
              {...register("name", {
                required: true,
              })}
            />
            <div className="pt-1">
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
          </div>

          <div>
            <Label
              className="text-lg font-medium text-gray-700"
              htmlFor="email"
            >
              আপনার ই-মেইল এড্রেস লিখুন<span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              // type="email"
              className="h-14 text-base px-4"
              placeholder="Email"
              {...register("email", {
                required: "Email Address is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
            <div className="pt-1">
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div>
            <Label
              className="text-lg font-medium text-gray-700"
              htmlFor="number"
            >
              আপনার নম্বর লিখুন <span className="text-red-500">*</span>
            </Label>
            <Input
              id="number"
              className="h-14 text-base px-4"
              placeholder="Number"
              type="number"
              {...register("number", {
                required: (
                  <span>
                    নম্বর কমপক্ষে <span className="font-bold">১১</span> টি অক্ষর
                    থাকতে হবে
                  </span>
                ),
                minLength: {
                  value: 11,
                },
              })}
            />
            <div className="pt-1">
              {errors.number && (
                <p className="text-red-500">{errors.number.message}</p>
              )}
            </div>
          </div>
          <PaybKashBtn />
        </form>
      </div>
    </div>
  );
};
export default DownloadNowInput;
