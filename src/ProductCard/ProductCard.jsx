/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ProductCard = ({product}) => {
    const {_id, name, Type, Price, BrandName, ShortDescription, rating, photo } = product;


    return (
  
       <div>
        {/*  */}
        <div className="carousel w-full mb-5">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/hKDJmvf/iphone-adds.jpg" className="w-full h-[250px]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/4pZkCRX/premium-white-headphone-ads.webp" className="w-full h-[250px]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/XL5pLJG/air-conditioner-adds.jpg" className="w-full h-[250px]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a> 
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/Vjf4ccV/ipad-adds.jpg" className="w-full h-[250px]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a> 
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>

        {/*  */}

      <div className="card lg:card-side bg-base-100 md:h-[400px] my-8 shadow-xl">
    

      <figure><img className="h-full w-[550px]" src={photo} alt="" /></figure>
 
            <div className="card-body">
        <h2 className="card-title font-bold">Product Name: {name}</h2>
        <h2 className="font-bold">Brand Name: {BrandName}</h2>
        <h2>Type: {Type}</h2>
        <h2>Price: {Price}</h2>
        <h2>Rating: {rating}</h2>
        <p className="text-lg">{ShortDescription}</p>
        <Link to={`/ViewDetails/${_id}`}>
          <button className="btn btn-accent w-[153px]">View Details</button>
        </Link>
        <Link to={`/updateProduct/${_id}`}>
          <button className="btn btn-accent">Update Product</button>
        </Link>
      </div>
      </div>
      </div>

    );
  };
  
  

export default ProductCard;