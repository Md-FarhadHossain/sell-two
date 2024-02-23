import React from "react";
import PayButton from "./PayButton";
import Link from "next/link";

const DownloadNowHome = () => {
  return (
    <section>
      <div className="text-center bg-slate-100 py-14">
        <Link href="/download-now">
          <button className="bg-gradient-to-r from-[#00ff87] via-green-5 to-[#60efff] text-gray-6 00 shadow-xl font-semibold text-xl rounded-md border-2 border-white py-4 px-12 hover:bg-gray-100 transition-all ">
            Download Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default DownloadNowHome;
