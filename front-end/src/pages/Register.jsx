import { useForm } from "react-hook-form";
import {useAuth} from "../context/AuthContext"
import { useEffect } from "react";
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
    <div className="registerForm">
      {error?.map((error, i)=>{
        <div key={i}>
          {error}
        </div>
      })}
      <form
        onSubmit={onSubmit}
      >
        <label>First Name:</label>
        <input type="text" {...register("firstName", { required: true })} />
        {
          errors.firstName && (
            <p>
              Firstname is required
            </p>
          )
        }

        <label>Last Name:</label> 
        <input type="text" {...register("lastName", { required: true })} />
        {
          errors.lastName && (
            <p>
              Lastname is required
            </p>
          )
        }

        <label>Email:</label>
        <input type="email" {...register("email", { required: true })} />
        {
          errors.email && (
            <p>
              Email is required
            </p>
          )
        }

        <label>Password:</label>
        <input type="password" {...register("password", { required: true })} />
        {
          errors.password && (
            <p>
              Password is required
            </p>
          )
        }

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default Register;
