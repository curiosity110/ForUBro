# Topics

## HTTP Requests recap

Questions

- Example of a HTTP request?
- What type of requests do you know? (GET, POST, PATCH, DELETE)
- What type of answers do you know? (200, ...)

### Requests in the browser

- sit.academy
- api.itbook.store example

### Requests with postman

POSTMAN is a free software for API testing and exploring. Before you build a frontend, you need to know what you will receive from an API. Here is where Postman will help you.

- Example: api.itbook.store
- pingpong for POST-request (PATCH, DELETE)

### Requests with fetch in a react app

Most basic JS build-in function for API-calls. Response needs to be converted "manually" in proper format like JSON.

- api.itbook.store example

### Requests with axios in a react app

Axios is a lightweight HTTP client. It is similar to the Fetch API and is used to perform HTTP requests. Advantage of Axios over Fetch API:

- supports older browsers (fetch-function is supported on newer browsers)
- has a way to abort a request (stop a request)
- has a way to set a response timeout (stop a request in case it takes too long)
- performs automatic JSON data transformation.

Example: api.itbook.store/1.0/new

## Lifecylce methods

- important to know that they exist for further usage during the bootcamp
- there are lot!

### componentDidMount() (the birth)

functions that needs to be called when the component loads, like initial API calls
-> fetch all starwars movies, show all new books

- What options do we have to trigger a component's trigger function? (change state or props)

### componentDidUpdate() (the growth)

- gets called after a component did update

### componentWillUnmount() (the death)

- componentWillUnmount -> to do some cleanup such as invalidating timers, canceling network requests
- example with timer on different components

## Example with IT Books or SWAPI

- componentDidMount
- fetch data with axios
- setState to store the data
- map to show the data
- optional: with button that start the API call

---

- delete StrictMode in App
