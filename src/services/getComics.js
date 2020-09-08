import axios from 'axios';

export const getComics = async() => {
  try{
    let response = await axios.get(`https://gateway.marvel.com:443/v1/public/comics?apikey=70dc72ee8641520cd02edeeb4f5cb87d`)
    return(response.data.data.results);
  }catch(error){
    Promise.reject(error);
  }
}

