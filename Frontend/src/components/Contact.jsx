import React from "react";
import { useForm } from "react-hook-form"

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)

  return (
    <div>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)} action="" className="flex justify-center flex-col mt-32 gap-8 border w-96 p-4 mx-auto rounded-md">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input type="text" className="grow" placeholder="Enter your full name" {...register("name", { required: true })}/> <br />         
        </label>
        {errors.name && <span className="text-sm text-red-500">This field is required</span>}
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input type="text" className="grow" placeholder="@site.com" {...register("email", { required: true })}/> <br />
        </label>
        {errors.email && <span className="text-sm text-red-500">This field is required</span>}
        <textarea className="textarea textarea-bordered w-[22rem]" placeholder="Message" {...register("textarea", { required: true })}></textarea>
        {errors.textarea && <span className="text-sm text-red-500">This field is required</span>}
        <button className="btn btn-primary">Primary</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
