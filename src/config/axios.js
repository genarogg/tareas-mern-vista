import axios from "axios";
const clienteAxios = axios.create({
  baseURL: 'https://tareas-mern-servidor.vercel.app/',
});

export default clienteAxios