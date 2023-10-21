import { Link, useLoaderData } from "react-router-dom";



const ViewDetails = () => {
  const details = useLoaderData();
  // console.log(details);

  return (
    <div className="card lg:card-side  my-20 h-[400px] bg-base-100 shadow-xl">
      <figure>
        <img
        className="w-auto"
          src={details.photo}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{details.name}</h2>
        <h2><span className="font-semibold">Type :</span> {details.Type}</h2>
        <h2><span className="font-semibold">Price :</span> {details.Price}</h2>
        <h2><span className="font-semibold">Brands Name :</span> {details.BrandName}</h2>
        <h2> <span className="font-semibold">Details :</span> {details.ShortDescription}</h2>
        <h2> <span className="font-semibold">Rating : </span> {details.rating}</h2>
        <div className="card-actions justify-end mt-10">
          <Link to='/myCart'><button className="btn btn-primary ">Add To Cart</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;