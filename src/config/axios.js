import axios from "axios";
const clienteAxios = axios.create({
  baseURL: 'https://mern-task-servidor.herokuapp.com/',
});

export default clienteAxios