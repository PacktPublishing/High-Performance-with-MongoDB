// Example output excerpt:
{
  "stages" : [
    {"$cursor" : {
      "queryPlanner" : { 
        // ...
       },
       // ...
    }},
    {"$lookup" : {
        "from" : "b",
        "as" : "details",
        "localField" : "a._id",
        "foreignField" : "_id",
        "let" : { },
        "pipeline" : [
           {"$match" : {
            "date" : {"$gt":ISODate("2025-05-20T00:00:00Z")}
            }}
        ],
        "unwinding" : {
          "preserveNullAndEmptyArrays" : false
        }
    }}
  ]
}
