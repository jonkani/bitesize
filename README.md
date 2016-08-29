# Bitesize

Bitesize is a quick restaurant finder that takes a minimum of inputs and gives a minimum of outputs so as to cut down on the number of decisions one has to make when one really just wants something to eat. It's best viewed on mobile, but it'll work on desktop, too.

It uses Yelp's API to provide results, so if you're interested in trying it out locally, sign up for an API key [here](https://www.yelp.com/developers/) and populate an env file with your CONSUMER_KEY, CONSUMER_SECRET, USER_TOKEN, and USER_SECRET.

Bitesize lives on a Node.js Express server, uses a PostgreSQL database to store user preferences, and had its front-end built in React with some help from Material-UI.
