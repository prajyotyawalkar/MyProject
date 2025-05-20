const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('DB connected'))
.catch((err) => console.log(err));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/product', require('./routes/product'));
app.use('/api/profile', require('./routes/profile'));

app.listen(5000, () => console.log('Your server is running on port 5000'));