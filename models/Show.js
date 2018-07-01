const mongoose = require("mongoose");
const { Schema } = mongoose;

const showSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  name: String,
  network: String,
  weekday: String,
  showtime: Date
});

mongoose.model('shows', showSchema);