const Post = require("../models/post");

module.exports.createPost = async (req, res) => {
    const { title, body } = req.body;
    if (!title) {
        return res.status(422).json({ titleError: 'Title is required' })
    }
    if (!body) {
        return res.status(422).json({ bodyError: 'body is required' })
    }
    req.user.password = undefined
    try {
        const post = await Post.create({
            title,
            body,
            postedBy: req.user
        })
        post.save().then(result => {
            res.json({ post: result })
        })
    } catch (error) {
        return res.status(401).json({ error })

    }
}

module.exports.getAllPosts = async (req, res) => {
    Post.find()
        .populate('postedBy', '_id name')
        .then(posts => {
            return res.json({ posts })
        })
        .catc(err => {
            return res.status.json({ err })
        })
}

module.exports.myPosts = async = (req, res) => {
    Post.find({ postedBy: req.user._id })
        .populate("postedBy", " _id name")
        .then(myAllposts => {
            res.json({ myAllposts })
        })
        .catch(err => {
            return res.status(400).json({ err })
        })
}