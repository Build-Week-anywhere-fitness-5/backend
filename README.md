Backend for Build week ptct-anywhere-fitness-5 project <br/>
baseURL: https://backend-ptct-anywhere-fitness.herokuapp.com/

(/api/auth/register)<br/>
Send a .post() to the endpoint with the following information.<br/>
{<br/>
username: string, required, unique<br/>
password: string, required<br/>
role: string, required<br/> (instructor or client)
}<br/>

(/api/auth/login)<br/>
Send a .post() to the endpoint with the following information:<br/>
{<br/>
username: string, required<br/>
password: string, required<br/>
}<br/>
You will receive a token back for authentication<br/>

### USERS

|  CRUD  | METHOD | ROUTE              | SEND TO DB                                           |
| :----: | :----: | ------------------ | ---------------------------------------------------- |
| Create |  POST  | /api/auth/login    | {username(string) , password(string)                 |
| Create |  POST  | /api/auth/register | {username(string) , password(string), role(string) } |

### Classes

| CRUD | METHOD | ROUTE        | SEND TO DB |
| :--: | :----: | ------------ | ---------- |
| Read |  GET   | /api/classes | n/a        |
