# RESTful API
This is a simple REST API application. It is a set of posts and their description. There are 4 main methods supported: GET, POST, PUT, DELETE.

> Use this link to test:<br>
> https://rest-api010101.herokuapp.com

---

## GET

To get information about all existing posts use GET method

`https://rest-api-1212.herokuapp.com/api/posts`

In response, something like
```
{
        "_id": "619bc818c6305f57c5cef06a",
        "title": "POST 1",
        "description": "This is new description 1",
        "date": "2021-11-22T16:40:56.093Z",
        "__v": 0
    },
    {
        "_id": "619bd3827bf9e8382b0d87f2",
        "title": "POST 2",
        "description": "This is new description 2",
        "date": "2021-11-22T17:29:38.994Z",
        "__v": 0
    },
    {
        "_id": "619cb5d74579dc8777bf87d5",
        "title": "POST 3",
        "description": "This is new description 3",
        "date": "2021-11-23T09:35:19.272Z",
        "__v": 0
    }
]
```

You can also get information on one post, for this use GET method + id

`https://rest-api-1212.herokuapp.com/api/posts/619bc818c6305f57c5cef06a`

Response:

```
{
    "_id": "619bc818c6305f57c5cef06a",
    "title": "POST 1",
    "description": "This is new description",
    "date": "2021-11-22T16:40:56.093Z",
    "__v": 0
}
```

---
## POST

To create a post using the POST method. For example, I will use the API testing program [Postman](https://www.postman.com)

![image](https://raw.githubusercontent.com/p-a-s-h-k-a/Simple-REST-API/master/git-img/photo_2021-11-26_20-03-14.jpg)


To make sure everything is saved, request the created post by its id using the GET method.

`https://rest-api-1212.herokuapp.com/api/posts/61a11be6ea8610bb43a2c449`

Response:

```
{
    "_id": "61a11be6ea8610bb43a2c449",
    "title": "This is my post",
    "description": "It`s my description",
    "date": "2021-11-26T17:39:50.019Z",
    "__v": 0
}
```
---
## PUT

To update the information, use the PUT request type and do not forget to specify the id. 

![image](https://github.com/p-a-s-h-k-a/Simple-REST-API/blob/master/git-img/photo_2021-11-26_20-03-19.jpg?raw=true)

Checking changes:
```
{
    "_id": "61a11be6ea8610bb43a2c449",
    "title": "This is my firs post!",
    "description": "It`s my description",
    "date": "2021-11-26T17:39:50.019Z",
    "__v": 0
}
```
---
## DELETE
To delete a post, use the DELETE method + post id

![image](https://github.com/p-a-s-h-k-a/Simple-REST-API/blob/master/git-img/photo_2021-11-26_20-03-23.jpg?raw=true)

Checking the method work 

![image](https://github.com/p-a-s-h-k-a/Simple-REST-API/blob/master/git-img/photo_2021-11-26_20-03-26.jpg?raw=true)

