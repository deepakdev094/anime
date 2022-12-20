import React, { FunctionComponent, useContext } from "react";
import { UseContext } from "../@context";
import { propsCardData } from "../interface";
import Card from "./Card";

const CardSection: FunctionComponent = () => {
  const user = useContext(UseContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {user.map((data: propsCardData, index: number) => (
        <Card key={index} {...data} />
      ))}
    </div>
  );
};

export default CardSection;
