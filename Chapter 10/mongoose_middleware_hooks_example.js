userSchema.pre('save', async function(next) {  
  // Only hash the password if it's modified or new  
  if (!this.isModified('password')) return next();  
    
  try {  
    this.salt = await bcrypt.genSalt(10);  
    this.password = await bcrypt.hash(this.password, this.salt);  
    next();  
  } catch (error) {  
    next(error);  
  }  
});

userSchema.post('save', function(doc) {  
  console.log(`User ${doc.email} has been saved`);  
});
