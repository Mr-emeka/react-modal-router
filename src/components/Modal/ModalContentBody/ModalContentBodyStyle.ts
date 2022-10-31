import { ReactNode } from "react";
import styled from "styled-components";

export interface ModalContentBodyProps {
  bodyClassName?: string;
  children: ReactNode;
}

export const ModalContentBodyStyle = styled.div`
  padding: 10px 0;
`;
