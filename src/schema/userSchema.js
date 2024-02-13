import { Schema, model } from "mongoose";

const UserSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      // required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = model("User", UserSchema);
