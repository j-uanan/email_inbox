import React from "react";

import "./Modal.css";

const Modal = ({ showModal, setShowModal, totalEmail, totalNewEmail }) => {
  const onCloseModalHandler = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      {showModal ? (
        <div className="modal__background">
          <div className="modal__container">
            <div className="modal__content">
              <h1>Welcome to your email inbox!</h1>
              <p>
                You have <span className="modal__span">{totalNewEmail}</span> new messages out of{" "}
                <span className="modal__span">{totalEmail}</span> total
              </p>
              <button className="modal__button" onClick={onCloseModalHandler}>
                Enter now!
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
