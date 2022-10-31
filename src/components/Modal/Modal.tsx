import React, { FC } from "react";
import ReactDOM from "react-dom";
import {
  ModalBackdrop,
  ModalContent,
  ModalDialog,
  ModalProps,
} from "./ModalStyle";

const Modal: FC<ModalProps> = ({ contentClassName, children, position }) => {
  const modal = (
    <ModalBackdrop position={position}>
      <ModalContent position={position}>
        <ModalDialog className={contentClassName} position={position}>
          {children}
        </ModalDialog>
      </ModalContent>
    </ModalBackdrop>
  );

  return ReactDOM.createPortal(modal, document.body);
};

export default Modal;
