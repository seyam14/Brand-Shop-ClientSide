/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const product= useLoaderData();
    const [selectedRating, setSelectedRating] = useState(3);

    const { _id, name, BrandName, Price,  Type, ShortDescription, photo } = product;

    const handlUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const BrandName = form.BrandName.value;
        const Price = form.Price.value;
        const  Type = form. Type.value;
        const ShortDescription = form.ShortDescription.value;
        const  photo = form. photo.value;

        const updatedProduct={ name, BrandName, Price, Type, ShortDescription, rating: selectedRating,  photo }

        console.log(updatedProduct);

        // send data to the server
        fetch(`https://brand-shop-server-side-backend.vercel.app/addProducts/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'productUpdated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="bg-[#F4F3F0] p-24">
    <h2 className="text-3xl font-extrabold">Update Product {name}</h2>
        
        <form onSubmit={handlUpdateProduct} >
            {/*  name and BrandName  row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text"> Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" defaultValue={name} placeholder=" Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="BrandName" defaultValue={BrandName} placeholder="Brand Name" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form Price and Type row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="Price" defaultValue={Price} placeholder="Price" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="Type" defaultValue={Type} placeholder="Type" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form ShortDescription and Rating row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Short description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="ShortDescription" defaultValue={ShortDescription} placeholder="Short description" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
              <div className="rating input input-bordered w-full">
                <input type="radio" name="rating-1" className="mask mask-star mt-3" value="1" checked={selectedRating === 1} onChange={() => setSelectedRating(1)} />
                <input type="radio" name="rating-1" className="mask mask-star mt-3" value="2" checked={selectedRating === 2} onChange={() => setSelectedRating(2)} />
                <input type="radio" name="rating-1" className="mask mask-star mt-3" value="3" checked={selectedRating === 3} onChange={() => setSelectedRating(3)} />
                <input type="radio" name="rating-1" className="mask mask-star mt-3" value="4" checked={selectedRating === 4} onChange={() => setSelectedRating(4)} />
                <input type="radio" name="rating-1" className="mask mask-star mt-3" value="5" checked={selectedRating === 5} onChange={() => setSelectedRating(5)} />
              </div>
            </label>
                </div>
            </div>
            {/* form Photo url row */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* button */}
            <input type="submit" value="update Product" className="btn btn-block" />

        </form>
    </div>
);
};


export default UpdateProduct;