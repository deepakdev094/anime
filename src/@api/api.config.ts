import axios from "axios";

axios.defaults.baseURL = "https://api.jikan.moe/v4";
axios.defaults.timeout = 6000;
axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";