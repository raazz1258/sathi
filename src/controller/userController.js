import { User } from "../schema/userSchema.js";
import { sendEmail } from "../utils/sendMail.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET_KEY_V } from "../utils/variable.js";

export const createUser = async (req, res, next) => {
  try {
    let data = req.body;
    let hashedPassword = await bcrypt.hash(data.password, 10);
    data = { ...data, password: hashedPassword, isVerified: false };
    let result = await User.create(data);

    const object = {
      _id: result._id,
    };
    const key = SECRET_KEY_V;
    const expires = {
      expiresIn: "10d",
    };

    const token = jwt.sign(object, key, expires);

    sendEmail({
      to: [data.email],
      subject: "successfully created",
      html: `
        <div>
        <h1>Your account has been created successfully</h1>
        To verify your account click on the link below
          <div><a href="http://localhost:8001/verify-token?token=${token}">http://localhost:8001/verify-token?token=${token}</a>
          </div>
        </div>`,
    });
    res.json({
      sucess: true,
      message: "User created successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      sucess: false,
      message: error.message,
    });
  }
};

export const verifyEmail = async (req, res, next) => {
  try {
    let tokenString = req.headers.authorization;
    let token = tokenString.split(" ")[1];
    let obj = await jwt.verify(token, SECRET_KEY_V);
    let user_id = obj._id;
    console.log(user_id);
    let result = await User.findByIdAndUpdate(
      user_id,
      { isVerified: true },
      { new: true }
    );
    res.json({
      sucess: true,
      message: "User verified successfully",
    });
  } catch (error) {
    res.json({
      sucess: false,
      message: error.message,
    });
  }
};

export const login = async (req, res, next) => {
  try {
    let email = req.body.email;
    let password = req.body.password;
    let user = await User.findOne({ email: email });
    if (user) {
      if (user.isVerified) {
        let checkPassword = await bcrypt.compare(password, user.password);
        console.log(checkPassword);
        if (checkPassword) {
                const object = {
                  _id: user._id,
                };
                const key = SECRET_KEY_V;
                const expires = {
                  expiresIn: "10d",
                };
                const token = jwt.sign(object, key, expires);
                res.json({
                  sucess: true,
                  message: "User login successfully",
                  result: token
                });
        } else {
          throw new Error("Password is incorrect");
        }
      } else {
        throw new Error("User not verified");
      }
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    res.json({
      sucess: false,
      message: error.message,
    });
  }
};

export const myProfile = async(req, res, next)=>{
  try {
    let _id = req._id
    let user = await User.findById(_id)
    res.json(user);
    
  } catch (error) {
    res.json({
      sucess: false,
      message: error.message,
    });
  }
}