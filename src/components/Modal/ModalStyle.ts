import { ReactNode } from "react";
import styled from "styled-components";
import { device } from "../../helpers/breakpoints";

export interface ModalProps {
  contentClassName?: string;
  children: ReactNode;
  position?: "right" | "centered" | "left" | "fullscreen";
}

export interface ModalBackdropProps {
  position?: "right" | "centered" | "left" | "fullscreen";
}

export interface ModalContentProps {
  position?: "right" | "centered" | "left" | "fullscreen";
}

export interface ModalDialogProps {
  position?: "right" | "centered" | "left" | "fullscreen";
}

export const ModalBackdrop = styled.div<ModalBackdropProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 500;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(1rem);
  overflow: auto;
  padding: ${({ position }) =>
    position === "right" || position === "left" || position === "fullscreen"
      ? "0"
      : "30px 0"};

  @media ${device.mobileL} {
    padding: 0;
  }
`;

export const ModalContent = styled.div<ModalContentProps>`
  height: 100%;
  display: ${({ position }) => (position === "centered" ? "flex" : "")};
  justify-content: center;
  align-items: center;
`;

export const ModalDialog = styled.div<ModalDialogProps>`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: ${({ position }) =>
    position === "right" || position === "left" || position === "fullscreen"
      ? "0"
      : "8px"};
  position: relative;
  min-width: 25.75rem;
  max-width: ${({ position }) =>
    position === "fullscreen" ? "100%" : "30.75rem"};
  cursor: default;
  margin-left: ${({ position }) => (position === "left" ? "initial" : "auto")};
  margin-right: ${({ position }) =>
    position === "right" ? "initial" : "auto"};
  padding: 20px;
  min-height: ${({ position }) =>
    position === "right" || position === "left" || position === "fullscreen"
      ? "100%"
      : "auto"};

  @media ${device.mobileL} {
    border-radius: 0;
    min-width: auto;
    max-width: 100%;
  }
`;
