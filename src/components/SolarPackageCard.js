// SolarPackageCard.js

import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/styles";

const SolarPackageCard = ({ data }) => {
  return (
    <div className="w-[230px] h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
      <Link to={`/solar-package/${data.id}`}>
        <img
          src={data.image_URL}
          className="w-full h-[170px] object-cover"
          alt=""
        />
      </Link>
      <Link to={`/solar-package/${data.id}`}>
        <h4 className="pb-2 font-[500]">
          {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
        </h4>

        <p className="font-[400] text-[17px] text-[#68d284] ">{`Price: $${data.price}`}</p>
        <p>{`Capacity: ${data.capacity}`}</p>
        <p>{`Warranty: ${data.warranty}`}</p>
      </Link>
    </div>
  );
};

export default SolarPackageCard;
