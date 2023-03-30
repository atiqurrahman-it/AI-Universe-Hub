import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./Card.css";
import Product from "./Product/Product";

const Card = () => {
  const [products, setProduct] = useState([]);

  const [showAll, setShowAll] = useState(false);

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
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5 mx-20 mb-9">
        {products.slice(0, showAll ? 12 : 6).map((product) => {
          console.log(product);
          return (
            <>
              <Product {...product} key={product.id}></Product>
            </>
          );
        })}
      </div>

      {/* show all button  control  */}

      <div className="text-center mb-3">
        {!showAll && (
          <span onClick={() => setShowAll(true)}>
            <Button>See More</Button>
          </span>
        )}
      </div>
    </>
  );
};

export default Card;
