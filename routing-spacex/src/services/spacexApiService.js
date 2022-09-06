import axios from 'axios';

const http = axios.create({
  baseURL: 'https://api.spacexdata.com/v4',
});

export const getAllLaunches = async () => {
  const res = await http.get('/launches');
  return res.data;
};

export const getOneLaunch = async (id) => {
  const res = await http.get(`/launches/${id}`);
  return res.data;
};
