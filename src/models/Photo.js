const {Schema , model} = require ("mongoose")

const Photo = new Schema({
    title: String,
    description: String,
    imageURL: String,
    public_id: String,
},{versionKey: false});

module.exports = model("Photo", Photo);