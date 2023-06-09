import axios from "axios";
import { IContact } from "../types/IContact";

export const getContacts = async (): Promise<IContact[] | undefined> =>{
  try {
    const token = localStorage.getItem('token');
    console.log(token);
    const response = await axios.get("https://cors-anywhere.herokuapp.com/3.65.149.62/test-api/contacts",{
        headers:{
          Authorization: `Bearer ${token}`
        }
      }) as IContact[]
    return response;
  }catch (err){
    return undefined;
  }
}