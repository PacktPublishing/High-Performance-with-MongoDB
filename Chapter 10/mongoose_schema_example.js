const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({  
  firstName: { type: String, required: true, trim: true },  
  lastName: { type: String, required: true, trim: true },  
  email: {  
    type: String,  
    required: true,  
    unique: true,  
    validate: {  
      validator: function(v) {  
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);  
      },  
      message: props => `${props.value} is not a valid email!`  
    }  
  }  
});

const user = mongoose.model('User', userSchema);
