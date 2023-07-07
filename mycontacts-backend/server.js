const express = require('express');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
dotenv.config();
const port = process.env.PORT;

connectDb();

const cors = require('cors');

// ...

const app = express();
app.use(cors());


app.use(cors({
    origin: 'http://localhost:5173'
  }));
  


app.use(express.json())

//app.use is called middleware
app.use("/api/contacts", require("./routes/contactRoutes"))
app.use("/api/users", require("./routes/userRoutes"))

app.use(errorHandler)


app.listen(port , ()=> {
    console.log(`sever is running on ${port}`);
});