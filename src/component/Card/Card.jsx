import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import "./Card.css";
import Product from "./Product/Product";

const Card = () => {
  const [products, setProduct] = useState([]);
  // show all button
  const [showAll, setShowAll] = useState(false);

  // single product show
  const [singleProduct, setSingleProduct] = useState({});
  const [handelId, setHandelId] = useState(null);
  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${handelId}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data.data));
  }, [handelId]);
  // single product show end

  useEffect(() => {
    const loadedData = async () => {
      let res = await fetch(
        "https://openapi.programming-hero.com/api/ai/tools"
      );
      let data = await res.json();
      setProduct(data.data.tools);
    };
    loadedData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5 mx-20 mb-9">
        {products.slice(0, showAll ? 12 : 6).map((product) => (
          <Product
            key={product.id}
            {...product}
            handelId={setHandelId}
          ></Product>
        ))}
      </div>

      {/* show all button  control  */}

      <div className="text-center mb-3">
        {!showAll && (
          <span onClick={() => setShowAll(true)}>
            <Button>See More</Button>
          </span>
        )}
      </div>
      <Modal {...singleProduct}></Modal>
    </>
  );
};

export default Card;
