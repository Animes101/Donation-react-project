import React from "react";
import { Link } from "react-router-dom";

const CetagurisCard=({data,})=>{
  const {id,categoryBg,title,cardBg,image,textColortitle,category} = data;
  return (
    <Link to={`/donation-details/${id}`}>
      <div style={{background:cardBg}}  className={`card shadow-xl`}>
      <figure>
        <img
          src={image}
          alt={category}
        />
      </figure>
      <div className="card-body">
      <button className="p-2 text-black font-bold shadow-md hover:shadow-black" style={{background:categoryBg}}>{category}</button>
        <h2 style={{color:textColortitle}} className={`card-title`}>{title}</h2>
      </div>
    </div>
    </Link>
  );
};


export default CetagurisCard;
