import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Modal from "./Modal";
import Modaln from "./Modaln";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex flex-row items-center justify-center min-h-screen bg-slate-500  ">
      <div className=" w-1/4 h-1/4 bg-slate-400 rounded-2xl">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Create an account!</span>
            </label>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
              {...register("text")}
            />
          </div>
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
          </div>
          <div className="form-control mt-1">
            <button className="btn ">Sign up</button>
          </div>
          <div className="flex flex-row justify-center text-center">
            <div className=" ">
              <p>
                already have an account?
                <Link to="/" className=" text-red-700">
                  Login
                </Link>
              </p>
              <Modaln />
            </div>
            <div></div>
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
    </div>
  );
};

export default Signup;
