import React from "react";

export default function Dashboard() {
  return (
    <div className="flex items-center justify-center mt-8 mb-8">
      <div className="flex flex-col items-center justify-center border border-gray-200 rounded-lg relative bottom-16 bg-white w-656 max-md:w-[350px]">
        <div className="flex items-center justify-evenly w-full pt-10 max-md:justify-center max-md:flex-col">
          <div className="flex flex-col">
            <p className="font-bold text-3xl">$89,914</p>
            <p className="text-darkGray">of $100,000 backed</p>
          </div>
          <div className="flex w-[2px] h-16 bg-gray-200 rounded-full max-md:w-16 max-md:h-[2px] max-md:mt-4 max-md:mb-4"></div>
          <div className="flex flex-col">
            <p className="font-bold text-3xl">5,007</p>
            <p className="text-darkGray">total backers</p>
          </div>
          <div className="flex w-[2px] h-16 bg-gray-200 rounded-full max-md:w-16 max-md:h-[2px] max-md:mt-4 max-md:mb-4"></div>
          <div className="flex flex-col">
            <p className="font-bold text-3xl">56</p>
            <p className="text-darkGray">days left</p>
          </div>
        </div>
        <div className="flex w-[550px] m-8 h-3 bg-gray-100 rounded-full max-md:w-275 max-sm:w-225">
          <div className="absolute w-375 h-3 bg-moderateCyan rounded-full max-md:w-225 max-sm:w-190"></div>
        </div>
      </div>
    </div>
  );
}
