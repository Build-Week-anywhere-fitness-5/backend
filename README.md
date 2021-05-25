Backend for Build week ptct-anywhere-fitness-5 project <br/>
baseURL: https://backend-ptct-anywhere-fitness.herokuapp.com/

### Register Schema

(/api/auth/register)<br/>
Send a .post() to the endpoint with the following information.<br/>
Make sure you are sending data to the database as structure below:

```js
{
"username": "Alice2001",
"password": "testalice",
"role": "client"
}

or

{
"username": "Marshall1999",
"password": "testmarshall",
"role": "instructor"
}

```

### Login Schema

(/api/auth/login)<br/>
Send a .post() to the endpoint with the following information:<br/>
Make sure you are sending data to the database as structure below:

```js
{
"username": "Alice2001",
"password": "testalice"
}
```

You will receive a token back for authentication<br/>

### USERS

|  CRUD  | METHOD | ROUTE              | SEND TO DB                                           |
| :----: | :----: | ------------------ | ---------------------------------------------------- |
| Create |  POST  | /api/auth/login    | {username(string) , password(string)                 |
| Create |  POST  | /api/auth/register | {username(string) , password(string), role(string) } |

### Classes

|  CRUD  | METHOD | ROUTE                | SEND TO DB |                         |
| :----: | :----: | -------------------- | ---------- | ----------------------- |
|  Read  |  GET   | /api/classes         | n/a        | get all classes         |
|  Read  |  GET   | /api/class/:class_id | n/a        | get one class by its id |
| Create |  POST  | /api/classes         | n/a        | create new class        |
| Update |  PUT   | /api/class/:class_id | n/a        | edit class information  |
| Delete | DELETE | /api/class/:class_id | n/a        | delete class by id      |
