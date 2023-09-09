import { useForm } from "react-hook-form";


const Login = () => {

  const { register, handleSubmit, formState:{errors}} = useForm();


  const onSubmit = handleSubmit( data => {
    console.log(data)
  }) 

  return (
    <div>
      <form
        onSubmit={onSubmit}
      >   

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

        <button type="submit">Login</button>
      </form>
    </div>
  )
}
export default Login