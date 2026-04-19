
This is a simple backend project built using (node.js, express, Sequelize, and mysql db)
and it shows basic things like models, relationships, and CRUD operations (get,post,delete,put,update).
in this project i used two models (user and order) with a one to many relation.

# how to run the project
first option (using docker):
1- make sure you have these softwares are installed (node.js, docker). 
clone to the repo and open the project file then run 
```bash
docker compose up --build
```
and you will see a message 
Server will start on: http://localhost:3000.
open the browser and go to (http://localhost:3000).

second option (without docker):
2- you can also run the project without using docker software.
```bash
npm install
npx sequelize db:migrate
npm run dev
```

# API Endpoints
All APIs end points got tested using postman, all works.

for users
GET /users to get all users
POST /users to create user
PUT /users/:id to update user
DELETE /users/:id to delete user

for orders
GET /orders to get all orders
POST /orders to create order
PUT /orders/:id to update order
DELETE /orders/:id to delete order

for example
Creating User
POST /users
{
  "name": "murad",
  "email": "murad@example.com"
}

POST /orders
{
  "title": "Order 1",
  "price": 50,
  "userId": 1
}

