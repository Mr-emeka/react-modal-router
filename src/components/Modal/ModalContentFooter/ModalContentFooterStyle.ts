import { ReactNode } from "react";
import styled from "styled-components";

export interface ModalContentFooterProps {
  footerClassName?: string;
  children: ReactNode;
}

export const ModalContentFooterStyle = styled.div`
  border-top: 1px solid #eeeeee;
  padding-top: 15px;
`;
