import React from "react";
import "./Modal.css";
const Modal = (props) => {
  const { tool_name, description, image, features, integration } = props;
  console.log(props);

  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">{tool_name}</h3>
          <p className="py-4">{description}</p>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
