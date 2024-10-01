const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    userid:{
      type:String,
      require:[true]
    },
    amount: {
      type: Number,
      require: [true, "amount is required"],
    },
    type: {
      type: String,
      required: [true, "type is required"],
    },
    category: {
      type: String,
      require: [true, "category is required"],
    },
    reference: {
      type: String,
    },
    description: {
      type: String,
      require: [true, "description is required"],
    },
    date: {
      type: Date,
      require: [true, "date is required"],
    },
  },
  { timestamps: true }
);

const transactionModel = mongoose.model("transactions", transactionSchema);
module.exports=transactionModel;
