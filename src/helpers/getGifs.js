export const GetGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=W64MjNKtrCclnsE0oykcw0tnlfnqwy49&q=${category}&limit=10`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    
    console.log(category, 'category')
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
    return gifs;
  };
  