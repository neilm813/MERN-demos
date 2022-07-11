const placeHolderBaseUrl = 'https://jsonplaceholder.typicode.com';
const testApiBaseUrl = 'http://httpstat.us';

function handleFetchError(res) {
  if (!res.ok) {
    throw new Error(res.statusText);
  }
}

export const getUsers = async () => {
  const res = await fetch(`${placeHolderBaseUrl}/users`);
  handleFetchError(res);
  return await res.json();
};

export const getUserById = async (id) => {
  const res = await fetch(`${placeHolderBaseUrl}/users/${id}`);
  handleFetchError(res);
  return await res.json();
};

export const test404 = async () => {
  const res = await fetch(`${testApiBaseUrl}/404`);
  handleFetchError(res);
};

export const test500 = async () => {
  const res = await fetch(`${testApiBaseUrl}/500`);
  handleFetchError(res);
};
