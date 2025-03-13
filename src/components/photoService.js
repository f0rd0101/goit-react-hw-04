import axios  from "axios";

export const fetchPhotos = async ()=>{
    const response = await axios.get('IBYeODBTELKNuxIaJvs7rteENX0WzI3zKR3qW4o0rms')
    return response.data
}