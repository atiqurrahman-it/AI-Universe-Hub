import React from "react";
import "./App.css";
import Button from "./component/Button/Button";
import Card from "./component/Card/Card";

const App = () => {
  return (
    <div className="">
      <h1 className="text-center text-3xl font-bold text-black py-5">
        AI Universe Hub
      </h1>
      <Button> Sort By Date </Button>
      <Card></Card>
      <Button>See More</Button>
    </div>
  );
};

export default App;
