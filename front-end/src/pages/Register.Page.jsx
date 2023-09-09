import { useForm } from "react-hook-form";
import {useAuth} from "../context/AuthContext"
import { useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import '../index.css'

const Register = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();

  const {signup, isAuthenticated, error} = useAuth()
  const navigate = useNavigate()

  useEffect(()=>{
    if(isAuthenticated) navigate('/login')
  }, [isAuthenticated])

  const onSubmit = handleSubmit( async(values) => {
    signup(values)
  }) 

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      {error.map((error, i)=>{
        <div key={i}>
          <div className="bg-red-500 p-2 text-white">
          {/* {error.msg} */}
          {console.log(error)}
          </div>
        </div>
      })}
      <form
        onSubmit={onSubmit}
      >
        <label>First Name:</label>
        <input type="text" {...register("firstName", { required: true })} className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"/>
        {
          errors.firstName && (
            <p className="text-red-500">
              Firstname is required
            </p>
          )
        }

        <label>Last Name:</label> 
        <input type="text" {...register("lastName", { required: true })} className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"/>
        {
          errors.lastName && (
            <p className="text-red-500">
              Lastname is required
            </p>
          )
        }

        <label>Email:</label>
        <input type="email" {...register("email", { required: true })} className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"/>
        {
          errors.email && (
            <p className="text-red-500">
              Email is required
            </p>
          )
        }

        <label>Password:</label>
        <input type="password" {...register("password", { required: true })} className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"/>
        {
          errors.password && (
            <p className="text-red-500">
              Password is required
            </p>
          )
        }

        <button type="submit" className="rounded-md bg-zinc-600 px-4 py-2 my-2">Register</button>
      </form>
    </div>
  );
};
export default Register;
