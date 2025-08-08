# Chapter 3: Indexes

## Introduction

This chapter explores the critical role of indexes in MongoDB for optimizing query performance. You will learn what indexes are, how MongoDB uses them, and how to design efficient indexes tailored to your application's query patterns. The chapter covers the trade-offs of indexing, resource usage, and best practices for compound and partial indexes.

## Key Topics Covered

- What indexes are and how MongoDB uses B-tree data structures
- Types of indexes: single field, compound, multikey, sparse, wildcard, and partial
- Cardinality vs. selectivity and their impact on index effectiveness
- Prefix matching and field ordering in compound indexes
- The ESR (Equality, Sort, Range) guideline for index design
- Resource efficiency and trade-offs of indexing
- Covered queries and partial indexes for performance
- Common misconceptions about MongoDB indexes

## Code Snippets in This Chapter

All code snippets are located in this folder. They are organized by programming language:

### JavaScript (MongoDB Shell)

- [find_order_example.js](./find_order_example.js) – Find an order by ID
- [single_field_index.js](./single_field_index.js) – Create an index on a single field
- [show_indexes.js](./show_indexes.js) – List all indexes on a collection
- [compound_index_example.js](./compound_index_example.js) – Create a compound index on multiple fields
- [multikey_index_example.js](./multikey_index_example.js) – Create an index on an array field (multikey)
- [sparse_index_example.js](./sparse_index_example.js) – Create a sparse index
- [wildcard_index_example.js](./wildcard_index_example.js) – Create a wildcard index
- [partial_index_example.js](./partial_index_example.js) – Create a partial index
- [index_cardinality_example.json](./index_cardinality_example.json) – Examples of index cardinality and selectivity
- [partial_index_with_filter_example.js](./partial_index_with_filter_example.js) – Create a partial index with a filter expression
- [covered_query_examples.js](./covered_query_examples.js) – Covered and non-covered query examples
- [sort_opposite_directions_example.js](./sort_opposite_directions_example.js) – Sort with opposite directions

## How to Use the Code Snippets

1. Open the MongoDB shell or your preferred MongoDB client.
2. Copy and paste the code from the relevant `.js` file into your shell to run the example.
3. Modify the collection and field names as needed to match your own database schema.
4. Use these examples to experiment with index creation, query optimization, and index inspection.

## Additional Resources

- [Indexing Design Fundamentals Skill Badge](https://learn.mongodb.com/courses/indexing-design-fundamentals)
- [MongoDB Indexes Documentation](https://www.mongodb.com/docs/manual/indexes/)
- [MongoDB Query Optimization](https://www.mongodb.com/docs/manual/core/query-optimization/)

## Notes

- Indexes improve read performance but may impact write latency and resource usage.
- Use partial and covered indexes to optimize for selective queries and resource efficiency.
- Follow the ESR guideline for compound index field ordering.
