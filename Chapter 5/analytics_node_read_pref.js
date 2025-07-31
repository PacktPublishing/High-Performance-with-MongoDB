db.collection.find({}).readPref("secondary", [{ "usage": "reporting" }]);
