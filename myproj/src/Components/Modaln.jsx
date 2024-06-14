import React, { useContext, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Signup from "./Signup";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Modaln = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const { signupwithgmail, login } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    // console.log(email, password)
    login(email, password)
      .then((result) => {
        const user = result.user;
        alert("Login successfull");
        document.getElementById("my_modal_3").close();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage("Provide a correct email and password!");
      });
  };
  const handleLogin = () => {
    signupwithgmail()
      .then((result) => {
        const user = result.user;
        alert("Login successfull!");
        // navigate(from, {replace: true})
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form
            className="card-body"
            method="dialog"
            onSubmit={handleSubmit(onSubmit)}
          >
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                {...register("email")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                {...register("password")}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {errorMessage ? (
              <p className="text-red text-xs italic">{errorMessage}</p>
            ) : (
              ""
            )}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="flex flex-row justify-center text-center ">
            <div className=" pr-5">
              <p>Dont have an account?</p>
            </div>
            <div className="">
              <Link to="/signup" className=" text-red-800">
                signup
              </Link>
            </div>
          </div>

          <div className="flex flex-row justify-center gap-3 rounded-full">
            <div className="">
              <FaFacebook />
            </div>
            <button className="" onClick={handleLogin}>
              <FaGoogle />
            </button>
            <div className="">
              <FaGithub />
            </div>
          </div>
          <button
            htmlFor="my_modal_3"
            onClick={() => document.getElementById("my_modal_3").close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default Modaln;
