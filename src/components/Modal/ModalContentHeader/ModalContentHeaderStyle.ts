import { MouseEventHandler } from "react";
import styled from "styled-components";

export interface ModalContentHeaderProps {
  headerText: string;
  headerClassName?: string;
  onClose: MouseEventHandler;
}

export const ModalContentHeaderStyle = styled.div`
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
