const express = require('express');  
const mongoose = require('mongoose');  
const app = express();

mongoose.connect('mongodb://localhost:27017/myapp');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  created: { type: Date, default: Date.now }
});

// Create a model from the schema  
const User = mongoose.model('User', userSchema);

// Use the model in an Express route  
app.post('/users', async (req, res) => {  
  try {  
    const user = new User(req.body);  
    await user.save();  
    res.status(201).send(user);  
  } catch (error) {  
    res.status(400).send(error);  
  }  
});
