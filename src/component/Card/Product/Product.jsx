import React from "react";
import "./Product.css";
const Product = (props) => {
  const { name, description, image, published_in, features } = props;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold my-2">Features </h2>

        {
          features.map((fea,index)=> <p> {index +1}  {fea}</p>)
        }

        <hr  />
        <h2 className="text-2xl font-bold"> {name}</h2>
        <div className="flex justify-between">
          <div className="flex">
            <h3>cal </h3>
             <p> {published_in}</p>
          </div>
          <div>
            <p> d</p>
          </div>
        </div>

      

      </div>
    </div>
  );
};

export default Product;
