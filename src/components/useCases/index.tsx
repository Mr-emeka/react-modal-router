import React, { FC } from "react";
import CenterModal from "./CenterModal";
import LeftModal from "./LeftModal";
import NormalModal from "./NormalModal";
import RightModal from "./RightModal";
import FullScreenModal from "./FullScreen";

const UseCases: FC = () => {
  return (
    <>
      <NormalModal />
      <CenterModal />
      <RightModal />
      <LeftModal />
      <FullScreenModal />
    </>
  );
};

export default UseCases;
