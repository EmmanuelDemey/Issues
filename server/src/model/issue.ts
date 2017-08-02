import * as mongoose from "mongoose";
import * as mongoosePaginate from "mongoose-paginate";

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

IssueSchema.plugin(mongoosePaginate);

export const IssueModel = mongoose.model("issues2", IssueSchema);
