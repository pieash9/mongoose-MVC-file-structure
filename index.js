require("dotenv").config()
const app = require("./app");

const PORT = process.env.PORT || 3000;


app.use((req, res, next) => {
  res.status(404).json({ message: "Resource not found!" });
});

app.listen(PORT, () => {
  console.log("CURD server is running at port", PORT);
});
