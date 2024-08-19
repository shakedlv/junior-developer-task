
# Junior Developer Home Task

### Objective:
The goal of this task is to assess your problem-solving skills, creativity, and understanding of key web development concepts. The task involves both front-end (React) and back-end (Node.js) components.

### Task Overview:
You are required to build a simple full-stack application. The application should allow users to input a list of URLs, fetch metadata (title, description, and an image) for each URL, and display the results on the front-end.


## Installation and Usage

clone github repo
```bash
git clone shakedlv/junior-developer-task
```

### Frontend
cd to frontend folder
```bash
  cd frontend
```

Install dependencies with npm

```bash
  npm i
```

Run the client

```bash
  npm start
```

### Backend
cd to backend folder
```bash
  cd backend
```

Install dependencies with npm

```bash
  npm i
```

Run the server

```bash
  npm start
```
    
## Features

#### Fetching website metadata: 
Provides api endpoint and a client web application to fetch metadata from website using proivided url.
#### Data Validation: 
Implements validation rules to ensure url is valid.



## Technologies Used
### Backend
- Node Js with express
- [helmet](https://www.npmjs.com/package/helmet) - for better server security
- [cheerio](https://cheerio.js.org/) - easy to use html parser
### Frontend
- React 
- [Axios](https://www.npmjs.com/package/axios) - api fetch

## Design  Choises
### Axios vs Fetch
Axios provide a simpler way for fetching data from an api,
In my opinion axios uses a cleaner code snippet, that cen be reused in a larger scale project 
## Testing - Jest
Jest is a JavaScript testing framework simple and easy to use.

### Frontend 

To run test:
```bash
  npm test
```

### Backend 

To run test:
```bash
  npm test
```
## To Do
- Security: Ensure that the application is secure against common web vulnerabilities (CSRF).
- Disable Submit button until 3 urls are valid
