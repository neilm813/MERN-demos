/* 
Using this API https://jsonplaceholder.typicode.com/
and ONLY vanilla js

Fetch the users with the following ids: 2, 5, 7
Fetch each of the above users posts

Display the fetched users in the div#users-container with each user in a column
with their posts in the column under the user info.

You can use use the below HTML & CSS for display purposes
*/

const apiBaseUrl = 'https://jsonplaceholder.typicode.com';

const mockUsers = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
    },
  },
];

function makeUserNode(user) {
  const { id, name, address } = user;
  const { suite, street, city, zipcode } = address;

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
}

/**
 * @param {any[]} users
 * @param {HTMLElement} parentNode
 */
function renderUsers(users = [], parentNode) {
  const usersRow = document.createElement('div');
  usersRow.classList.add('row');

  for (const user of users) {
    const userNode = makeUserNode(user);
    usersRow.appendChild(userNode);
  }

  parentNode.appendChild(usersRow);
}

async function fetchUser(userId) {
  const url = `${apiBaseUrl}/users/${userId}`;

  console.log('fetchUser');

  try {
    const res = await fetch(url);
    const user = await res.json();
    return user;
  } catch (error) {
    console.log(error);
  }
}

async function fetchUsers(userIds = []) {
  const userPromises = userIds.map((id) => fetchUser(id));
  return await Promise.allSettled(userPromises);
}

async function main() {
  const settledUserOutcomes = await fetchUsers([2, 5, 7]);
  const users = settledUserOutcomes
    .filter((outcome) => outcome.status === 'fulfilled')
    .map((outcome) => outcome.value);

  renderUsers(users, document.getElementById('users-container'));
}

main();
