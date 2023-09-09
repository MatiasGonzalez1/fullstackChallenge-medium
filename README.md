# REST MUSIC API

- In this project i building an rest api using Node.js, Express, Docker and Postgres.

## To run the back end of this project 

1. Clone the repository

```
https://github.com/MatiasGonzalez1/fullstackChallenge-medium.git
```

2. Enter the back end project directory:

```
cd Back
```

3. Install the dependencies:
```
npm install
```
4. create a .env file in the root directory with the next info:

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5434/medium?schema=public"
PORT=3000
```

5. Run Docker Aplication.

6. Create and up the container:

```
docker compose up
```
 7. Run the project:

```
npm run dev
```

## To run the front end of this project 

1. While the back end is run

2. Enter the front end project directory:
```
cd front-end
```

3. Install the dependencies:
```
npm install
```

5. Run vites aplication:
```
npm run dev
```

### Routes: 
* POST /api/register (Create an user) 
* LOGIN /api/login (Login)