db.collection.explain("executionStats").aggregate([ {$match:{a:1} }, {$match:{b:{$gte:2}}}, {$set:{x:"$y"}}, {$set:{a:"$b"}},{$project:{a:1, c:{$add:["$d","$e"]}, _id:0}}])
