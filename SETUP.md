## Set Up Project

In **root directory**

```bash
  touch server.js
  npm init -y
```

## Set Up GraphQL and Express

### Install Dependencies

In **root directory**

```bash
  npm i express express-graphql graphql # Required
  npm i -D nodemon # Dev Dependency
  npm i cors # Might need
  npm i concurrently # Optional
```

### Edit Files

#### `package.json`

```json
/* Set Scripts */
"scripts": {
  "start": "node server.js",
  "server": "nodemon server.js"
}
```

### Run Locally

In **root directory**

```bash
  npm run server # localhost:5000/graphql
```

---

## Set Up React

```bash
  npx create-react-app client
  cd client
```

### Install Dependencies

In **/client**

```bash
  npm i express express-graphql graphql # Required
  npm i -D nodemon # Dev Dependency
  npm i cors # Might need
```

### Edit Files

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

### Run Locally

In **/client**


```bash
  npm start # localhost:3000
```

---

## Set Up Apollo

### Install Dependencies

In **/client**

  ```bash
    npm i @apollo/client graphql # Required
    npm i classnames moment react-moment react-router-dom # Extras for this project
  ```

---

### Run Locally

| Location    | Command           | Runs           | URL                             | Access   |
| :---------- | :--------------   | :------------- | :------------------------------ | :------- |
| root    |  `npm run server` | **Server**     | *http::/localhost/5000/graphql* | GraphiQL |
| /client | `npm start`       | **Front End**  | *http::/localhost/3000*         | Site     |
| root    | `npm run dev`     | **Both**       | *http::/localhost/3000*         | Site     |
