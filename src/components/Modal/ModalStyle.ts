import { MouseEventHandler } from "react";
import styled from "styled-components";

export interface ModalProps {
  onClose: MouseEventHandler;
  showHeader?: boolean;
  showFooter?: boolean;
  contentClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
}

export const ModalBackdrop = styled.div`
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
  padding: 30px 0;
`;

export const ModalContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalDialog = styled.div`
  background: #ffffff;
  border-radius: 8px;
  position: relative;
  min-width: 25.75rem;
  max-width: 30.75rem;
  cursor: default;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
`;

export const ModalContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 1px solid #eeeeee;

  & .header-text {
    font-weight: 600;
    font-size: 20px;
  }
`;

export const ModalContentBody = styled.div`
  padding: 10px 0;
`;

export const ModalContentFooter = styled.div`
  border-top: 1px solid #eeeeee;
  padding-top: 15px;
`;
