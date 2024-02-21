"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import PaybKashBtn from "./PaybKashBtn";

import axios from "axios";

const DownloadNowInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
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
    console.log(data);
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
