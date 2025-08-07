# Chapter 6: Sharding

## Introduction

This chapter explores MongoDB’s sharding architecture, a solution for horizontal scalability in applications with massive datasets and demanding throughput. You’ll learn how sharding works with replication, the roles of cluster components, and strategies for distributing data efficiently across shards. The chapter also covers practical aspects such as shard key selection, refinement, strategic data placement, and techniques for handling large-scale imports and resharding operations.

## Key Topics Covered

- How sharding enables horizontal scalability by distributing data across replica sets
- Roles and functionalities of shards, mongos processes, and config servers in a sharded cluster
- Strategies for selecting an efficient shard key to optimize data distribution and query targeting
- Comparison of range-based, hashed, and zone-based sharding methods
- Using resharding to address performance bottlenecks without downtime
- Collocating related data to improve transaction and aggregation query performance
- Configuring and monitoring the balancer for effective chunk migrations
- Refining shard keys to resolve jumbo chunks and granularity issues

## Code Snippets

Below are the code snippets available for this chapter. These illustrate key concepts and operations discussed in the text:

- [scatter_gather_query_example.js](./scatter_gather_query_example.js): Example of a scatter-gather query pattern in a sharded cluster
- [zone_sharding_example.js](./zone_sharding_example.js): Shard a collection and assign zones for geo-based data placement
- [collection_zone_distribution_example.js](./collection_zone_distribution_example.js): Distribute collections to subsets of shards using zones
- [move_unsharded_collections_example.js](./move_unsharded_collections_example.js): Move unsharded collections in a sharded cluster
- [tpcc_colocation_example.js](./tpcc_colocation_example.js): Colocate sharded collection chunks for TPC-C benchmark workloads

## How to Use the Code Snippets

- These snippets are intended for educational purposes and illustrate sharding concepts and administrative commands in the MongoDB shell.
- They are not standalone applications; instead, use them as references when configuring or managing sharded clusters.
- Before running administrative commands, ensure you have the necessary privileges and are working in a test or development environment.
- Adapt the examples to your own database and collection names as needed.

## Best Practices

- Always select a shard key that enables targeted queries and provides good granularity for chunk splitting.
- Avoid monotonically increasing or decreasing shard key values to prevent hot shards.
- Use compound shard keys to collocate related data and optimize query targeting.
- Monitor the balancer and chunk migrations to maintain even data distribution.
- Refine shard keys as your data model evolves to avoid jumbo chunks and improve scalability.

## Further Reading and Documentation

- [MongoDB Sharding Strategies Skill Badge](https://learn.mongodb.com/courses/sharding-strategies)
- [MongoDB Sharding Documentation](https://www.mongodb.com/docs/manual/sharding/)
- [Shard Key Selection](https://www.mongodb.com/docs/manual/core/shard-key-selection/)
- [Zone Sharding](https://www.mongodb.com/docs/manual/core/zone-sharding/)
- [Resharding Collections](https://www.mongodb.com/docs/manual/core/reshard-collection/)
