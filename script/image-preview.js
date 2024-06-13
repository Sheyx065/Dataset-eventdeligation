import axios from "./axios.js";
import { renderPreviewImage } from "./render.js";

const URL = location.search;
const IMAGE_ID = new URLSearchParams(URL).get("image-id");

const loadSinglePhoto = async (id) => {
    try{
        const response = await axios(`/photos/${id}`);
        renderPreviewImage(response.data); 
    } catch(error) {
        console.log(error);
    }
}

loadSinglePhoto(IMAGE_ID);
