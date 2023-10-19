import { useLoaderData } from "react-router-dom";
import BrandCard from "../BrandCard/BrandCard";


const Brands = () => {
    const brands =useLoaderData();
    console.log(brands);
    return (
        <div>
         <div className="w-11/12  mx-auto">
                <div>
                    <h1 className="text-center mt-10 font-bold text-2xl">All Brands here:</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 mb-16 gap-4 mt-4 ">
                    {
                        brands.map( brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Brands;