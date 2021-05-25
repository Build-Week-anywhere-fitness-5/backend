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

### Classes Schema

Make sure you are sending data to the database as structure below:

{
"class_name": "Muscle Maker", &nbsp;&nbsp;&nbsp;&nbsp; (Required, class name must be unique, sending name that already exist in the database will cause an error)
"type": "Strength", &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp(Not required, if you don't fill it in, database will return null)
"date": "2021-05-22T04:00:00.000Z", &nbsp;&nbsp;&nbsp;(Required, must be in this format "2021-05-22")
"start_time": "9:30 AM", &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Required, can be in any format)
"duration_mins": 30,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp(Not required, must be number only)
"intensity": "Medium",&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nb(Not required)
"location": "Fallsgrove Park", &nbsp;&nbsp;&nbsp;&nbsp;(Required)
"current_registered": 3, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Not required, set default to 0)
"max_class_size": 15&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp(Not required, must be number)
}

### Classes

|  CRUD  | METHOD | ROUTE                | Description             |
| :----: | :----: | -------------------- | ----------------------- |
|  Read  |  GET   | /api/classes         | get all classes         |
|  Read  |  GET   | /api/class/:class_id | get one class by its id |
| Create |  POST  | /api/classes         | create new class        |
| Update |  PUT   | /api/class/:class_id | edit class information  |
| Delete | DELETE | /api/class/:class_id | delete class by id      |
