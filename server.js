const express = require("express");
const app = express();
const db = require("./models");

app.use(express.json());
app.use("/users", require("./route/userRoutes"));
app.use("/orders", require("./route/orderRoutes"));

app.get("/", (request, response) => {
  response.send("API is working");
  
});

db.sequelize.sync({ alter: true })
  .then(() => {
    console.log("Database connected");
    app.listen(3000, () => {
      console.log("Server running on http://localhost:3000");
    });

  })

  .catch((err) => {
    console.log("Database connection failed:", err.message);
    
  });