const Reviews = require("../models/reviews")

const createReviews = async (reqBody) => {
    return Reviews.create(reqBody)
};

const listReviews = async () => {
    return Reviews.find()
};

const getId = async (id) => {
    return Reviews.findById(id);
};

const deleteReviews = async (Id) => {
    return Reviews.findByIdAndDelete(Id)
};

const updateReviews = async (Id, updatebody) => {
    return Reviews.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createReviews, listReviews, deleteReviews, getId, updateReviews }