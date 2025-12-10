const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const admin = require("firebase-admin");
const Stripe = require("stripe");

dotenv.config();
admin.initializeApp();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
console.log("Stripe loaded:", typeof stripe);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (_req, res) => {
    res.status(200).json({ message: "Success" });
});

app.post("/payment/create", async (req, res) => {
    const total = parseInt(req.query.total) || 0; // Use query parameter instead of req.body.total
    console.log("Payment Request Received for this amount >>> ", total);
    if (total > 0) {
        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: total,
                currency: "usd"
            });
            return res.status(201).json({
                clientSecret: paymentIntent.client_secret,
                message: "Payment intent created successfully"  
            });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: "Failed to create payment intent", error: String(err) });
        }
    } else {
        return res.status(400).json({
            message: "total must be a positive number"
        });
    }
});

exports.api = functions.https.onRequest(app);