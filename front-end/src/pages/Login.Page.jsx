import { useForm } from "react-hook-form";
import {useAuth} from "../context/AuthContext"
import {Link} from "react-router-dom"
const Login = () => {

  const { register, handleSubmit, formState:{errors}} = useForm();

  const {signin, error} = useAuth()


  const onSubmit = handleSubmit( data => {
    signin(data)
  }) 

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center w-auto">
     <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">

     {error.map((error, i)=>{
        <div key={i}>
          <div className="bg-red-500 p-2 text-white">
          {/* {error.msg} */}
          {console.log(error)}
          </div>
        </div>
      })}

       <h1 className="py-5 text-4xl justify-center items-center flex">Login</h1>
     <form
        onSubmit={onSubmit}
      >
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

        <button type="submit" className="rounded-md bg-zinc-600 px-4 py-2 my-2">Login</button>
      </form>
      <p className="flex gap-x-2 justify-between">Dont have an account? <Link to="/register">Sign up</Link> </p>
     </div>
    </div>
  )
}
export default Login