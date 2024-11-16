const express= require('express');
const app = express();
const port= process.env.PORT || 4000;
const routes = require('./route');
const db=require('./DB');

  app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  });
  app.use(express.json());   
  app.use("/api",routes);