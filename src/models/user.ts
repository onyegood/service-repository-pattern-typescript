import mongoose, { Schema } from "mongoose";

import { IUserModel } from "../interfaces/user";

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

export default mongoose.model<IUserModel>("User", UserSchema);
