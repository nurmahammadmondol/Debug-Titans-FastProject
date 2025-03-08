import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 h-full lg:min-h-screen bg-[#135276] md:items-center p-5 md:px-10">
      {/* Text Section */}
      <div className="space-y-5 lg:space-y-7 text-white order-2 lg:order-1">
        <h5 className="text-lg font-bold">WELCOME TO</h5>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold">
          LEARN<span className="text-[#ed626a]">I</span>CA
        </h1>
        <p>
          Join thousands of learners on their journey to mastering new skills
          and achieving their goals. Explore courses designed by experts and
          start learning today!
        </p>

        <button className="btn text-white text-lg font-bold bg-[#f87171]">
          Explore Courses
        </button>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-[300px] md:h-[500px]  order-1 lg:order-2">
        <Image
          src="/assets/images/courseui.webp"
          alt="Logo"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
