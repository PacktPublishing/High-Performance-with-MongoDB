# Chapter 7: In-Memory Storage Engine

## Introduction

This chapter explores MongoDB’s in-memory storage engine, designed for ultra-low latency and high-throughput workloads where data durability is not a primary concern. You’ll learn how to configure, tune, and monitor the in-memory engine, and understand its trade-offs compared to other storage options.

## Key Topics Covered

- Overview of the in-memory storage engine and its use cases
- Configuration options for enabling and sizing the in-memory engine
- Performance characteristics and limitations
- Monitoring and troubleshooting in-memory deployments
- Comparison with WiredTiger and other engines

## Code Snippets

Below are the code snippets available for this chapter. These illustrate key concepts and operations discussed in the text:

- [wiredtiger_cache_size.js](./wiredtiger_cache_size.js): Example of adjusting the WiredTiger cache size.
- [wiredtiger_syncdelay.conf](./wiredtiger_syncdelay.conf): Configuration file excerpt for setting the sync delay in WiredTiger.
- [wiredtiger_syncdelay.sh](./wiredtiger_syncdelay.sh): Shell script to change the sync delay for WiredTiger.
- [wiredtiger_snapshot_window.js](./wiredtiger_snapshot_window.js): Example of adjusting the snapshot history window for WiredTiger.
- [wiredtiger_eviction_settings.json](./wiredtiger_eviction_settings.json): JSON configuration for eviction settings in WiredTiger.
- [mongodb_inmemory_engine.conf](./mongodb_inmemory_engine.conf): Configuration syntax for enabling the in-memory storage engine and setting its size.
- [wiredtiger_leaf_page_size.conf](./wiredtiger_leaf_page_size.conf): Configuration for adjusting the leaf page size in WiredTiger.
- [wiredtiger_leaf_page_collection.js](./wiredtiger_leaf_page_collection.js): Set the leaf page size for a collection in WiredTiger at collection creation.

# How to Use the Code Snippets

- The provided scripts and configuration files illustrate key concepts for both the in-memory storage engine and WiredTiger engine in MongoDB.
- Use these examples as references when configuring, tuning, or troubleshooting storage engine settings. They are not standalone applications.
- Before applying any configuration changes, ensure you have the necessary privileges and are working in a test or development environment.
- Adapt the examples to your own deployment paths, engine type, and sizing requirements as needed.

## Best Practices

- Use the in-memory engine only for workloads where data loss is acceptable (e.g., caching, ephemeral analytics)
- Monitor memory usage closely to avoid out-of-memory errors
- Size the in-memory engine appropriately for your dataset and workload
- Regularly review performance metrics and adjust configuration as needed

## Further Reading and Documentation

- [MongoDB In-Memory Storage Engine Documentation](https://www.mongodb.com/docs/manual/core/inmemory/)
- [MongoDB Storage Engines Overview](https://www.mongodb.com/docs/manual/core/storage-engines/)
