import Image from "next/image";
import heroImage from "@/public/hero-image.png";
import heroImage2 from "@/public/hero-image-2.png";
import bookText3 from "@/public/book-text-3.png";
import PayButton from "./PayButton";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className=" h-[92vh]">
      <div className="bg-[#18C0FF] h-full">
        <div>
          <div className="flex items-center justify-center lg:px-20 px-4 pt-48">
            <Image
              className="w-[37%] relative -rotate-12 top-[10rem] lg:block md:hidden hidden"
              src={heroImage}
              alt="hero image"
            />

            <Image
              className="lg:w-[50%] w-[100%]"
              src={bookText3}
              alt="book text"
            />

            <Image
              className="w-[37%] opacity- relative rotate-12 top-[10em] lg:block md:hidden hidden"
              src={heroImage2}
              alt="hero image"
            />
          </div>
        </div>
        <div className="flex justify-center relative lg:-top-6 md:-top-6 top-6">
          <Link href="/download-now">
            <button className="bg-gradient-to-r from-[#00ff87] via-green-5 to-[#60efff] text-gray-6 00 shadow-xl font-semibold text-xl rounded-md border-2 border-white py-4 px-12 hover:bg-gray-100 transition-all ">
              Download Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
