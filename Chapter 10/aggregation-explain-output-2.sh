// Example output excerpt:
{
"stages" : [
{
  "$cursor" : {
    "queryPlanner" : {
      "namespace" : "test.coll",
      "optimizationTimeMillis" : 0,
      "winningPlan" : {
        "isCached" : false,
        "stage" : "PROJECTION_COVERED",
        "transformBy" : {
          "groupId" : 1,
          "state" : 1,
          "_id" : 0
        },
        "inputStage" : {
          "stage" : "DISTINCT_SCAN",
          "keyPattern" : {
            "state" : 1,
            "groupId" : 1
          },
          "indexName" : "state_1_groupId",
          // ...
