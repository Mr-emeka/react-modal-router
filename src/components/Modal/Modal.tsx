import React, { FC } from "react";
import ReactDOM from "react-dom";
import {
  ModalBackdrop,
  ModalContent,
  ModalDialog,
  ModalContentHeader,
  ModalContentBody,
  ModalContentFooter,
  ModalProps,
} from "./ModalStyle";

const Modal: FC<ModalProps> = ({
  onClose,
  showHeader = true,
  showFooter = true,
  contentClassName,
  headerClassName,
  bodyClassName,
  footerClassName,
}) => {
  const modal = (
    <ModalBackdrop>
      <ModalContent>
        <ModalDialog className={contentClassName}>
          {showHeader && (
            <ModalContentHeader className={headerClassName}>
              <span className="header-text">Header</span>
              <div style={{ cursor: "pointer" }} onClick={onClose}>
                X
              </div>
            </ModalContentHeader>
          )}
          <ModalContentBody className={bodyClassName}>
            <div>body and some other stuff</div>
            <img src="https://picsum.photos/seed/picsum/200/300" />
            {/* <div>body and some other stuff</div>
            <img src="https://picsum.photos/seed/picsum/200/300" />{" "}
            <div>body and some other stuff</div>
            <img src="https://picsum.photos/seed/picsum/200/300" />{" "}
            <div>body and some other stuff</div>
            <img src="https://picsum.photos/seed/picsum/200/300" />{" "}
            <div>body and some other stuff</div>
            <img src="https://picsum.photos/seed/picsum/200/300" />{" "}
            <div>body and some other stuff</div>
            <img src="https://picsum.photos/seed/picsum/200/300" /> */}
          </ModalContentBody>
          {showFooter && (
            <ModalContentFooter className={footerClassName}>
              <div>some footer content </div>
            </ModalContentFooter>
          )}
        </ModalDialog>
      </ModalContent>
    </ModalBackdrop>
  );

  return ReactDOM.createPortal(modal, document.body);
};

export default Modal;
