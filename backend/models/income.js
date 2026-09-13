const mongoose = require("mongoose");

// Income Schema

const IncomeSchema = new mongoose.Schema(
  {
    // The user who owns this income record
    user: {
      // Store the user's MongoDB ObjectId
      type: mongoose.Schema.Types.ObjectId,

      // Connect this field to the User model
      ref: "User",

      // User is required
      required: true,
    },


    // The source of the income
    source: {
      // The source must be a string
      type: String,

      // This field is required
      required: [true, "Please specify the income source"],

      // Remove extra spaces from the beginning and end
      trim: true,
    },


    // The income amount
    amount: {
      // The amount must be a number
      type: Number,

      // This field is required
      required: [true, "Please specify the amount"],
    },


    // The date of the income
    date: {
      // Store the date as a MongoDB Date
      type: Date,

      // This field is required
      required: [true, "Please specify the date"],
    },


    // An icon representing the income
    icon: {
      // Store the icon as a string
      type: String,

      // Use this icon if no icon is provided
      default: "💰",
    },
  },


  // Automatically add createdAt and updatedAt
  {
    timestamps: true,
  }
);


// Export the Income model
module.exports = mongoose.model("Income", IncomeSchema);
