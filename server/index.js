const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./routes/auth.js")
const listingRoutes = require("./routes/listing.js")
const bookingRoutes = require("./routes/booking.js")
const userRoutes = require("./routes/user.js")

app.use(cors());
app.use(express.json());
app.use(express.static("public"));


/* MONGOOSE SETUP */
const port = process.env.PORT || 8000;

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Database is connected!");
}).catch((e) => {
    console.log(e);
})

/* ROUTES */
app.use("/auth", authRoutes)
app.use("/properties", listingRoutes)
app.use("/bookings", bookingRoutes)
app.use("/users", userRoutes)

app.listen(port, () => {
    console.log(`Backend server is running on port ${port}`);
});


// npm i cors@2.8.5 dotenv@16.3.1 express@4.18.2 jsonwebtoken@9.0.2 mongoose@8.0.1 multer@1.4.4 bcryptjs@2.4.3 body-parser@1.20.2 multer-gridfs-storage@5.0.2