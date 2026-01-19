import axios from "axios";  
// Use local Express server during development. If you run the Firebase emulator,
// change this back to the emulator URL (127.0.0.1:5001/...) or set via env.
const instance = axios.create({

    // local host for development

    // baseURL: "http://127.0.0.1:5001/clone-cd694/us-central1/api"


 // deployed on rednder 
    baseURL:"https://amazon-api-backdep.onrender.com",

});

export { instance };