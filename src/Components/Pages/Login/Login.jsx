import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signInUser, user, googleLogin } = useContext(AuthContext)
  console.log(user);
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email, password);



    signInUser(email, password)
      .then(() => {

        swal("Logged", "You login successfully", "success");
        e.target.reset()
        navigate("/")

      })
      .catch(() => {

        swal("Error", "Your email or  password dose not match", "error");
      })





  }
  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        swal("Logged", "You login successfully", "success");

      })
      .catch(() => {
        swal("Error", "something went wrong", "error");
      })
  }


  return (
    <>


        <div className='flex flex-col justify-center items-center min-h-screen'  style={{ backgroundImage: 'url(https://fandomwire.com/wp-content/uploads/2018/08/Movies-background.png)' }}>
          <h1 className="text-2xl font-semibold py-3">Login</h1>
          <div className="card lg:w-[600px] text-white p-5  shadow-2xl bg-[#001F3F] bg-opacity-95">
            <form onSubmit={handleLogin} className="card-body ">
              <div className="form-control text-white">
                <label className="label">
                  <span className="label-text text-white text-2xl">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control ">
                <label className="label ">
                  <span className="label-text text-white text-2xl" >Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered text-black" required />

              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <Link className="text-center" to="/register"><p>Haven't any account? <span className="font-bold btn btn-link">register</span></p></Link>
            <div className="p-5">
              <button onClick={handleGoogle} className="btn btn-sm btn-neutral w-full"><FcGoogle></FcGoogle> Google</button>
            </div>
          </div>
        </div>
     


    </>

  );
};

export default Login;