import React, { useEffect, useState } from "react";
import "./Card.css";
import Product from "./Product/Product";

const Card = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    // way one
    // fetch("https://openapi.programming-hero.com/api/ai/tools")
    //   .then((res) => res.json())
    //   .then((data) => setProduct(data.data.tools));

    // way two
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
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-4 mx-20">
      {products.map((product) => {
        console.log(product);
        return (
          <>
            <Product {...product} key={product.id}></Product>
          </>
        );
      })}
    </div>
  );
};

export default Card;
