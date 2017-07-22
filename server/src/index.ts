import * as express from "express";
import * as bodyParser from "body-parser";

const app = express();
const issues = require("./resources/issues");
const uuidv4 = require("uuid/v4");

class Server {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(bodyParser.json());
    this.routes();
  }

  private routes() {
    this.app.get("/issues", function(req: express.Request, res: express.Response) {
      res.json(
        issues.getAll(parseInt(req.query.page), parseInt(req.query.size))
      );
    });

    this.app.get("/issues/:id", function(
      req: express.Request,
      res: express.Response
    ) {
      res.json(issues.getById(req.params.id));
    });

    this.app.put("/issues/:id", function(
      req: express.Request,
      res: express.Response
    ) {
      let body = req.body;
      body.id = req.params.id;
      res.json(issues.update(req.params.id, req.body));
    });

    this.app.post("/issues", function(req: express.Request, res: express.Response) {
      let body = req.body;
      body.id = uuidv4();
      body.publishedDate = new Date();
      res.json(issues.save(body));
    });

    this.app.delete("/issues/:id", function(
      req: express.Request,
      res: express.Response
    ) {
      res.json(issues.delete(req.params.id));
    });

    this.app.listen(3000, function() {
      console.log("Example app listening on port 3000!");
    });
  }
}

export default new Server();