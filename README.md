# [GraphQL, Express, React and Apollo (TM)](https://www.youtube.com/watch?v=SEMTj8w04Z8&list=PL7ylyjdMxsUPr2bq1xhPy9JKqfNpUI7VV&index=4)

## Set Up Project

### Initialize Project
`npm init`


## Set Up GraphQL and Express

### Add Dependencies
In **root directory**
- `npm i express`
- `npm i express-graphql`
- `npm i graphql`
- `npm i cors`
- `npm i -D nodemon`

### File Set Up

#### `package.json`
```json
/* Set Scripts */
"scripts": {
  "start": "node server.js",
  "server": "nodemon server.js"
}
```

### Start Up Server
- `npm run server`
  - 'localhost/5000/graphql' provides us with our graphiql interface


## Set Up React
- `npx create-react-app client`

### Add Dependencies
In **root directory**
- `npm i concurrently`

### File Set Up

#### `package.json`
```json
/* Add to Scripts */
"scripts": {
  /* "start": "node server.js", */
  /* "server": "nodemon server.js", */
  "client": "npm start --prefix client",
  "dev": "concurrently \"npm run server\" \"npm run client\""
}
```

#### `index.html`
```html
<!-- Bootswatch from BootStrap -->
<link rel="stylesheet" href="https://bootswatch.com/4/cyborg/bootstrap.min.css"/>
```

#### `.gitignore`
Add `/client`

### Start Up Both Servers
- In **root directory**
- `npm run dev`
  - 'localhost/5000/graphql' to access GraphiQL
  - 'localhost/3000' to access our front end app


## Set Up Apollo

### Add Dependencies
In **`/client`**
- `npm i @apollo/client`
  - Integration with React
- `npm i graphql`
  - Integration with GraphQL
- `npm i apollo-boost`
  - Everything to set up Apollo (might not need this)


### Add More Dependencies
In **`/client`**
- `npm i classnames`
- `npm i moment`
  - Date formatting
- `npm i react-moment`
  - Date formatting with react
- `npm i react-router-dom`
---

### Resources
- [Get Started with Apollo and React](https://www.apollographql.com/docs/react/get-started/)
