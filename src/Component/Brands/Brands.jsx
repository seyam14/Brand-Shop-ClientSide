/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";
import BrandCard from "../BrandCard/BrandCard";

const Brands = () => {
  const brands = useLoaderData();

  // onClick={() => handleCardClick(brand)}

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div>
          <h1 className="text-center mt-10 font-bold text-2xl">
            All Brand here:
          </h1>
          <p className="text-center mt-4 font-semibold mb-4">
            Apple, Google, Samsung, Sony, Intel, and Microsoft
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 mb-16 gap-4">
          {brands.map((brand) => (
            <div key={brand.id}>
              <Link to={`/products/${brand.BrandName}`}>
                <BrandCard brand={brand}></BrandCard>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
