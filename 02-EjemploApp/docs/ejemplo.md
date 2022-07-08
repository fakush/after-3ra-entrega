# Project: After 3ra pre-entrega
### This is an example of API documentation in postman.

> Run this collection in your local enviromen.
# 📁 Collection: Carts 


## End-point: get user cart
### Method: GET
>```
>http://localhost:8080/api/carts/62c74aa293d4e175b9ad6be5
>```
### Response: 200
```json
[
    {
        "_id": "62c85b6b83d7d55b8792ee2d",
        "user": "62c74aa293d4e175b9ad6be5",
        "carts": [],
        "__v": 0
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: update user cart
### Method: PUT
>```
>http://localhost:8080/api/carts/62c74aa293d4e175b9ad6be5
>```
### Body (**raw**)

```json
{
    "carts": [
        {
            "product": "62c7430bd48a322e49b43a58",
            "amount": 5
        },
        {
            "product": "62c7430bd48a322e49b43a59",
            "amount": 10
        }
    ]
}
```

### Response: 200
```json
{
    "_id": "62c85b6b83d7d55b8792ee2d",
    "user": "62c74aa293d4e175b9ad6be5",
    "carts": [
        {
            "product": "62c7430bd48a322e49b43a58",
            "amount": 5
        },
        {
            "product": "62c7430bd48a322e49b43a59",
            "amount": 10
        }
    ],
    "__v": 0
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: empty user cart
### Method: DELETE
>```
>http://localhost:8080/api/carts/62c74aa293d4e175b9ad6be5
>```
### Body (**raw**)

```json

```

### Response: 200
```json
{
    "_id": "62c85b6b83d7d55b8792ee2d",
    "user": "62c74aa293d4e175b9ad6be5",
    "carts": [],
    "__v": 0
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Products 


## End-point: get all products
### Method: GET
>```
>http://localhost:8080/api/products/
>```
### Body (**raw**)

```json

```

### Response: 200
```json
[
    {
        "_id": "62c7430bd48a322e49b43a57",
        "name": "Oriental Steel Chips",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "code": "tu439",
        "img": "https://loremflickr.com/640/480/technics",
        "price": 88586,
        "stock": 867,
        "__v": 0
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get a single product
### Method: GET
>```
>http://localhost:8080/api/products/wrongproduct
>```
### Body (**raw**)

```json

```

### Response: 200
```json
{
    "_id": "62c7430bd48a322e49b43a57",
    "name": "Oriental Steel Chips",
    "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    "code": "tu439",
    "img": "https://loremflickr.com/640/480/technics",
    "price": 88586,
    "stock": 867,
    "__v": 0
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: post a product
### Method: POST
>```
>http://localhost:8080/api/products/
>```
### Body (**raw**)

```json
{
    "name": "New Steel Chips",
    "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    "code": "tu4a9",
    "img": "https://loremflickr.com/640/480/technics",
    "price": 999,
    "stock": 333
}
```

### Response: 200
```json
{
    "msg": "Adding product: ",
    "data": {
        "name": "New Steel Chips",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "code": "tu4a9",
        "img": "https://loremflickr.com/640/480/technics",
        "price": 999,
        "stock": 333,
        "_id": "62c79061104673accf6457c3",
        "__v": 0
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: update a product
### Method: PUT
>```
>http://localhost:8080/api/products/62c7430bd48a322e49b43a58
>```
### Body (**raw**)

```json
{
    "name": "John Lennon Album",
    "description": "This is a description",
    "code": "3x3x3x",
    "img": "https://loremflickr.com/640/480/technics",
    "price": 888,
    "stock": 111
}
```

### Response: 200
```json
{
    "msg": "Updating Product",
    "data": {
        "_id": "62c7430bd48a322e49b43a58",
        "name": "John Lennon Album",
        "description": "This is a description",
        "code": "3x3x3x",
        "img": "https://loremflickr.com/640/480/technics",
        "price": 888,
        "stock": 111,
        "__v": 0
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Users 


## End-point: user signup
Signup new user
### Method: POST
>```
>http://localhost:8080/api/auth/signup
>```
### Body (**raw**)

```json
{
    "firstName": "Pepe",
    "lastName": "Perez",
    "email": "pepeperez@coder.com",
    "age": 48,
    "isAdmin": false,
    "password": "password"
}
```

### Response: 200
```json
{
    "msg": "signup successful"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: user login
### Method: GET
>```
>http://localhost:8080/api/auth/login
>```
### Body (**raw**)

```json
{
    "email": "pepeperez@coder.com",
    "password": "password"
}
```

### Response: 200
```json
{
    "msg": "login successful"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
