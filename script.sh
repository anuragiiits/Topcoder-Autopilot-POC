#!/bin/bash

#Please change the execution_time as per your time in UTC time zone in YYYY-MM-DDTHH:MM:SSZ format

curl -X POST \
  http://127.0.0.1:3000/events \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: e32b6291-670f-fe81-f2b5-0d2b24c1192b' \
  -d '{
  "verb": "POST",
  "host": "jsonplaceholder.typicode.com",
  "path": "/posts",
  "payload": "{ title: '\''foo'\'', body: '\''bar'\'', userId: 1 }",
  "headers": "",
  "execution_time": "2019-09-20T19:32:00Z"  
}'

curl -X POST \
  http://127.0.0.1:3000/events \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: cf004e19-e45b-6923-c20f-121a80a21266' \
  -d '{
  "verb": "GET",
  "host": "jsonplaceholder.typicode.com",
  "path": "/posts/1",
  "payload": "{ title: '\''foo'\'', body: '\''bar'\'', userId: 1}",
  "headers": "",
  "execution_time": "2019-09-20T19:12:00Z"
}'
