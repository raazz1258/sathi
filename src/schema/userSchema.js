import { Schema, model } from "mongoose";

export const UserSchema = Schema(
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
      required: true,
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
  { timestamp: true }
);

export const User = model("User", UserSchema);
