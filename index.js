const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse request body
app.use(bodyParser.json());

// In-memory storage for items
const items = [];

// POST endpoint to create items
app.post('/item', (req, res) => {
  const data = req.body;
  const itemId = items.push(
    {
      data,
      status: "pending"
    }
  );

  setTimeout(() => items[itemId - 1].status = "complete", 10000) //we start job to create item after 10s

  const itemUrl = `${req.protocol}://${req.get('host')}/item/${items.length - 1}`; //location header gives points to pending item
  
  res.location(itemUrl)
  .sendStatus(202);
});

// GET endpoint to retrieve items
app.get('/item/:id', (req, res) => {
  const itemId = req.params.id;
  const item = items[itemId];
  if (!item) {
    res.sendStatus(404);
  } else if (item.status === "pending") { //if item is not yet created we return 202
    res.sendStatus(202)
  } else {
    res.status(201).json(item);
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
