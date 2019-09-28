# REST APIs built with Express JS

## Setup
1. Clone this repository with `git clone git@github.com:gersly/rest-api.git`.
1. Install the dependencies with `npm install `.
1. Run using Node.

## Dependencies 
1. ExpressJS 
1. PostgreSQL
1. Body Parser
1. Sequelize ORM

## FILE: messages-api.js
### Routes
1. POST `:3000/messages`

### HTTP STATUS CODES
`200 - OK`
`429 - TOO MANY REQUESTS`
`400 - BAD REQUEST`

## FILE: sequelize-rest.js
### Movie object (example)
```javascript
   {
      "title": "Goal! The Dream Begins",
      "yearOfRelease": 2005,
      "synopsis": "The extremely talented Santiago Munez is given a chance at professional football, after being spotted by a scout who has ties with Newcastle United."

   }
   ```

### Routes
1. Homepage =  GET `/`
1. Read all movie (collection) = GET `/movies`
1. Read a single movie resource = GET `/movies/:id`
1. Delete a single movie resource = DELETE `/movies/:id`
1. Update a single movie resource = PUT `/movies/:id title=STRING yearOfRelease=NUMBER synopsis=STRING` (choose between `title`,`yearOfRelease`,`synopsis` or all 3)
1. Create a new movie resource = POST `/movies/:id title=STRING yearOfRelease=NUMBER synopsis=STRING`

### HTTP STATUS CODES
`200 - OK`
`201 - CREATED`
`204 - NO CONTENT`
`400 - BAD REQUEST`
`404 - NOT FOUND`
`422 - UNPROCESSABLE ENTITY`

