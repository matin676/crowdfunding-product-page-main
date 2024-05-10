import React, { useState } from "react";
import { Modal, Box } from "@material-ui/core";

import mLogo from "../assets/images/logo-mastercraft.svg";
import bookmark from "../assets/images/icon-bookmark.svg";
import ModalContent from "./ModalContent";

export default function Mastercraft() {
  const [isActive, setIsActive] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center border border-gray-200 rounded-lg relative bottom-16 bg-white w-656 flex-wrap max-md:max-w-[350px]">
        <div className="flex items-center justify-center relative bottom-8">
          <img src={mLogo} alt="mastercraft logo" />
        </div>
        <div className="flex flex-col items-center justify-center flex-wrap">
          <p className="font-bold text-3xl max-md:text-xl text-center">
            Mastercraft Bamboo Monitor Riser
          </p>
          <p className="text-darkGray text-lg max-md:text-sm text-center">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
        </div>
        <div className="flex items-center mt-10 mb-10">
          <span
            onClick={handleOpen}
            className="bg-moderateCyan text-white p-[15px] pl-8 pr-8 rounded-full text-lg relative right-10 hover:bg-darkCyan cursor-pointer transition-all duration-500 max-md:text-base max-md:pl-4 max-md:pr-4"
          >
            Back this project
          </span>
          <Modal
            open={open}
            onClose={handleClose}
            className="m-auto flex items-center justify-center w-656 flex-wrap max-md:max-w-[350px]"
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="outline-none bg-white rounded-lg border border-gray-200 shadow-lg">
              <div className="flex flex-col justify-start p-8 pt-4 pb-0">
                <p
                  id="modal-modal-title"
                  className="font-bold text-2xl mb-4 max-md:text-xl"
                >
                  Back this project
                </p>
                <p
                  id="modal-modal-description"
                  className="text-darkGray text-sm"
                >
                  Want to support us in bringing Mastercraft Bamboo Monitor
                  Riser out in the world?
                </p>
                <ModalContent />
              </div>
            </Box>
          </Modal>
          <div
            className="flex items-center justify-center relative left-10 cursor-pointer hover:opacity-70 transition-all duration-500 max-md:left-0"
            onClick={() => setIsActive(!isActive)}
          >
            <img
              src={bookmark}
              alt="Bookmark"
              className="translate-x-14 max-md:translate-x-0"
              style={{ fill: isActive ? "#3cb4ac" : "#B1B1B1" }}
            />
            <a
              href="/"
              className={`bg-gray-200 ${
                isActive ? "text-moderateCyan" : "text-darkGray"
              } font-semibold p-[15px] pl-16 pr-8 rounded-full text-lg max-md:hidden`}
            >
              Bookmark
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
