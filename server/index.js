const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const issues = require("./resources/issues");
const uuidv4 = require("uuid/v4");

app.use(bodyParser.json());

app.get("/issues", function(req, res) {
  res.json(issues.getAll(parseInt(req.query.page), parseInt(req.query.size)));
});

app.get("/issues/:id", function(req, res) {
  res.json(issues.getById(req.params.id));
});

app.put("/issues/:id", function(req, res) {
  let body = req.body;
  body.id = req.params.id;
  res.json(issues.update(req.params.id, req.body));
});

app.post("/issues", function(req, res) {
  let body = req.body;
  body.id = uuidv4();
  body.publishedDate = new Date();
  res.json(issues.save(body));
});

app.delete("/issues/:id", function(req, res) {
  res.json(issues.delete(req.params.id));
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
