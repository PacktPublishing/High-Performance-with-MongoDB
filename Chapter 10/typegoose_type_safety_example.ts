class User {  
  @prop({ required: true })  
  public firstName!: string;  
    
  @prop({ required: true })  
  public lastName!: string;  
    
  @prop({ required: true, unique: true })  
  public email!: string;  
    
  @prop({ default: Date.now })  
  public registeredAt?: Date;  
    
  public get fullName(): string {  
    return ${this.firstName} ${this.lastName};  
  }  
}

const UserModel = getModelForClass(User);

// Autocomplete and type checking works:  
const newUser = new UserModel({  
  firstName: "Jane",  
  lastName: "Doe",  
  email: "jane@example.com"  
});

// TypeScript would catch this error:  
// newUser.nonExistentField = "value"; // Error!