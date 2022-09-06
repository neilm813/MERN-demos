import axios from 'axios';

const dummyJson = axios.create({
  baseURL: 'https://dummyjson.com/',
});

const httpStatus = axios.create({
  baseURL: 'https://httpstat.us',
});

export const getUsers = async () => {
  const res = await dummyJson.get('users');
  return res.data;
};

export const getUser = async (id) => {
  const res = await dummyJson.get(`users/${id}`);
  return res.data;
};

export const getErrorResponse = async (statusCode = 500, sleepMs = null) => {
  if (sleepMs === null) {
    return httpStatus.get(`${statusCode}`);
  }

  return httpStatus.get(`${statusCode}?sleep=${sleepMs}`);
};
