import React, { useState } from "react";
import Modal from "../Modal/Modal";
import {
  ModalContentHeader,
  ModalContentBody,
  ModalContentFooter,
} from "../Modal";

const CenterModal = () => {
  const [showModal, toggleModal] = useState(false);

  return (
    <>
      <button onClick={() => toggleModal(!showModal)}>Open Center Modal</button>

      {showModal && (
        <Modal position="centered">
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

export default CenterModal;
