const homeRouter = require("express").Router();

homeRouter.get("/", async (req, res) => {
  res.send({ message: "Home" });
});

module.exports = homeRouter;
