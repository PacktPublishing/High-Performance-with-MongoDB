// Instead of separate collections requiring transactions:  
// users collection: { _id: userId, name: "Jane", ... }  
// profiles collection: { userId: userId, preferences: {...}, ... }  
// settings collection: { userId: userId, notifications: {...}, ... }

// Consider a consolidated model:  
// users collection  
{
  _id: userId,
  name: "Jane",
  profile: {
    preferences: {"..."}
  },
  settings: {
    notifications: {"..."}
  }
}
