#  Example: Query plans for non-multikey and multikey indexes
#  Table 12.1: query uses different index bounds depending on whether index is multikey

#  Non-multikey index on a
"winningPlan": {
  stage: "FETCH",

  inputStage: {
    stage: "IXSCAN",
    keyPattern: { a: 1 },
    isMultiKey: false,
    indexBounds: { a: ["(5.0,10.0)"] }
  }
}

#  Multikey index on a
"winningPlan": {
  stage: "FETCH",
  filter: { a: { $lt: 10 } },
  inputStage: {
    stage: "IXSCAN",
    keyPattern: { a: 1 },
    isMultiKey: true,
    indexBounds: { a: ["(5.0,inf.0]"] }
  },
  rejectedPlans: [
    {
      stage: "FETCH",
      filter: { a: { $gt: 5 } },
      inputStage: {
        stage: "IXSCAN",
        keyPattern: { a: 1 },
        indexName: "a_1",
        isMultiKey: true,
        indexBounds: { a: ["[-inf.0, 10.0)"] }
      }
    }
  ]
}
