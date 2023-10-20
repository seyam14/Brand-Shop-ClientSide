import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";


const Products = () => {
     const allProducts = useLoaderData();

  return (
    <div className="m-20">

        <div className="grid grid-cols-1">
        {
            allProducts.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
        }
        </div>
    </div>
  );
};

export default Products;

