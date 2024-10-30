const express = require("express");
const uuid = require("uuid").v4;
const cors = require("cors");
const morgan = require('morgan')
const PORT = 3001;

const app = express();

app.use(express.json());
app.use(morgan('dev'))

app.use(
  cors({
    origin: "*",
    methods: "*",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

let db = {
  consignment: {},
};

app.get("/consignment", (req, res) => {
  return res.status(200).send(db["consignment"]);
});

app.post("/consignment", (req, res) => {
  let consignment = req.body;

  Object.keys(consignment).forEach((field) => {
    if (
      consignment[field] === null ||
      consignment[field] === undefined ||
      consignment[field] === ""
    ) {
      return res.status(422).json({
        message: "Invalid data",
        error: `This field: ${field} cannot be empty, problem creating consignment!`,
      });
    }
  });

  let consignmentId = uuid();
  db["consignment"][consignmentId] = consignment;

  return res.status(201).json({
    data: consignment
  });
});

app.put("/consignment/:id", (req, res) => {
  let consignment = db["consignment"][req.params.id];

  if (!req.params.id) {
    return res.json({ message: "Please provide an id" });
  }

  Object.keys(req.body).forEach((field) => {
    consignment[field] = req.body[field];
  });

  db["consignment"][req.params.id] = consignment;

  return res.status(200).json({ message: consignment });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
