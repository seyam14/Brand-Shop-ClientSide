import { Link} from "react-router-dom";


const ViewDetails = () => {
    
    return (
        <div className="card card-side bg-base-400 h-[350px] my-10 shadow-xl">
        <figure>
          <img className="h-full w-[550px]"
            src=""
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">Product Name: </h2>
          <h2 className="font-bold">Brand Name :</h2>
          <h2 >Type :</h2>
          <h2>Price : </h2>
          <h2>Rating : </h2>
          <p className="text-lg">ShortDescription: </p>
           
          <Link to={"/myCart"}>
          <button className="btn btn btn-accent">ADD Cart</button>
          </Link>
        
          
        </div>
      </div>
    );
  };
export default ViewDetails;