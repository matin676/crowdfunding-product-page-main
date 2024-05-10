import React, { useState } from "react";

import check from "../assets/images/icon-check.svg";

export default function Completed() {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      className={`flex items-center justify-center flex-wrap ${
        open ? "flex" : "hidden"
      }`}
    >
      <div className="flex flex-col items-center justify-center relative w-460 max-md:w-340">
        <div className="flex items-center justify-center relative mt-6 mb-4">
          <img src={check} alt="check logo" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-2xl">Thanks for your support!</p>
          <p className="text-darkGray text-center p-4">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed. Got it!
          </p>
        </div>
        <div className="flex items-center mt-6 mb-6">
          <span
            onClick={handleClose}
            className="bg-moderateCyan text-white p-[15px] pl-8 pr-8 rounded-full text-lg relative hover:bg-darkCyan cursor-pointer transition-all duration-500"
          >
            Got it!
          </span>
        </div>
      </div>
    </div>
  );
}
