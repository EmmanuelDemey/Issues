import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import { IssueModel, Issue } from "./model/issue";

const app = express();
const issues = require("./resources/issues");
const uuidv4 = require("uuid/v4");

class Server {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(bodyParser.json());
    this.initMongoDB();
    this.routes();
  }

  private initMongoDB() {
    mongoose.connect(
      "mongodb://localhost/issues",
      { useMongoClient: true },
      err => {
        if (err) {
          console.log(err);
        }
      }
    );
  }

  private routes() {
    this.app.get("/issues", function(
      req: express.Request,
      res: express.Response
    ) {
      issues.getAll(
        parseInt(req.query.page),
        parseInt(req.query.size),
        (err: Error, response: Issue[]) => {
          res.json(response);
        }
      );
    });

    this.app.get("/issues/:id", function(
      req: express.Request,
      res: express.Response
    ) {
      issues.getById(req.params.id, (err: Error, response: Issue) => {
        res.json(response);
      });
    });

    this.app.put("/issues/:id", function(
      req: express.Request,
      res: express.Response
    ) {
      issues.update(
        req.params.id,
        req.body,
        (err: Error, response: Issue[]) => {
          res.sendStatus(200);
        }
      );
    });

    this.app.post("/issues", function(
      req: express.Request,
      res: express.Response
    ) {
      issues.save(req.body, (err: Error) => {
        res.sendStatus(201);
      });
    });

    this.app.delete("/issues/:id", function(
      req: express.Request,
      res: express.Response
    ) {
      issues.delete(req.params.id, (err: Error) => {
        res.sendStatus(200);
      });
    });

    this.app.listen(3000, function() {
      console.log("Example app listening on port 3000!");
    });
  }
}

export default new Server();
