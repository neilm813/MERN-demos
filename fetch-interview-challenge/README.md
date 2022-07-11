# Fetch Button Interview Challenge

Please develop a simple web page that contains a button, that when clicked, makes a call to a REST endpoint to retrieve data. Once the data is retrieved, the page should display the data on the page in a table or div or span, etc.

## Technical requirements

- You can use either javascript or React
- The page just needs to run on a local environment (no need to deploy it to a hosted server)
- The page should not reload to display the data - it should be injected directly on the page after the call returns
- You can use an REST API to get the data. [Here are some random free ones you can call](https://apipheny.io/free-api/).
- You're welcome to write your own REST endpoint, but that is not required.
- Apply some css styling to the button page. We're not looking for a master piece, but rather some rudimentary styling.

## Demo Walk-through

- This encompasses [Pokemon API](https://login.codingdojo.com/m/130/6322/44711) assignment.
- This repo is linked to [interview-challenges project](https://github.com/orgs/TheCodingDojo/projects/1)
- Normally for this course, I avoid shorthand syntax to avoid unnecessary confusion from small syntax variations. However, in this example I want to write code that won't make the potential employer wonder if I only know long-form syntax.

### Goals

- Click to fetch from API and set state to the fetched data to update the page without a page reload.
- Teach how to approach a simple interview challenge like this one.
- Show discrete, descriptive, and frequent commits.
- Start simple and clean, then refactor and polish.