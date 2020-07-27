# Backend

API endpoints

Post
Register user
https://hackernewsbw31.herokuapp.com/api/auth/register

returns
--{
    "data": {
        "id": 7,
        "username": "blankUser",
        "email": "mewemail.com",
        "password": "$2a$08$/rWDLzLCFXk7wrtbt3vWweO7s0QeFtcy5ZDwt.aiC/d/twjAMN/oW"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo3LCJ1c2VybmFtZSI6ImJsYW5rVXNlciIsImVtYWlsIjoibWV3ZW1haWwuY29tIiwiaWF0IjoxNTk1ODY2NzAxLCJleHAiOjE1OTU4NzAzMDF9.JxdN5ss-qk0ATw5U_KFplI0ssejazdeW5tLmvxGmoLg"
}

Username not required, but recomended

Post
https://hackernewsbw31.herokuapp.com/api/auth/login
Login user
returns

--{
    "message": "Welcome to our API",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo3LCJ1c2VybmFtZSI6ImJsYW5rVXNlciIsImVtYWlsIjoibWV3ZW1haWwuY29tIiwiaWF0IjoxNTk1ODY2ODQxLCJleHAiOjE1OTU4NzA0NDF9.uyCyOuninXY4gBpQFrTzuzPHsyqXgir-94qwZLpXrEo"
}

Get
https://hackernewsbw31.herokuapp.com/api/profile
get users profile-protected
returns
-- [
    {
        "id": 1,
        "username": "user1",
        "email": "email1@gmail1.com",
        "password": "password"
    },
    {
        "id": 2,
        "username": "user2",
        "email": "email1@gmail2.com",
        "password": "password"
    }
]

Get
https://hackernewsbw31.herokuapp.com/api/profile/list
get users profile without password-protected
returns
--[
    {
        "id": 1,
        "username": "user1",
        "email": "email1@gmail1.com"
    },
    {
        "id": 2,
        "username": "user2",
        "email": "email1@gmail2.com"
    }
]

Get
https://hackernewsbw31.herokuapp.com/api/profile/profile
get logged in user profile- mostly to verify that you are logged in-- not really production ready protected
returns
--{
    "data": "undefined",
    "jwt": {
        "subject": 7,
        "username": "blankUser",
        "email": "mewemail.com",
        "iat": 1595866841,
        "exp": 1595870441
    }
}

Get
https://hackernewsbw31.herokuapp.com/api/profile/1/comments
get comments from specific profile(use params)----Dummy data
returns
--[
    {
        "username": "user1",
        "email": "email1@gmail1.com",
        "comment": "full of troll like comments2",
        "troll_name": "troll2",
        "karma": 300
    },
    {
        "username": "user1",
        "email": "email1@gmail1.com",
        "comment": "full of troll like comments1",
        "troll_name": "troll1",
        "karma": 750
    }
]
Get
https://hackernewsbw31.herokuapp.com/api/comments
get list of comments from haker news api-can map through for data you need---Dummy data
returns
--[
    {
        "created_at": "2020-07-27T16:32:33.000Z",
        "title": null,
        "url": null,
        "author": "dencodev",
        "points": null,
        "story_text": null,
        "comment_text": "Sorry if this is a downer, but honestly even if I wanted a new job immediately I think it would take many many months to find one. I&#x27;m planning on it taking up to a year. I&#x27;ve been looking at job boards a lot and even for developer jobs, they&#x27;re really only hiring senior level positions right now and I&#x27;m sure the rare non-senior position is extremely competitive. My last two roles have both been senior, but I would very much be junior for anything outside web development (which I no longer want to do).",
        "num_comments": null,
        "story_id": 23964539,
        "story_title": "How popular media portrays the employability of older software developers",
        "story_url": "https://arxiv.org/abs/2004.05847",
        "parent_id": 23966205,
        "created_at_i": 1595867553,
        "_tags": [
            "comment",
            "author_dencodev",
            "story_23964539"
        ],
        "objectID": "23966666",
        "_highlightResult": {
            "author": {
                "value": "dencodev",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "Sorry if this is a downer, but honestly even if I wanted a new job immediately I think it would take many many months to find one. I'm planning on it taking up to a year. I've been looking at job boards a lot and even for developer jobs, they're really only hiring senior level positions right now and I'm sure the rare non-senior position is extremely <em>compet</em>itive. My last two roles have both been senior, but I would very much be junior for anything outside web development (which I no longer want to do).",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "comment"
                ]
            },
            "story_title": {
                "value": "How popular media portrays the employability of older software developers",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_url": {
                "value": "https://arxiv.org/abs/2004.05847",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
]

Delete
https://hackernewsbw31.herokuapp.com/api/profile/5
deletes user profile by id(use params)---

Put
https://hackernewsbw31.herokuapp.com/api/profile/4
updates user info---will not update email address if its the same one thats already in the db. you are able to update the username seperatly 

