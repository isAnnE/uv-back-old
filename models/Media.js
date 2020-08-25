const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mediaSchema = new Schema({
    year: Number,
    intro: String,
    country: {
        type: Schema.Types.ObjectId,
        ref: "Country",
    },
    genre: {
        type: Schema.Types.ObjectId,
        ref: "Genre",
    },
    extract: String,
    photo: {
        url: {
            type: String,
            default: "AJOUTER",
        }
    },
    directed_by: {
        type: Schema.Types.ObjectId,
        ref: "Faiseuse",
    },

    // QUESTIONS GUILLAUME
    // que faire si c'est juste une string ou un ID ? 
    written_by: {
        type: Schema.Types.ObjectId,
        ref: "Faiseuse",
    },
    acting: {
        type: Schema.Types.ObjectId,
        ref: "Faiseuse",
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment",
    },
});

const MediaModel = mongoose.model("Media", mediaSchema);

module.exports = MediaModel;