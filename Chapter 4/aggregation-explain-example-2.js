db.coll.explain("executionStats").aggregate([
      {$sort:{state:1, groupId:1}},
      {$group:{_id:"$state", firstGroup:{$first:"$groupId"}}}
    ])
