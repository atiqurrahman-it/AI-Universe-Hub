import React from "react";
import "./Modal.css";
const Modal = (props) => {
  const { tool_name, description, image_link, features, integrations } = props;
  console.log(props);
  console.log(features);

  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card lg:card-side bg-base-100 ">
            <div className="card-body  border-2 border-sky-500 ">
              <h2 className="card-title">{tool_name}</h2>
              <p>{description ? description : "data not fund "}</p>
              <div className="flex me-5 justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2"> Features </h1>
                  {
                    (Object.values(features||{})).map((feature)=><p> {feature? feature.feature_name:"data ot foune "}</p>)
                  }
                </div>
                <div>
                  <h1 className="text-3xl font-bold mb-2">Integrations</h1>
                  {integrations?.map((int) => (
                    <p>{int ? int : "data not Found "}</p>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <figure className="w-full h-96 ms-2">
                <img
                  src={image_link ? image_link[0] : "image_link"}
                  alt="Album"
                />
              </figure>
            </div>
          </div>

          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
