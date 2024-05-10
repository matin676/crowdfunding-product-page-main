import React from "react";

export default function Reward() {
  return (
    <>
      <div className="flex items-center justify-center pt-8">
        <div className="flex flex-col items-center justify-center border border-gray-300 rounded-lg relative bg-white w-[550] p-8">
          <div className="flex items-center justify-between w-full max-md:flex-col max-md:items-start">
            <p className="font-bold text-xl">Bamboo Stand</p>
            <p className="text-moderateCyan font-semibold">
              Pledge $25 or more
            </p>
          </div>
          <div className="pt-6">
            <p className="text-darkGray text-justify">
              You get an ergonomic stand made of natural bamboo. You've helped
              us launch our promotional campaign, and you’ll be added to a
              special Backer member list.
            </p>
          </div>
          <div className="flex items-center justify-between w-full pt-6 max-md:flex-col max-md:items-start">
            <div className="flex">
              <p className="font-bold text-3xl pr-2">101</p>
              <p className="text-darkGray text-lg font-semibold">left</p>
            </div>
            <a
              href="/"
              className="bg-moderateCyan text-white p-[12px] pl-6 pr-6 rounded-full text-base relative hover:bg-darkCyan transition-all duration-500 max-md:mt-4"
            >
              Select Reward
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-8">
        <div className="flex flex-col items-center justify-center border border-gray-300 rounded-lg relative bg-white w-[550] p-8">
          <div className="flex items-center justify-between w-full max-md:flex-col max-md:items-start">
            <p className="font-bold text-xl">Black Edition Stand</p>
            <p className="text-moderateCyan font-semibold">
              Pledge $75 or more
            </p>
          </div>
          <div className="pt-6">
            <p className="text-darkGray text-justify">
              You get a Black Special Edition computer stand and a personal
              thank you. You’ll be added to our Backer member list. Shipping is
              included.
            </p>
          </div>
          <div className="flex items-center justify-between w-full pt-6 max-md:flex-col max-md:items-start">
            <div className="flex">
              <p className="font-bold text-3xl pr-2">64</p>
              <p className="text-darkGray text-lg font-semibold">left</p>
            </div>
            <a
              href="/"
              className="bg-moderateCyan text-white p-[12px] pl-6 pr-6 rounded-full text-base relative hover:bg-darkCyan transition-all duration-500 max-md:mt-4"
            >
              Select Reward
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-8">
        <div className="flex flex-col items-center justify-center border border-gray-200 rounded-lg relative bg-white w-[550] p-8">
          <div className="flex items-center justify-between w-full max-md:flex-col max-md:items-start">
            <p className="font-bold opacity-50 text-xl">
              Mahogany Special Edition
            </p>
            <p className="text-moderateCyan opacity-50 font-semibold">
              Pledge $200 or more
            </p>
          </div>
          <div className="pt-6">
            <p className="text-darkGray text-justify opacity-50">
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You’ll be added to our Backer member list.
              Shipping is included.
            </p>
          </div>
          <div className="flex items-center justify-between w-full pt-6 opacity-50 max-md:flex-col max-md:items-start">
            <div className="flex">
              <p className="font-bold text-3xl pr-2">0</p>
              <p className="text-darkGray text-lg font-semibold">left</p>
            </div>
            <a
              href="/"
              className="bg-darkGray text-white p-[12px] pl-8 pr-8 rounded-full text-base relative transition-all duration-500 cursor-not-allowed max-md:mt-4"
            >
              Out of Stock
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
