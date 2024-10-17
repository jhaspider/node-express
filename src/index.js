const express = require("express");
const cors = require("cors");

const hello = require("./hello");
const user = require("./user");

const app = express();
const PORT = 3000;

const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/", hello); // eg. curl http://localhost:3000
app.use("/user", user); // eg. curl http://localhost:3000/user

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
