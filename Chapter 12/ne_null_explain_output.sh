# MongoDB explain output fields for a query using $ne:null with an index on 'a'
# Query: db.coll.find({a:{$ne:null}})

# Sample explain output fields:
  stage: 'IXSCAN'
  keyPattern: { a: 1 }
  indexBounds: { a: [ '[MinKey, null)', '(null, MaxKey]' ] }
