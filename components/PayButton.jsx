"use client";
import axios from "axios";

const PayButton = () => {
  const pay = async () => {
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
  };

  return (
    <div>
      {/* <Link href="/download">
        <Button>Download</Button>
      </Link> */}
      <button
        onClick={pay}
        className="bg-gradient-to-r from-[#00ff87] via-green-5 to-[#60efff] text-gray-6 00 shadow-xl font-semibold text-xl rounded-md border-2 border-white py-4 px-12 hover:bg-gray-100 transition-all "
      >
        Download Now
      </button>
    </div>
  );
};

export default PayButton;
