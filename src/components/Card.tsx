import React, { FunctionComponent } from "react";
import { propsCardData } from "../interface";

const Card: FunctionComponent<propsCardData> = (props) => {
  const { title, image, rank, rating, release_date, lastest_date } = props;
  return (
    <div className="relative h-[264px]">
      <div className="bg-white w-full absolute hover:z-10 rounded-xl hover:scale-125 duration-150 product hover:shadow-2xl hover:shadow-black-500/50 hover:mt-11">
        <div>
          <img
            src={image}
            alt=""
            className="rounded-t-xl h-52 w-full object-cover bg-center"
          />
          <div className="p-2 min-h-7 text-center h-[56px]">
            <strong>{title}</strong>
          </div>
          <div className="absolute right-0 top-0 bg-red-500 rounded-tr-xl w-8 h-8 flex items-center justify-center">
            {rank}
          </div>
        </div>
        <div className="p-4 hidden hover-text">
          <p className="mb-2">
            <strong>Release :</strong> {release_date}
          </p>
          <p className="mb-2">
            <strong>Lastest :</strong> {lastest_date ?? "Now"}
          </p>
          <p>
            <strong>Rated :</strong> {rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
