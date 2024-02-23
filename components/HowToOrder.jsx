import React from "react";
import { Button } from "./ui/button";

const HowToOrder = () => {
  return (
    <>
      <section className="bg-[#D7FAFF]">
        <div className="container mx-auto">
          <div className="text-5xl font-medium text-center pt-16 text-[#3C3C3C] leading-tight">
            কিভাবে অর্ডার করবেন?
          </div>
          <div className="flex justify-center mt-10">
          {/* <iframe className="rounded-2xl" width="1120" height="630" src="https://www.youtube.com/embed/IZsQqarWXtY?si=_ovMh_gwGZWXNpg0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          <iframe className="rounded-2xl" src="https://www.youtube.com/embed/IZsQqarWXtY?rel=0&color=white" width="1120" height="630" title="I Built a $1M AI App [No Code]"  allowFullScreen></iframe>
          </div>

          <div className="text-center mt-10">
            <Button size="lg">Read more</Button>
          </div>
        </div>
        <br /><br /><br /><br />
      </section>
    </>
  );
};

export default HowToOrder;
