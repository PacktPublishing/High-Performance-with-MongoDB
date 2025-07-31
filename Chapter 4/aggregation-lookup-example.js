db.a.explain().aggregate([
   { "$lookup": {
      "from": "b",
      "localField": "a._id",
      "foreignField": "_id",
      "as": "details"
   }},
   {$unwind:"$details"},
   {$match:{"details.date":{$gt:ISODate("2025-05-20T00:00:00.000Z")}}}
])
