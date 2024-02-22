"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import PaybKashBtn from "./PaybKashBtn";

import axios from "axios";
import { useContext } from "react";
import { UserContext } from "@/app/context/AuthContext";

const DownloadNowInput = () => {
  const { signup, updateUser, googleSignin, signout } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    // Sign up with email and password
    await signup(data.email, data.number)
      .then((result) => {
        console.log(result);
        console.log("Signup Successfully!");
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));

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
    console.log(data, data.email);
  };
  // const onSubmit = async (data) => {
  //   try {
  //     const { data } = await axios.post(
  //       "http://localhost:5000/api/bkash/payment/create",
  //       { amount: 1, orderId: 1 },
  //       { withCredentials: true }
  //     );

  //     // Sign up with email and password
  //     await signup(data.email, "4354dfpassword")
  //       .then((result) => {
  //         console.log(result);
  //         console.log("Signup Successfully!");
  //         navigate(from, { replace: true });
  //       })
  //       .catch((err) => console.log(err));

  //     window.location.href = data.bkashURL;
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error.response.data);
  //   }
  //   console.log(data, data.email);
  // };

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
              id="name"
              placeholder="Name"
              {...register("name", { required: true })}
            />
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
              className="h-14 text-base px-4"
              placeholder="Email"
              {...register("email", { required: true })}
            />
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
              minlength="11"
              {...register("number", { required: true })}
            />
          </div>
          <PaybKashBtn />
        </form>
      </div>
    </div>
  );
};
export default DownloadNowInput;
