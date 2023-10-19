import Swal from "sweetalert2";


const AddProducts = () => {
    
    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const BrandName = form.BrandName.value;
        const Price = form.Price.value;
        const Type = form.Type.value;
        const ShortDescription = form.ShortDescription.value;
        const Rating = form.Rating.value;
        const photo = form.photo.value;

        const newProduct = { name, BrandName, Price, Type, ShortDescription, Rating, photo }

        console.log(newProduct);

         // send data to the server
         fetch('', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                      })
                }
            })

    }



    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold">Add a Product</h2>
        
        <form onSubmit={handleAddProduct} >
            {/*  name and BrandName  row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text"> Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder=" Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="BrandName" placeholder="Brand Name" className="input input-bordered w-full" />
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
                        <input type="text" name="Price" placeholder="Price" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="Type" placeholder="Type" className="input input-bordered w-full" />
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
                        <input type="text" name="ShortDescription" placeholder="Short description" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="Rating" placeholder="Rating" className="input input-bordered w-full" />
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
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* button */}
            <input type="submit" value="Add Product" className="btn btn-block" />

        </form>
    </div>
);
};


export default AddProducts;