const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const db=require('./db')
const authRoutes = require("./routes/authRoutes");
const employee = require("./routes/employeeRoutes");
const userAccess=require("./routes/UserAccessRoutes")
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/employee",employee)
app.use("/userAccess",userAccess)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});