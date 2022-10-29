import React, { FC, useState } from "react";
import Modal from "../Modal/Modal";

const OpenModal: FC = () => {
  const [showModal, toggleModal] = useState(false);
  return (
    <>
      <button onClick={() => toggleModal(!showModal)}>Open Modal</button>

      {showModal && <Modal onClose={() => toggleModal(false)} />}
    </>
  );
};

export default OpenModal;
