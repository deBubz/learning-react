# Starting

- create react with `npx create-react-app <name>`
- go in folder, create `backend` folder, create node 
  - `npm init -y`
  - install packages
  - `npm install express cors mongoose dotenv`
  - `npm install -g nodemon`
    - tool for node to automatically update every file change
    - make `server.js` in backend
    - start with `nodemon server`
    - use the file `.env` to set environments, secrets, and connection strings (make sure the file is in `.gitignore`)
- in `backend` mkdir `model` to handle mongoose schema
  - create `user.model.js`
  - create `user.exercise.js`