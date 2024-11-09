// Imports
const express = require("express");
const uuid = require("uuid").v4;
const cors = require("cors");
const morgan = require("morgan");
const PORT = 3001;

// Initialize an Express application instance
const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

app.use(
  cors({
    origin: "*",
    methods: "*",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// db for storing data(consignments)
let db = [];

// GET route to return all consignments
app.get("/consignment", (req, res) => {
  // Return all consignments stored in db
  return res.status(200).send(db);
});

// GET route to return consignment by id
app.get("/consignment/:id", (req, res) => {
  // Retrieve the consignment ID from the URL parameters
  const consignmentId = req.params.id;

  // Find the consignment in the database
  const consignment = db.find(
    (consignment) => consignment.consignmentId === consignmentId
  );

  // Check if the consignment exists
  if (!consignment) {
    return res.status(404).json({ message: "Consignment not found" });
  }

  // Return the found consignment
  return res.status(200).json({ message: consignment });
});

// POST route to create new consignment
app.post("/consignment", (req, res) => {
  // Retrieve the consignment from the request body
  let consignment = req.body;

  // Validation to check if any of the fields are empty
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

  // consignment id
  let consignmentId = uuid();
  // Create a new consignment with id
  db.push({ ...consignment, consignmentId });

  // Return new consignment
  return res.status(201).json({
    data: db,
  });
});

// PUT route to update consignment
app.put("/consignment/:id", (req, res) => {
  const consignmentId = req.params.id;

  // Find the index of the consignment to update
  const consignmentIndex = db.findIndex(
    (item) => item.consignmentId === consignmentId
  );

  // Check if the consignment exists
  if (consignmentIndex === -1) {
    return res.status(404).json({ message: "Consignment not found" });
  }

  // Update fields in the consignment
  const updatedConsignment = { ...db[consignmentIndex], ...req.body };

  // Save the updated consignment back to the array
  db[consignmentIndex] = updatedConsignment;

  return res
    .status(200)
    .json({ message: "Consignment updated", data: updatedConsignment });
});

// DELETE route to delete consignment by id
app.delete("/consignment/:id", (req, res) => {
  const consignmentId = req.params.id;

  // Find the index of the consignment to delete
  const consignmentIndex = db.findIndex(
    (item) => item.consignmentId === consignmentId
  );

  // Check if the consignment exists
  if (consignmentIndex === -1) {
    return res.status(404).json({ message: "Consignment not found" });
  }

  // Remove the consignment from the array
  db.splice(consignmentIndex, 1);

  return res.status(200).json({ message: "Consignment deleted successfully" });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
