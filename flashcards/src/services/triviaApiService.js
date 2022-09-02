import axios from 'axios';

const http = axios.create({
  baseURL: 'https://opentdb.com/api.php',
});

export const getTriviaQuestions = (queryParams) => {
  const { amount, category, difficulty, type } = queryParams;

  return http
    .get(
      `?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`
    )
    .then((res) => {
      // The component only needs the data, this helps so the component doesn't
      // always need to do res.data
      return res.data;
    });

  /*   Or let axios build the query string for us from a query params object. */
  // return http.get('', { params: queryParams }).then((res) => {
  //   return res.data;
  // });
};

// export more functions that use different parts of the API
