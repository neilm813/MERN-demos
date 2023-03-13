/* 
This file exports a function for every part of the api we need to use in our
app.

We could create another service file to do the same for a different api if we
used more than one api.
*/

// Now axios doesn't need to be imported to multiple components.
import axios from 'axios';

// This instance of axios will concatenate given urls to the end of baseURL.
const http = axios.create({
  baseURL: 'https://opentdb.com/api.php',
});

export const getQuestions = async (queryParams) => {
  // Empty string url here because we'll let axios add the query params into the baseURL above
  // Otherwise, the url here will be concatenated to the baseURL above.
  const response = await http.get('', {
    params: queryParams,
  });

  return response.data;
};

// export const getQuestionOfTheDay
