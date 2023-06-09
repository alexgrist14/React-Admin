import axios from "axios";

interface ResponseWithToken{
  accessToken: string;
}

export const loginUser = async (email: string, password: string): Promise<ResponseWithToken | undefined> =>{
  try {
    const data = JSON.stringify({
      email: email,
      password: password
    });

    const response = await axios.post("https://cors-anywhere.herokuapp.com/3.65.149.62/test-api/auth/login",data,{
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
      },
    });

    return response.data as ResponseWithToken;
  }catch (err){
    return undefined;
  }
}