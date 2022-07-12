import axios from 'axios';

// Import from .env file.
const SPACEX_KEY = process.env.REACT_APP_SPACEX_KEY;

/**
 * Create an axios instance to reuse the base url and api key for each request.
 * @see [SpaceX API](https://github.com/r-spacex/SpaceX-API/tree/master/docs)
 */
const http = axios.create({
  // This doesn't need to be in .env b/c the url is not going to change.
  baseURL: 'https://api.spacexdata.com/v4',
  // headers: {
  //   'spacex-key': SPACEX_KEY,
  // },
});

/*
If using TypeScript you could define your types here and then add them to your
functions return type so that anywhere that uses these functions will get
autocomplete on the type sand their props.

Since this isn't TypeScript a simple JSDoc example is shown below.
*/

/**
 * @typedef {object} Launch
 * @property {string} id
 * @property {string} name
 * @property {string} date_local
 * @property {string} details
 */

/**
 * Gets all launches.
 * @returns {Promise<Launch[]>}
 */
export const getAllLaunches = async () => {
  const res = await http('/launches');
  return res.data;
};

/**
 * Gets one launch by id.
 * @param {string} id
 * @returns {Promise<Launch>}
 */
export const getOneLaunch = async (id) => {
  const res = await http(`/launches/${id}`);
  return res.data;
};
