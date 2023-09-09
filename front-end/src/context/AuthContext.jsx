import { createContext, useState, useContext } from "react";

//funcion de llamada axios
import {registerRequest} from '../api/auth.js'

//todos los componentes que estén englobados van a poder hacer uso de los datos retornados
export const AuthContext = createContext()


export const useAuth = () =>{
  const context = useContext(AuthContext)
  if(!context){
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context;
}

//componente que engloba a todos
export const AuthProvider = ({children}) =>{
  const [user , setUser]  = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState([])

  //recive un usuario y llama a la peticion
  const signup = async (user) =>{
   try{
    const res = await registerRequest(user)
    console.log(res)
    setUser(res.data)
    setIsAuthenticated(true)
   } catch(error){
    setError(error.response.data.errors)
   }
  }
  return(
    <AuthContext.Provider value={{
      signup,
      user,
      isAuthenticated,
      error
    }}>
      {children }
    </AuthContext.Provider>
  )
}