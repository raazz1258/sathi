import { Router } from "express"
import { createUser, login, myProfile, verifyEmail } from "../controller/userController.js"
import { isAuthenticated } from "../middleware/isAuthenticated.js"

export let userRouter = Router()

userRouter.route("/create")
.post(createUser)

userRouter.route("/verify-email")
.patch(verifyEmail)

userRouter.route("/login")
.post(login)

userRouter.route("/my-profile").get(isAuthenticated,myProfile)