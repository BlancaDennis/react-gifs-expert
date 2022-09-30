import { useEffect, useState } from "react";
import { GetGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
      const newsImages = await GetGifs(category);
      setImages(newsImages);
      setIsLoading(false)
    };

    useEffect(() => {
      getImages();
    }, []);


    return {
        images,
        isLoading
        // images: images,
        // isLoading: isLoading,
    }

}
