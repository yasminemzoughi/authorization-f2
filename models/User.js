// require mongoose
const mongoose = require("mongoose");

// schema
const { Schema, model } = mongoose;

// creation schema
const UserSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	phone: Number,
});

// export
module.exports = User = model("user", UserSchema);
