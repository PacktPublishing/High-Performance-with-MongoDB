// Example: Sort on multiple fields in opposite directions
// Query and index options

db.coll.find({category:"books"}).sort({genre:1, price:-1})

// Index options to support the sort
// {category:1, genre:1, price:-1}  // OR
// {category:1, genre:-1, price:1}
