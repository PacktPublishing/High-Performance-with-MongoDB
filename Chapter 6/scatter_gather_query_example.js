// Query to get latest 20 posts for a subset of users
// This query may result in a scatter-gather operation

db.posts.find({userId:{$in:[ "..." ]}}).sort({_id:-1}).limit(20)
