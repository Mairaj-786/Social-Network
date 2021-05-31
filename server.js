const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');


// routers
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');



const URI = process.env.MONGO_DB
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log('MongoDB connected')
});

const app = express();
app.use(express.json());
app.use(cors());


app.use('/api', userRouter);
app.use('/api', postRouter);

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});