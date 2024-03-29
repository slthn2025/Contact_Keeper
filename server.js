const cors = require("cors");
const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect Database
connectDB();

//init Middleware
app.use(express.json({ extended: false }));

// Mengaktifkan CORS
app.use(cors());

app.get("/", (req, res) => res.json({ msg: "Welcome to contact Keeper API" }));

//Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contact", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started On Port ${PORT}`));
