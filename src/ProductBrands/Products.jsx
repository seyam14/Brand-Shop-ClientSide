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

