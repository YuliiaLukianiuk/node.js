const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const all = require('./routes/all.js');
app.use("/api", all);
db.sequelize.sync().then(() => {
  app.listen(PORT, () =>{
    console.log("Lisning PORT 3000");
  })
})