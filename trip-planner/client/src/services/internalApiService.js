/*
Separation of concerns:

Components only need to be concerned with receiving and rendering data,
they don't need to be concerned with how to make API calls.

This service file is concerned only with how to make API calls to our API
and only returns the data.

Combining a service file with the react-query package's useQuery hook is
ideal for larger projects.
*/

import axios from 'axios';

// Normally the url would be saved in a .env or config file that is git ignored
// so it's easy to have a different url for production.
const http = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export const getAllDestinations = async () => {
  const res = await http.get('/destinations');
  return res.data;
};

export const getDestinationById = async (id) => {
  const res = await http.get(`/destinations/${id}`);
  return res.data;
};

export const createDestination = async (data) => {
  const res = await http.post('/destinations', data);
  return res.data;
};

export const updateDestinationById = async (id, data) => {
  const res = await http.put(`/destinations/${id}`, data);
  return res.data;
};

export const deleteDestinationById = async (id) => {
  const res = await http.delete(`/destinations/${id}`);
  return res.data;
};
