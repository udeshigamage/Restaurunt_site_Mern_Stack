import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Signup from "./Signup";
import { Link } from "react-router-dom";

const Modal = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form className="card-body " onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control mt-0">
          <label className="label">
            <span className="label-text">Please Log in!</span>
          </label>
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
        <div className="form-control mt-1">
          <button className="btn ">Login</button>
        </div>
        <div className="flex flex-row justify-center text-center ">
          <div className=" pr-5">
            <p>Dont have an account?</p>
          </div>
          <div className="">
            <Link to="/signup">signup</Link>
          </div>
        </div>

        <div className="flex flex-row justify-center gap-3 rounded-full">
          <div className="">
            <FaFacebook />
          </div>
          <div className="">
            <FaGoogle />
          </div>
          <div className="">
            <FaGithub />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Modal;
