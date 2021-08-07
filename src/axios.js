import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001/fir-34a4c/us-central1/api", // API (cloud function) URL
});

export default instance;
