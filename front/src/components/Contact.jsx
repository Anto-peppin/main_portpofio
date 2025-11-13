import React, { useState } from "react";
import { Vortex } from "./bg";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from 'sweetalert2'

const Contact = () => {
  const[loading,setLoading] = useState(false)
  const schema = yup.object().shape({
    name: yup.string().required("Please Fill this portion"),
    city: yup.string().required("Please Fill this portion"),
    mail: yup
      .string()
      .email("Enter the correct Email")
      .required("Please fill this portion"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });



  const formSubmit = async (data) => {
const date = new Date()
const day = date.getDate()
const month = date.getMonth()+1
const year = date.getFullYear()
const mani = date.getHours()
const min = date.getMinutes()
const ampm = mani > 12 ? 'PM':'AM'
const time = `${day}:${month}:${year}/${mani}:${min} ${ampm}`
const user = {...data,time}

        try {
setLoading(true)
         const resp = await axios.post(`${import.meta.env.VITE_USER}`,{user})
         if(resp.data == true){
          Swal.fire({
  title: "Data Submit Successfully ✔",
  text: "Thankyou for responce 🙌",
  imageUrl: "./good.gif",
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: ""
});
         }
         else{
                 Swal.fire({
  title: "Database Connection Lost 💔",
  text: "Something went wrong!",
  imageUrl: "./wrong.gif",
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: ""
});
         }
        } catch (error) {
console.log(error.message);

        }
        finally{
          setLoading(false)
        }

    console.log(e);
  };

  return (
    <div className="w-full h-full  relative overflow-hidden" id="contact">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="px-4 md:px-10 w-full py-5 min-h-[calc(100vh - 100px )]  h-full relative border-t-3 border-dashed flex justify-center items-center"
      >
        <div className="w-full min-h-[calc(100vh - 100px )]  h-full flex flex-col gap-3 items-center">
          <h2 className="flex flex-col gap-1 items-center font-bold text-5xl sm:text-6xl  bg-linear-to-t from-purple-500 to-blue-400 bg-clip-text text-transparent  ">
          Contact{" "}
          <span className="text-2xl font-medium text-white text-center">
            Your vision, My code - lets connect the dots
          </span>
        </h2>

        <fieldset className="fieldset self-center relative border-base-300  rounded-box  border p-4 shadow-[inset_2px_2px_3px_black,inset_-2px_-2px_3px_white] w-[95%] sm:w-[83%] md:w-[67%] lg:w-[57%]">
           <img
            src="./bean1.png"
            className="absolute h-full -left-[76px] drop-shadow-[0_0_1px_white] hidden md:inline-block"
            alt=""
          />
          <legend className="fieldset-legend text-white font-bold text-3xl sm:text-[4xl] md:text-[5xl] lg:text-[6xl] ">
            {" "}
            🖐 Hi There,
          </legend>

         
          <form onSubmit={handleSubmit(formSubmit)}>
            <label className="label text-white font-medium text-2xl mb-1">
              My name is :{" "}
            </label>

            <input
              {...register("name")}
              type="text"
              className={`input w-full outline-0 border ${errors?.name ? 'border-red-500  mb-1':'border-white  mb-4'}  text-bold text-lg bg-transparent backdrop-blur-2xl text-white `}
              placeholder="Type Your Name..."
            />
            {errors?.name && (
              <p className="text-red-500 text-sm  mb-4">*{errors.name.message}</p>
            )}

            <label className="label text-white font-medium text-2xl mb-1">
              and I come from :{" "}
            </label>

            <input
              {...register("city")}
              type="text"
              className={`input w-full outline-0 border ${errors?.city ? 'border-red-500  mb-1':'border-white  mb-4'} text-bold text-lg bg-transparent backdrop-blur-2xl text-white`}
              placeholder="Enter your compony or city"
            />
  {errors?.city && (
              <p className="text-red-500 text-sm mb-4">*{errors.city.message}</p>
            )}
            <label className="label text-white font-medium text-2xl mb-1">
              You can reach me at :
            </label>
            <input
              {...register("mail")}
              type="text"
              className={`input w-full outline-0 border ${errors?.mail ? 'border-red-500  mb-1':'border-white  mb-4'} text-bold text-lg bg-transparent backdrop-blur-2xl text-white`}
              placeholder="Please fill with your Email"
            />
  {errors?.mail && (
              <p className="text-red-500 text-sm mb-4">*{errors.mail.message}</p>
            )}
            <label className="label text-white font-medium text-2xl mb-1">
              I'd love to talk about
            </label>
            <input
              {...register("discution")}
              type="text"
              className="input w-full mb-3 outline-0 border border-white text-bold text-lg bg-transparent backdrop-blur-2xl text-white"
              placeholder="Collaboration, Ideas, Project. Freelance "
            />
            <button
            disabled={loading}
              type="submit"
              className={`btn btn-info w-fit relative top-5 ${loading?'px-0':'px-4'} left-[50%] translate-[-50%] ${loading?'cursor-not-allowed':'cursor-pointer'}`}
            >
            {loading ? <span className=" btn btn-info"><span className=" loading loading-dots loading-lg"></span>Loading...</span> :' Submit'} 
            </button>
          </form>
        </fieldset>
        </div>
      </Vortex>
    </div>
  );
};

export default Contact;
