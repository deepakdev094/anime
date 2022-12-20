import axios from "axios";

export const GetAnime = async () => {
  const { data } = await axios.get("/top/anime");
  return data;
};
