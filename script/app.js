import axios from "./axios.js";
import { renderPhotosInGrid } from "./render.js";

const API_KEY = "gNmvSLQY6yU4Z2Z4vmxIkmNI1RhDdA3uonxDMrjP5gfQpqwAhOb89Dba";

localStorage.setItem("key", API_KEY);

const loadPhotos = async () => {
    try{
        const response = await axios('/search?query=nature&per_page=80');
        if(!response.status || response.status !== 200){
            throw new Error(response);
        }
    
        const data = response.data;
        renderPhotosInGrid(data.photos);
    } catch(error) {
        console.log(error.message);
    }
}
loadPhotos();
