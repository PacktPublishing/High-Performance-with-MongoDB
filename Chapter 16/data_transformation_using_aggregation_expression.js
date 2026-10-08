/* convert subdocument from JSON to text; JS vs native agg */
// { _id: 1, data: { key1: 'value1', key2: 'value2' } }
/* invoking JavaScript interpreter to execute $function */
db.demo.aggregate([
  {
    $project: {
      dataAsString: {
        "$function": {
          args: ["$data"],
          lang: "js",
          body: function (data) { return JSON.stringify(data); }
        }
      }
    }
  }
]);
// { _id: 1, dataAsString: '{"key1":"value1","key2":"value2"}' }
/* using native expression which executes in the server */
db.demo.aggregate([
  {
    $project: {
      dataAsString: { "$toString": "$data" }
    }
  }
]);
// { _id: 1, dataAsString: '{"key1":"value1","key2":"value2"}' }
