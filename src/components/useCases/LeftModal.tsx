import React, { useState } from "react";
import Modal from "../Modal/Modal";
import {
  ModalContentHeader,
  ModalContentBody,
  ModalContentFooter,
} from "../Modal";

const LeftModal = () => {
  const [showModal, toggleModal] = useState(false);

  return (
    <>
      <button onClick={() => toggleModal(!showModal)}>Open Left Modal</button>

      {showModal && (
        <Modal position="left">
          <ModalContentHeader
            headerText="ModalHeader"
            onClose={() => toggleModal(false)}
          />
          <ModalContentBody>
            <div>body and some other stuff</div>
            <img src="https://picsum.photos/seed/picsum/200/300" />
          </ModalContentBody>
          <ModalContentFooter>
            <div>some footer content </div>
          </ModalContentFooter>
        </Modal>
      )}
    </>
  );
};

export default LeftModal;
