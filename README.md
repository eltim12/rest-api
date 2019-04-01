# rest-api

------

## API Documentation:

#### List of Basic routes:

| Route                                             | HTTP   | Body                                                         | Description            |
| ------------------------------------------------- | ------ | ------------------------------------------------------------ | ---------------------- |
| <span style="color:#FF69B4">/api/users</span>     | GET    |                                                              | Get all the users info |
| <span style="color:#FF69B4">/users/:id</span>     | GET    |                                                              | Find a user with id    |
| <span style="color:#FF69B4">/api/users</span>     | POST   | username:String(required)<br /><br />email:String(required)<br />passsword:String(required) | Create a new User      |
| <span style="color:#FF69B4">/api/users/:id</span> | PUT    | username:String<br />email:String<br />password:String       | Update a user          |
| <span style="color:#FF69B4">/api/users/:id</span> | DELETE |                                                              | Delete a user          |
|                                                   |        |                                                              |                        |
| <span style="color:#FF69B4">/api/login</span>     | POST   | username:String(required)<br />password:String(required)     | Login and get token    |
| <span style="color:#FF69B4">/api/register</span>  | POST   | username:String(required)<br />email:String(required)<br />password:String(required) | Register a new user    |

## Usage

Make sure you have Node.js and npm installed in your computer, and then run this commands in both client and server folders:

```
$npm install
```

```
$nodemon app
```



 Access the Server side via http://localhost:3000/ or <https://blueberry-crumble-46845.herokuapp.com/>