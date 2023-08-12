const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/users.controller");

const userRouter = require("express").Router();

userRouter.get("/", getAllUsers);
userRouter.post("/", createUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
