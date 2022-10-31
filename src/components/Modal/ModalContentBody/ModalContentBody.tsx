import React, { FC } from "react";
import {
  ModalContentBodyStyle,
  ModalContentBodyProps,
} from "./ModalContentBodyStyle";

export const ModalContentBody: FC<ModalContentBodyProps> = ({
  bodyClassName,
  children,
}) => {
  return (
    <ModalContentBodyStyle className={bodyClassName}>
      {children}
    </ModalContentBodyStyle>
  );
};
