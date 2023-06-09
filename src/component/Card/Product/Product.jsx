import React from "react";
import "./Product.css";

import {
  faArrowRight,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Product = (props) => {
  const { id, name, image, published_in, features } = props;
  // const { setSingleUniqueId } = props.setSingleUniqueId;
  // console.log(props)
  return (
    <div className="card w-full bg-base-100 shadow-xl hover:bg-sky-200 ">
      {/* <figure className="h-3/4">
        <img src={image} alt="Shoes" />
      </figure> */}

      <div className="h-3/4">
        <img src={image} alt="Shoes" />
      </div>
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold my-2">Features </h2>

        {features.map((fea, index) => (
          <p>
            {index + 1} {fea}
          </p>
        ))}

        <hr />
        <h2 className="text-2xl font-bold"> {name}</h2>
        <div className="flex justify-between">
          <div className="flex">
            <h3>
              <FontAwesomeIcon icon={faCalendarDays} />{" "}
            </h3>
            <p className="ms-2"> {published_in}</p>
          </div>
          <div>
            <label htmlFor="my-modal-5" onClick={() => props.handelId(id)}>
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#ff0000" }}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
