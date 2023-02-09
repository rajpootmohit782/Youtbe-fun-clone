import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  // url: BASE_URL,
  params: {
    maxResults: "50"
  },
  headers: {
    "X-RapidAPI-Key": "fe796a83a5mshc070feb506fa3d6p19bf4ajsn03a9277fe5a9", //"8ad15f6ddamsh5ce5f2d3ca25204p1cd6bajsn93ed1cd81b37", //REACT_APP_RAPID_API_KEY
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com"
  }
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
