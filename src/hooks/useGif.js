import { useState, useEffect} from "react";
import axios from "axios";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag={tag}`;
const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const  useGif = (tag) =>{
    const[gif, setGif] = useState('');
    const[loadSpinner, setLoadSpinner] =  useState(false);

    async function FetchData(tag){
        setLoadSpinner(true);
        let {data} = await axios.get(tag? (tagMemeUrl): (randomMemeUrl));
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoadSpinner(false);
    }

    useEffect( ()=>{
        FetchData();
    }, []);

    return{gif, loadSpinner, FetchData}
}

export default useGif;