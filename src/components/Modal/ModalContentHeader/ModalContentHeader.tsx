import React, { FC } from "react";
import {
  ModalContentHeaderStyle,
  ModalContentHeaderProps,
} from "./ModalContentHeaderStyle";

export const ModalContentHeader: FC<ModalContentHeaderProps> = ({
  headerText,
  headerClassName,
  onClose,
}) => {
  return (
    <ModalContentHeaderStyle className={headerClassName}>
      <span className="header-text">{headerText}</span>
      <div style={{ cursor: "pointer" }} onClick={onClose}>
        X
      </div>
    </ModalContentHeaderStyle>
  );
};
