// Replace a document with a new version using updateOne and $replaceWith
// This uses aggregation pipeline update for more efficient oplog entries

db.coll.updateOne({_id: X}, [ {$replaceWith:{$literal:entire-new-document }} ])
