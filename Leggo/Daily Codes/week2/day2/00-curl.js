/**
 * 01 - CURL  
 */ 

// GET 
curl https://jsonplaceholder.typicode.com/todos/201
curl https://jsonplaceholder.typicode.com/todos/201 -v  // verbose

// POST c
curl -X POST -H "Content-type: application/json" --data '{"title": "Learn Curl"}' https://jsonplaceholder.typicode.com/todos

// PUT
curl -X PUT -H "Content-type: application/json" --data '{"title": "Learn Curl v2"}' https://jsonplaceholder.typicode.com/todos/200

// DELETE
curl -X DELETE https://jsonplaceholder.typicode.com/todos/200


// Postman