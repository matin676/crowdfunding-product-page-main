import React from "react";
import Reward from "./Reward";

export default function About() {
  return (
    <div className="flex items-center justify-center mt-8 mb-8">
      <div className="flex flex-col items-center justify-center border border-gray-200 rounded-lg relative bottom-16 bg-white w-656 max-md:w-[350px]">
        <div className="flex items-center justify-start w-full pt-6">
          <div className="flex flex-col p-8">
            <p className="font-bold text-xl pb-8">About this project</p>
            <p className="text-darkGray pb-6 text-justify">
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
              platform that elevates your screen to a more comfortable viewing
              height. Placing your monitor at eye level has the potential to
              improve your posture and make you more comfortable while at work,
              helping you stay focused on the task at hand.
            </p>
            <p className="text-darkGray text-justify">
              Featuring artisan craftsmanship, the simplicity of design creates
              extra desk space below your computer to allow notepads, pens, and
              USB sticks to be stored under the stand.
            </p>
            <div>
              <Reward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
