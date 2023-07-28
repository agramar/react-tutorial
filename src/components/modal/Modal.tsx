import React from "react";
import styled from "styled-components";
import ModalPortal from "./ModalPortal";

const Modal = ({
  children,
  maxSize,
  onClose,
}: {
  children: React.ReactNode;
  maxSize?: number;
  onClose: () => void;
}) => (
  <ModalPortal>
    <ModalWrapper maxSize={maxSize || 520}>
      <div className="modal-dimmed" onClick={onClose} />
      <div className="modal-content">
        {children}
        <button onClick={onClose} className="modal-close" type="button">
          <span className="material-icons">close</span>
        </button>
      </div>
    </ModalWrapper>
  </ModalPortal>
);

Modal.Title = ({ children }: { children: React.ReactNode }) => (
  <Title>{children}</Title>
);

const ModalWrapper = styled.div<{ maxSize: number }>`
  z-index: 1000;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  .modal-dimmed {
    width: 100%;
    height: 100%;
    border: 0;
    background-color: #000;
    opacity: 0.5;
    text-indent: -9999em;
    text-align: left;
    cursor: default;
  }
  .modal-content {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 98%;
    max-width: ${({ maxSize }) => maxSize || 520}px;
    max-height: 88vh;
    padding: 40px 20px 30px;
    background-color: #fff;
    border-radius: 10px;
    font-size: 14px;
    overflow-y: auto;
    transform: translate(-50%, -50%);
    table {
      margin-top: 8px;
    }
  }
  .modal-close {
    z-index: 1;
    position: absolute;
    top: 14px;
    right: 20px;
    background-color: transparent;
    border: 0;
    span {
      font-size: 28px;
    }
  }
`;

const Title = styled.h2`
  margin: -20px -20px 20px;
  padding: 0 20px 20px;
  border-bottom: 1px solid #e3e6f3;
  font-size: 24px;
  font-weight: 700;
  color: #2e343c;
  & ~ .modal-close {
    top: 22px;
  }
`;

export default Modal;
