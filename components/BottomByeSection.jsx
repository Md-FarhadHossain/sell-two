import { Button } from "./ui/button";
import rocket from "../public/rocket.webp";
import bookCover from "../public/book-cover.png";
import bookCover2 from "../public/boo-cover-2.png";
import Image from "next/image";
import Link from "next/link";

const BottomByeSection = () => {
  return (
    <section className="fixed border-t z-50 bottom-0 bg-white w-full shadow-[rgba(0,0,15,0.12)_0px_0px_20px_4px]">
      <div className="flex items-center lg:justify-between md:justify-between justify-center py-4 lg:container md:container w-full mx-auto">
        <div className="gap-3 lg:flex md:flex hidden items-center ">
          <div>
            <Image
              className="w-[50px] object-contain"
              src={bookCover2}
              alt="bookCover"
            />
          </div>
          <div className="text-xl font-semibold">
            একজন মুসলমানের জীবনে ২৪ ঘণ্টা
          </div>
        </div>
        <div className="flex items-center w-full lg:w-auto md:w-auto lg:px-0 md:px-0 px-4">
          <div className="lg:flex md:flex hidden gap-2">
            <div className="text-4xl font-bold text-[#de1d59]">৳১৬০</div>
            <div className="line-through text-3xl font-semibold text-[#a8a8a8] mr-3">
              ৳৩২০
            </div>
          </div>
          <div className="w-full">
            <Link href="download-now">
              <button className="bg-yellow-300 hover:bg-gray-950 hover:text-white hover:border-blue-950 transition-all w-full justify-center text-black text-[17px] border border-yellow-500 font-semibold flex px-16 py-3 rounded-xl text-xl items-center">
                <span>
                  এখনই কিনুন <span className="font-bold">৳১৬০</span>
                </span>
                <Image className="w-[22px] ml-2" src={rocket} alt="rocket" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BottomByeSection;
