import Image from "next/image";
import boyPic from "@/public/boy-pic.jpg";
import { Gem, Heart, Star } from "lucide-react";
import { Button } from "./ui/button";

const WhySection = () => {
  const desctionData = [
    {
      id: 1,
      icon: <Gem />,
      iconBg: "#FFDC62",
      bgColor: "#FFFAEA",
      description:
        "ইসলামিক অনুশীলন সম্পর্কে আপনার উপলব্ধি আরও গভীর করুন: বইটি মুসলমানদের জন্য প্রতিদিনের অনুশীলন এবং আচার-অনুষ্ঠানগুলির একটি বিশদ এবং ব্যাপক ওভারভিউ প্রদান করে, যার মধ্যে রয়েছে প্রার্থনা, উপবাস, দাতব্য এবং নৈতিক আচরণ।",
    },
    {
      id: 2,
      icon: <Star />,
      iconBg: "#78C6FE",
      bgColor: "#E7F5FF",
      description:
        "ইসলামিক অনুশীলন সম্পর্কে আপনার উপলব্ধি আরও গভীর করুন: বইটি মুসলমানদের জন্য প্রতিদিনের অনুশীলন এবং আচার-অনুষ্ঠানগুলির একটি বিশদ এবং ব্যাপক ওভারভিউ প্রদান করে, যার মধ্যে রয়েছে প্রার্থনা, উপবাস, দাতব্য এবং নৈতিক আচরণ।",
    },
    {
      id: 3,
      icon: <Heart />,
      iconBg: "#70FEBA",
      bgColor: "#DEFFEF",
      description:
        "ইসলামিক অনুশীলন সম্পর্কে আপনার উপলব্ধি আরও গভীর করুন: বইটি মুসলমানদের জন্য প্রতিদিনের অনুশীলন এবং আচার-অনুষ্ঠানগুলির একটি বিশদ এবং ব্যাপক ওভারভিউ প্রদান করে, যার মধ্যে রয়েছে প্রার্থনা, উপবাস, দাতব্য এবং নৈতিক আচরণ।",
    },
  ];

  return (
    <>
      <section>
        <div className="container mx-auto">
          {/* Top part */}
          <div className="text-5xl font-medium text-center pt-16 text-[#3C3C3C] leading-tight">
            মুসলিম হিসেবে কেন এই কিতাব <br /> আপনার সংগ্রহে থাকা উচিত
          </div>


          {/* Bottom */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between gap-4 pt-8 ">
            {desctionData.map((data) => (
              <div
                style={{ backgroundColor: data.bgColor }}
                className="p-6 rounded-lg shadow-lg border"
                key={data.id}
              >
                <div
                  style={{ backgroundColor: data.iconBg }}
                  className="w-fit p-4 rounded-lg bg-blue-100 mb-4 flex items-center justify-center"
                >
                  {data.icon}
                </div>
                <div className="text-xl leading-relaxed">
                  {data.description}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg">Read more</Button>
          </div>
        </div>

       
      </section>
    </>
  );
};

export default WhySection;
