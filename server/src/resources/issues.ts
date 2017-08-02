import { Issue, IssueModel } from "../model/issue";
import * as mongoose from "mongoose";

const uuidv4 = require("uuid/v4");

exports.getAll = function(page = 0, size = 4, callback: (err: any) => void) {
  IssueModel.paginate({}, { page: page, limit: size }, callback);
};

exports.getById = function(id: string, callback: (err: any) => void) {
  const query = IssueModel.findById(new mongoose.Types.ObjectId(id));
  query.exec(callback);
};

exports.update = function(
  id: string,
  issue: Issue,
  callback: (err: any) => void
) {
  IssueModel.update({ _id: new mongoose.Types.ObjectId(id) }, issue, callback);
};

exports.save = function(issue: Issue, callback: (err: any) => void) {
  const issueModel = new IssueModel(issue);
  issueModel.save(callback);
};

exports.delete = function(id: string, callback: (err: any) => void) {
  IssueModel.remove({ _id: new mongoose.Types.ObjectId(id) }, callback);
};
