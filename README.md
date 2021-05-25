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

When you send .post or .put, please make sure you are sending data to the database as structure below:

```js
{
"class_name": "Muscle Maker",
"type": "Strength",
"date": "2021-05-22T04:00:00.000Z",
"start_time": "9:30 AM",
"duration_mins": 30,
"intensity": "Medium",
"location": "Fallsgrove Park",
"current_registered": 3,
"max_class_size": 15
}
```

| Properties         | Schema                                                                                                   |
| ------------------ | -------------------------------------------------------------------------------------------------------- |
| class_name         | Required, class name must be unique, sending name that already exist in the database will cause an error |
| type               | Not required, if you don't fill it in, database will return null                                         |
| date               | Required, must be in this format "2021-05-22"                                                            |
| start_time         | Required, can be in any format                                                                           |
| duration_mins      | Not required, must be number only                                                                        |
| intensity          | Not required                                                                                             |
| location           | Required                                                                                                 |
| current_registered | Not required, set default to 0                                                                           |
| max_class_size     | Not required, must be number                                                                             |

### Classes

|  CRUD  | METHOD | ROUTE                | Description             |
| :----: | :----: | -------------------- | ----------------------- |
|  Read  |  GET   | /api/classes         | get all classes         |
|  Read  |  GET   | /api/class/:class_id | get one class by its id |
| Create |  POST  | /api/classes         | create new class        |
| Update |  PUT   | /api/class/:class_id | edit class information  |
| Delete | DELETE | /api/class/:class_id | delete class by id      |
