const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: String,
    last_name: String,
    username_name: String,
    email: String,
    photo: String,
    password: String,
    articles: {
        type: Schema.Types.ObjectId,
        ref: "Article",
    },
    comments: {
        type: Schema.Types.ObjectId,
        ref: "Comment",
    },



});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;