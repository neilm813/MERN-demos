/*
Using this API https://jsonplaceholder.typicode.com/
and ONLY vanilla js

Fetch the users with the following ids: 2, 5, 7
Fetch each of the above users posts

Display the fetched users in the div#users-container with each user in a column
with their posts in the column under the user info.

You can use the given HTML & CSS for display purposes
*/

/* 
Considerations about the API:

There is an endpoint to fetch all users, but this fetches more data than I need.

There's an endpoint to fetch one user, but I then need to make multiple requests to get each user.

I chose to fetch individual users because in a real api there would likely be many more users returned from the
/users route than I needed.
*/

const apiBaseUrl = 'https://jsonplaceholder.typicode.com';

const fetchUser = async (userId) => {
  const url = `${apiBaseUrl}/users/${userId}`;
  const response = await fetch(url);
  const user = await response.json();
  return user;
};

const fetchUsersById = async (ids = []) => {
  const promises = ids.map((id) => fetchUser(id));
  return Promise.all(promises);
};

const mockUsers = [
  {
    id: 1,
    name: 'first user',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
    },
  },
  {
    id: 2,
    name: 'second user',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
    },
  },
];

const makeUserNode = (user) => {
  const { id, name, address } = user;
  const { street, suite, city, zipcode } = address;

  const userDiv = document.createElement('div');
  userDiv.id = `user-id-${id}`;
  userDiv.classList.add('user-card');

  const nameHeading = document.createElement('h2');
  nameHeading.classList.add('mb-sm');
  nameHeading.innerText = name;

  const addressParagraph = document.createElement('p');
  addressParagraph.innerText = `${suite} ${street}, ${city} ${zipcode}`;

  userDiv.appendChild(nameHeading);
  userDiv.appendChild(addressParagraph);

  return userDiv;
};

const renderUsers = (users = [], parentNode) => {
  const usersRow = document.createElement('div');
  usersRow.classList.add('row');

  for (const user of users) {
    const userNode = makeUserNode(user);
    usersRow.appendChild(userNode);
  }

  parentNode.appendChild(usersRow);
};

const main = async () => {
  const fetchedUsers = await fetchUsersById([2, 5, 7]);
  const usersContainer = document.getElementById('users-container');
  renderUsers(fetchedUsers, usersContainer);
};

main();
