import axios from "axios";
const clienteAxios = axios.create({
  baseURL: 'https://tareas-mern-servidor-2t17sfr8i-genarogg.vercel.app/',
});

export default clienteAxios