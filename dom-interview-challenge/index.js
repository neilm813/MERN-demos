/* 
Using this API https://jsonplaceholder.typicode.com/
and ONLY vanilla js
Fetch the users with the following ids: 2, 5, 7
Fetch each of the above users posts
Display the fetched users in the div#users-container with each user in a column
with their posts in the column under the user info.
You can use use the below HTML & CSS for display purposes

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .row {
    display: flex;
    margin: 10px;
  }
  .user-card {
    border-radius: 5px;
    padding: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    margin: 10px;
  }
  .user-posts-container {
    border-top: 1px solid black;
    padding-top: 1.5rem;
  }
  .post {
    padding: 0.75rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    border-radius: 5px;
    margin-bottom: 0.75rem;
  }
  .mb-sm {
    margin-bottom: 5px;
  }
</style>

<div id="users-container">
  <div class="row">
    
    <div class="user-card">
      <h2 class="mb-sm">user.name</h2>
      <p>user address on one line</p>
      <div class="user-posts-container">
        <h3 class="mb-sm">Posts</h3>
        <div class="post">
          <h4>post.title</h4>
          <p>post.body</p>
        </div>
      </div>
    </div>
    <div class="user-card">
      <h2 class="mb-sm">user.name</h2>
      <p>user address on one line</p>
      <div class="user-posts-container">
        <h3 class="mb-sm">Posts</h3>
        <div class="post">
          <h4>post.title</h4>
          <p>post.body</p>
        </div>
      </div>
    </div>
  </div>
</div>
*/

/*****************************************************************************/

const apiBaseUrl = 'https://jsonplaceholder.typicode.com';

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

function makeUserNode(user) {
  const userDiv = document.createElement('div');
  userDiv.id = `user-id-${user.id}`;
  userDiv.classList.add('user-card');

  const nameHeading = document.createElement('h2');
  nameHeading.classList.add('mb-sm');
  nameHeading.innerText = user.name;

  const addressParagraph = document.createElement('p');

  // user.address repetition can be avoided by destructuring.
  addressParagraph.innerText = `${user.address.suite} ${user.address.street}, ${user.address.city} ${user.address.zipcode}`;

  userDiv.appendChild(nameHeading);
  userDiv.appendChild(addressParagraph);

  return userDiv;
}

function renderUsers(users = [], parentNode) {
  const usersRow = document.createElement('div');
  usersRow.classList.add('row');

  for (const user of users) {
    const userNode = makeUserNode(user);
    usersRow.appendChild(userNode);
  }

  // users
  //   .map((user) => makeUserNode(user))
  //   .forEach((userNode) => usersRow.appendChild(userNode));

  parentNode.appendChild(usersRow);
}

async function fetchUser(userId) {
  const url = `${apiBaseUrl}/users/${userId}`;

  try {
    const res = await fetch(url);
    const user = await res.json();
    return user;
  } catch (error) {
    console.log(error);
  }
}

async function fetchUsers(userIds = []) {
  // Don't await yet because we want to request each user at the same time
  // so they aren't delayed waiting 1-by-1
  const userFetchPromises = userIds.map((id) => fetchUser(id));
  const settledUserPromise = await Promise.allSettled(userFetchPromises);
  return settledUserPromise;
}

async function main() {
  const settledUsers = await fetchUsers([2, 5, 7]);

  const users = settledUsers
    .filter((outcome) => outcome.status === 'fulfilled')
    .map((fulfilledOutcome) => fulfilledOutcome.value);

  const rejectedReasons = settledUsers
    .filter((outcome) => outcome.status === 'rejected')
    .map((rejectedOutcome) => rejectedOutcome.reason);

  console.log('rejected user requests', rejectedReasons);
  console.log('fulfilled users', users);

  renderUsers(users, document.getElementById('users-container'));
}

main();
