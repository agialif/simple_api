var express = require('express');
var mongoose = require("mongoose")
var cookieParser = require("cookie-parser")
const app = express();
const dotenv = require('dotenv')
dotenv.config();

app.listen(3000, () => {
    console.log('Server running on port 3000')
})

//Route
const singupAdmin = require('./routes/admin/signupAdmin');
const userRouter = require('./routes/user/user')
//

var url = process.env.DB_URI;
var connect = mongoose.connect(url, {

});
connect.then(
    (db) => {
        console.log("Connection to Data Base Successfull")
    },
    (err) => {
        console.log("Connection to data Base Error: ",err)
    }
)
app.use(express.json())
app.use("/admin", singupAdmin)
app.use("/user", userRouter)