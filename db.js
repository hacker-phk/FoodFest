const mongoose = require('mongoose');
const url="mongodb+srv://pujarihemanthkumar2003:pujarihemanthkumar2003@cluster0.vcdmjyj.mongodb.net/mern-pizza";
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

module.exports=mongoose;