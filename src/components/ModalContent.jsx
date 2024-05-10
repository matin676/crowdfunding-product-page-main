import React, { useState } from "react";
import { Modal, Box } from "@material-ui/core";

import checked from "../assets/images/icon-check.svg";
import Completed from "./Completed";

export default function ModalContent() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const [imgToggle1, setImgToggle1] = useState(false);
  const [imgToggle2, setImgToggle2] = useState(false);
  const [imgToggle3, setImgToggle3] = useState(false);

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const toggleChecked1 = () => {
    setIsChecked1(!isChecked1);
    setImgToggle1(!imgToggle1);
  };

  const toggleChecked2 = () => {
    setIsChecked2(!isChecked2);
    setImgToggle2(!imgToggle2);
  };

  const toggleChecked3 = () => {
    setIsChecked3(!isChecked3);
    setImgToggle3(!imgToggle3);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="flex flex-col items-center justify-center border border-gray-200 rounded-lg relative bottom-16 bg-white mb-4">
        <div className="flex flex-col items-center justify-evenly w-full pt-4 pb-4">
          <div className="flex items-center justify-start w-full pl-4 cursor-pointer hover:text-moderateCyan">
            <p
              onClick={toggleChecked1}
              className="border border-darkGray rounded-full w-4 h-4 hover:border-moderateCyan"
            >
              {imgToggle1 && <img src={checked} alt="checked" />}
            </p>
            <p className="font-bold text-lg ml-6">Pledge with no reward</p>
          </div>
          <div className="p-4 pl-14 text-sm text-gray-500">
            Choose to support us without a reward if you simply believe in our
            project. As a backer, you will be signed up to receive product
            updates via email.
          </div>
        </div>
        {isChecked1 && (
          <div className="flex flex-col w-full pt-4 pb-4">
            <p className="w-full bg-gray-200 h-[0.10rem] mb-4"></p>
            <div className="flex items-center justify-end max-md:flex-col">
              <div className="p-0 relative right-48 text-sm text-gray-500 max-md:right-0 max-md:pb-4">
                Enter your pledge
              </div>
              <div className="flex items-center justify-center mr-4">
                <a
                  href="/"
                  className="border border-moderateCyan p-2 pl-6 pr-6 rounded-full mr-4"
                >
                  <span className="text-gray-400">$</span> <span>0</span>{" "}
                  <span className="text-moderateCyan">|</span>
                </a>
                <p
                  onClick={handleOpen}
                  className="bg-moderateCyan hover:bg-darkCyan text-white p-2 pl-6 pr-6 rounded-full cursor-pointer"
                >
                  continue
                </p>
                <Modal
                  open={open}
                  onClose={handleClose}
                  className="m-auto flex items-center justify-center w-460 max-md:w-340"
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box className="outline-none bg-white rounded-lg border border-gray-200 shadow-lg">
                    <Completed />
                  </Box>
                </Modal>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-center border border-gray-200 rounded-lg relative bottom-16 bg-white mb-4 ">
        <div className="flex flex-col items-center justify-evenly w-full pt-4 pb-4 max-md:pb-8">
          <div className="flex items-center justify-start w-full pl-4 cursor-pointer">
            <p
              onClick={toggleChecked2}
              className="border border-darkGray rounded-full w-4 h-4 cursor-pointer hover:border-moderateCyan"
            >
              {imgToggle2 && <img src={checked} alt="checked" />}
            </p>
            <div className="flex max-md:flex-col">
              <p className="font-bold text-lg ml-6 hover:text-moderateCyan">
                Bamboo Stand
              </p>
              <p className="font-semibold text-moderateCyan text-base ml-6">
                Pledge $25 or more
              </p>
              <p className="font-bold text-lg relative left-40 max-md:top-40 max-md:left-7">
                101{" "}
                <span className="font-semibold text-base text-gray-400">
                  left
                </span>
              </p>
            </div>
          </div>
          <div className="p-4 pl-14 text-sm text-gray-500">
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </div>
        </div>
        {isChecked2 && (
          <div className="flex flex-col w-full pt-4 pb-4">
            <p className="w-full bg-gray-200 h-[0.10rem] mb-4"></p>
            <div className="flex items-center justify-end max-md:flex-col">
              <div className="p-0 relative right-48 text-sm text-gray-500 max-md:right-0 max-md:pb-4">
                Enter your pledge
              </div>
              <div className="flex items-center justify-center mr-4">
                <a
                  href="/"
                  className="border border-moderateCyan p-2 pl-6 pr-6 rounded-full mr-4"
                >
                  <span className="text-gray-400">$</span> <span>25</span>{" "}
                  <span className="text-moderateCyan">|</span>
                </a>
                <p
                  onClick={handleOpen}
                  className="bg-moderateCyan hover:bg-darkCyan text-white p-2 pl-6 pr-6 rounded-full cursor-pointer"
                >
                  continue
                </p>
                <Modal
                  open={open}
                  onClose={handleClose}
                  className="m-auto flex items-center justify-center w-460"
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box className="outline-none bg-white rounded-lg border border-gray-200 shadow-lg">
                    <Completed />
                  </Box>
                </Modal>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-center border border-gray-200 rounded-lg relative bottom-16 bg-white mb-4">
        <div className="flex flex-col items-center justify-evenly w-full pt-4 pb-4 max-md:pb-8">
          <div className="flex items-center justify-start w-full pl-4 cursor-pointer">
            <p
              onClick={toggleChecked3}
              className="border border-darkGray rounded-full w-4 h-4 hover:border-moderateCyan"
            >
              {imgToggle3 && <img src={checked} alt="checked" />}
            </p>
            <div className="flex max-md:flex-col">
              <p className="font-bold text-lg ml-6 hover:text-moderateCyan">
                Black Edition Stand
              </p>
              <p className="font-semibold text-moderateCyan text-base ml-6">
                Pledge $75 or more
              </p>
              <p className="font-bold text-lg relative left-32 max-md:top-40 max-md:left-7">
                64{" "}
                <span className="font-semibold text-base text-gray-400">
                  left
                </span>
              </p>
            </div>
          </div>
          <div className="p-4 pl-14 text-sm text-gray-500">
            You get a Black Special Edition computer stand and a personal thank
            you. You’ll be added to our Backer member list. Shipping is
            included.
          </div>
        </div>
        {isChecked3 && (
          <div className="flex flex-col w-full pt-4 pb-4">
            <p className="w-full bg-gray-200 h-[0.10rem] mb-4"></p>
            <div className="flex items-center justify-end max-md:flex-col">
              <div className="p-0 relative right-48 text-sm text-gray-500 max-md:right-0 max-md:pb-4">
                Enter your pledge
              </div>
              <div className="flex items-center justify-center mr-4">
                <a
                  href="/"
                  className="border border-moderateCyan p-2 pl-6 pr-6 rounded-full mr-4"
                >
                  <span className="text-gray-400">$</span> <span>75</span>{" "}
                  <span className="text-moderateCyan">|</span>
                </a>
                <p
                  onClick={handleOpen}
                  className="bg-moderateCyan hover:bg-darkCyan text-white p-2 pl-6 pr-6 rounded-full cursor-pointer"
                >
                  continue
                </p>
                <Modal
                  open={open}
                  onClose={handleClose}
                  className="m-auto flex items-center justify-center w-460"
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box className="outline-none bg-white rounded-lg border border-gray-200 shadow-lg">
                    <Completed />
                  </Box>
                </Modal>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-center border border-gray-200 rounded-lg relative bottom-16 -mb-4 bg-white opacity-60 cursor-not-allowed">
        <div className="flex flex-col items-center justify-evenly w-full pt-4 pb-4 max-md:pb-8">
          <div className="flex items-center justify-start w-full pl-4">
            <p className="border border-darkGray rounded-full w-4 h-4"></p>
            <div className="flex max-md:flex-col">
              <p className="font-bold text-lg ml-6">Mahogany Special Edition</p>
              <p className="font-semibold text-moderateCyan text-base ml-6">
                Pledge $200 or more
              </p>
              <p className="font-bold text-lg relative left-16 max-md:top-40 max-md:left-7">
                0{" "}
                <span className="font-semibold text-base text-gray-400">
                  left
                </span>
              </p>
            </div>
          </div>
          <div className="p-4 pl-14 text-sm text-gray-500">
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You’ll be added to our Backer member list.
            Shipping is included.
          </div>
        </div>
      </div>
    </div>
  );
}
