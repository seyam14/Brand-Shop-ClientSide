import {  useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";
import NotAvaiableProduct from "../Component/NotAvaiableProduct/NotAvaiableProduct";


const Products = () => {
    //  const allProducts = useLoaderData();
     const {BrandName } = useParams()
     const [phones, setPhones] = useState([]);
   
     useEffect(() => {
       fetch(`https://brand-shop-server-side-backend.vercel.app/addProduct/${BrandName}`)
           .then(res => res.json())
           .then(data => {
               console.log(data)
               setPhones(data)
           })
   }, [BrandName])
   

  return (
    <div className="m-20">
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
    
        <div className="grid grid-cols-1">
        {    
        phones.length > 0 ? (
          
             phones.map(product => <ProductCard key={product._id} product={product} />)
            ) : (
              
                <NotAvaiableProduct></NotAvaiableProduct>
            )}
        </div>
    </div>
  );
};

export default Products;

