const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const cartRoute = require("./routes/cartRoute");
const orderRoute = require("./routes/orderRoute");


dotenv.config();
PORT = process.env.PORT;


mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB connected son!"))
    .catch((err) => {console.log(err)});


app.use(express.json());    
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on http://localhost:${PORT} boi!`);
});