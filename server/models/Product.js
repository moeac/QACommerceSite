const { Schema, model } = require("mongoose");

const productSchema = new Schema(
    {
        title:{
            type: String,
            required: true,
            unique: true
        },
        desc:{
            type: String,
            required: true
        },
        img:{
            type: String,
            required: true
        },
        categories:{
            type: Array
        },
        size:{
            type: String
        },
        brand:{
            type: String
        },
        price:{
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const Product = model("Product", productSchema);

module.exports = Product;