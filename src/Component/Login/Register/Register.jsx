import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Register = () => {

    const { createUser } = useContext(AuthContext);
    
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const displayName = form.displayName.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(displayName,email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                // new user has been created
                const createdAt = result.user?.metadata?.creationTime;
                const user = {displayName, email, createdAt: createdAt };
                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.insertedId){
                            Swal.fire(
                                'Register success'
                              )
                        }
                    })
            })
            .catch(error => {
                console.error(error)
            })
    
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
            <div className="text-center ">
                <h1 className="text-5xl font-bold">Register</h1>

            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            
                <form  onSubmit={handleRegister}  className="card-body">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">DisplayName</span>
                        </label>
                        <input type="text" name="displayName" placeholder="displayName" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
            <Link className="text-center mb-6" to={"/login"}>
                <button className="btn btn btn-accent">Login</button>
            </Link>
            </div>
        </div>
    </div>
);
};


export default Register;