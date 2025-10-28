import { useJwt } from "react-jwt";
import { API } from "../_api";

export const login = async ({email, password})=> {
  try {
    const {data} = await API.post('/login',{email,password})
    return data
    
  } catch (error) {
    console.log(error);
    throw error
    
    
  }
}

export const register = async ({name,email,password})=> {
  try {
    const {data} = await API.post('/register', {name, email,password})
    return data
  } catch (error) {
    console.log(error)
    throw error
    
  }
}

export const logout = async({token})=>{
  try {
    const {data} = await API.post('/logout',{token}, {
      header: {
        Authorization : `Bearer ${localStorage.getItem('accesToken')}`
      }
    })
    localStorage.removeItem('accesToken')
    return data
    
  } catch (error) {
    console.log(error)
    throw error
    
  }
}





export const useDecodeToken = (token) => {
  const {decodeToken, isExpired} = useJwt(token);

  try {
    if(isExpired){
      return{
        success:false,
        message: "Token Expired",
        data:null
      }
    }

    return {
      success:true,
      message:"token valid",
      data: decodeToken
    }
    
  } catch (error) {
    return {
      success: false,
      message: error.message,
      data:null

    }
    
  }
}