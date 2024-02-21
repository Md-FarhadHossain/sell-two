import Image from "next/image";

import DownloadNowInput from "@/components/DownloadNowInput";
import heroimage from "@/public/hero-image-1.png"

const DownloadPage = () => {
  return (
    <section>
      <div className="flex lg:justify-between md:justify-start justify-start md:flex-col lg:flex-row flex-col container mx-auto h-[100dvh]">
        {/* 1 */}
        <div className="flex justify-center items-center flex-col">
          <div className="flex lg:justify-start md:justify-center justify-center">
            <Image className="lg:w-full md:w-[50%] w-[50%]" src={heroimage} alt="heroimage" />
          </div>
          <div className="text-5xl font-bold text-gray-800">হাদিয়া ৳১৬০</div>
        </div>

        {/* 2 */}
        <div className="shadow-lg lg:w-1/2 md:w-full p-4">
          <DownloadNowInput />
        </div>
      </div>
    </section>
  );
};
export default DownloadPage;
