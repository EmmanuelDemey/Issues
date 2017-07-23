import * as mongoose from "mongoose";

export interface Issue {
  _id: string;
  applicationUrl: string;
  label: string;
  description: string;
  publishedDate: Date;
  active: boolean
}

export const IssueSchema = new mongoose.Schema({
  applicationUrl: String,
  label: String,
  description: String,
  publishedDate: { type: Date, default: Date.now },
  active: {type: Boolean, default: false}
});

export const IssueModel = mongoose.model("issues2", IssueSchema);
