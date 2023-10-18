/* eslint-disable react/prop-types */

const BrandCard = ({brand}) => {
        const { name, image} = brand;
        return (
          <div className="">
            <div className=" border-1 h-[320px] gap-4 bg-gray-200 rounded-md">
              <div>
                <img className="w-full rounded-md  h-[250px]" src={image} alt="" />
              </div>
              <div className="p-3">
                <h1 className="font-bold text-xl my-3  text-purple-500">{name}</h1>
              </div>
            </div>
          </div>
        );
      };

export default BrandCard;