import React, { FC } from "react";
import {
  ModalContentFooterStyle,
  ModalContentFooterProps,
} from "./ModalContentFooterStyle";

export const ModalContentFooter: FC<ModalContentFooterProps> = ({
  footerClassName,
  children,
}) => {
  return (
    <ModalContentFooterStyle className={footerClassName}>
      {children}
    </ModalContentFooterStyle>
  );
};
