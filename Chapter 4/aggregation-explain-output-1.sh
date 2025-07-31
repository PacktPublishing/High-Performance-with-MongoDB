// Example output excerpt:
{
  stages: [  
    { '$cursor': { queryPlanner: {
          parsedQuery: { '$and': [ { a: { '$eq': 1 } }, { b: { '$gte': 2 }}]},
          winningPlan: {
            stage: 'PROJECTION_SIMPLE',
            transformBy: { b: 1, d: 1, e: 1, y: 1, _id: 0 },
            inputStage: {
                stage: 'IXSCAN',
                keyPattern: { a: 1, b: 1 },
                // ...
        },  
        executionStats: {  
          executionSuccess: true,  
          nReturned: 45,  
          executionTimeMillis: 2,  
          totalKeysExamined: 45,  
          totalDocsExamined: 45,  
          executionStages: {  
            stage: 'PROJECTION_SIMPLE',  
            nReturned: 45,  
            executionTimeMillisEstimate: 0,  
            transformBy: { b: 1, d: 1, e: 1, y: 1, _id: 0 },  
            // ...  
        }  
      },  
      nReturned: Long('45'),  
      executionTimeMillisEstimate: Long('2')  
    }, {  
      '$set': { x: '$y' },  
      nReturned: Long('45'),  
      executionTimeMillisEstimate: Long('2')  
    }, {  
      '$set': { a: '$b' },  
      nReturned: Long('45'),  
      executionTimeMillisEstimate: Long('2')  
    }, {  
      '$project': { a: true, c: { '$add': [ '$d', '$e' ] }, _id: false },  
      nReturned: Long('45'),  
      executionTimeMillisEstimate: Long('2')  
    } /* ... */ ]}
