/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ProductCard = ({product}) => {
    const {_id, name, Type, Price, BrandName, ShortDescription, rating, photo } = product;


    return (
      <div className="card card-side bg-base-400 h-[350px] my-10 shadow-xl">
        <figure>
          <img className="h-full w-[550px]"
            src={photo}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">Product Name: {name}</h2>
          <h2 className="font-bold">Brand Name : {BrandName}</h2>
          <h2 >Type : {Type}</h2>
          <h2>Price : {Price}</h2>
          <h2>Rating : {rating}</h2>
          <p className="text-lg">ShortDescription: {ShortDescription}</p>
           
          <Link to={`/ViewDetails/${_id}`}>
          <button className="btn btn btn-accent">View Details</button>
          </Link>
          
          
          <Link to={`/updateProduct/${_id}`}>
            <button className="btn btn btn-accent">Update Product</button>
        </Link>
          
        </div>
      </div>
    );
  };
  
  

export default ProductCard;