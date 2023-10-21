
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
    const { googleSignIn,signInUser } = useContext(AuthContext);

    const handleGoogleLogin = () => {
        googleSignIn().then((result) => console.log(result.logUser));
      };

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                const user = {
                    email,
                    lastLoggedAt: result.user?.metadata?.lastSignInTime
                }
                // update last logged at in the database
                fetch('https://brand-shop-server-side-backend.vercel.app/user', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
            })
            .catch(error => {
                console.error(error);
            })
    }
        

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
            <div className="text-center ">
                <h1 className="text-5xl font-bold"> Please Login </h1>

            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            
                <form   onSubmit={handleLogin } className="card-body">
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
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className="btn btn-active  btn btn-neutral ">
                        <button onClick={handleGoogleLogin}  className="google-btn ">
                        Google Login
                        </button>
                    </div>
                <p className="text-center ">Do not have an account ? 
                <Link className="text-center" to={"/register"}>
                 <button className="btn btn btn-accent">Register</button>
                </Link>
                </p>
            </div>
        </div>
    </div>
);
};



export default Login;