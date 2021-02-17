require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(express.json());

//get
app.get("/api/v1/restaurants", (req, res) => {
  console.log("route worked");
  res.status(200).json({
    status: "successful",
    data: {
      restaurant: ["jade garden", "sake"],
    },
  });
});

//get a restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params);

  res.status(200).json({
    status: "success",
    data: {
      restaurant: "popeyes",
    },
  });
});

//create
app.post("/api/v1/restaurants", (req, res) => {
  console.log(req.body);

  res.status(201).json({
    status: "success",
    data: {
      restaurant: "popeyes",
    },
  });
});

//update

app.put("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.status(200).json({
    status: "success",
    data: {
      restaurant: "popeyes",
    },
  });
});

//delete

app.delete("/api/v1/restaurants/:id", (req, res) => {
  res.status(204).json({
    status: "success",
  });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
