const Cart = require("../models/Cart");
const { verifyToken, verifyTokenAndAuthorisation, verifyTokenAndAdmin } = require("./verifyTokenRoute");
const router = require("express").Router();


// Create a product
router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body)

    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (err) {res.status(500).json(err)
    }
});


// update user details
router.put("/:id", verifyTokenAndAuthorisation, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true }
        );
        res.status(200).json(updatedCart);
    } catch (err) {res.status(500).json(err)
    }
});

// delete route
router.delete("/:id", verifyTokenAndAuthorisation, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("That's it, the cart is gone, for ever")
    } catch (err) {res.status(500).json(err)
    }
});

// get user car
router.get("/find/:userId", verifyTokenAndAuthorisation, async (req, res) => {
    try {
        const cart = await Cart.findOne({userId: req.params.userId})
        res.status(200).json(cart)
    } catch (err) {res.status(500).json(err)
    }
});

// get all user carts
router.get("/", verifyTokenAndAdmin, async (req, res) => {

    try {
        const carts = await Cart.find();
        res.status(200).json(carts)
    } catch (err) {res.status(500).json(err)
    }
});


module.exports = router;