const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Replace 'your-database-connection-string' with your actual MongoDB connection string
mongoose.connect('mongodb+srv://pujarihemanthkumar2003:pujarihemanthkumar2003@cluster0.vcdmjyj.mongodb.net/mern-pizza', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to the database.');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

const pizzaOrderSchema = new mongoose.Schema({
 
  variant: { type: String, required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
});

const PizzaOrder = mongoose.model('PizzaOrder', pizzaOrderSchema);

app.post('/api/order', (req, res) => {
  const { variant, quantity, totalPrice } = req.body;

  const pizzaOrder = new PizzaOrder({
  
    variant,
    quantity,
    totalPrice,
  });

  pizzaOrder.save()
    .then(() => {
      res.status(201).json({ message: 'Order saved successfully.' });
    })
    .catch((error) => {
      console.error('Error saving order:', error);
      res.status(500).json({ error: 'Error saving order.' });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
