#  MongoDB explain output excerpt for a multikey index query with $in operator
#  Query: {a: {$in: [500, 501, 502]}}

executionStats: {  
    inputStage: {  
       stage: 'IXSCAN',  
       nReturned: 1,  
       works: 4,  
       advanced: 1,  
       isEOF: 1,  
       keyPattern: { a: 1 },  
       isMultiKey: true,  
       multiKeyPaths: { a: [ 'a' ] },  
       indexBounds:  { a: [ '[500, 500]', '[501, 501]', '[502, 502]' ] },  
       keysExamined: 3,  
       seeks: 1,  
       dupsTested: 3,  
       dupsDropped: 2

