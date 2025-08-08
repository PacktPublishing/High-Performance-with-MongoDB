# Chapter 14: Monitoring and Observability

## Introduction

This chapter provides a practical guide to monitoring and observability in MongoDB, equipping you with the knowledge to maintain high performance and reliability as your systems grow. You'll learn how to interpret key metrics, leverage built-in and external tools, and respond proactively to early signs of trouble before they impact your applications. Whether you're running MongoDB in the cloud with Atlas or managing your own infrastructure, this chapter will help you build a robust observability strategy tailored to your needs.

## Key Topics Covered

- The difference between monitoring and observability
- Why monitoring and observability both matter for database performance
- Core MongoDB metrics and signals to track for optimal health and troubleshooting
- Using MongoDB Atlas and self-managed tools for real-time monitoring and alerting
- Best practices for integrating MongoDB metrics into broader observability platforms
- How to use the Real-Time Performance Panel, Performance Advisor, and Query Profiler in Atlas
- Alerting strategies and troubleshooting common issues

## Code Snippet Files

Below are the code and command snippets provided for this chapter. These examples illustrate how to extract key metrics, monitor performance, and integrate with observability platforms. Snippets are sorted in the order they appear in the chapter:

- [`extract_key_operational_metrics.js`](./extract_key_operational_metrics.js): Extracts key operational metrics using the MongoDB shell.
- [`server_status_command.js`](./server_status_command.js): Shows how to run the `serverStatus` command in the shell.
- [`wiredtiger_cache_metrics.js`](./wiredtiger_cache_metrics.js): Checks WiredTiger cache usage and eviction metrics.
- [`replication_lag_oplog_window.js`](./replication_lag_oplog_window.js): Monitors replication lag and oplog window size.
- [`replication_oplog_window_output.sh`](./replication_oplog_window_output.sh): Shell output showing the oplog window size and replication lag.
- [`mongostat_command.sh`](./mongostat_command.sh): Runs `mongostat` from the system command line to monitor real-time metrics.
- [`mongotop_command.sh`](./mongotop_command.sh): Runs `mongotop` to track read/write activity by collection.
- [`query_profiler_data.js`](./query_profiler_data.js): Retrieves recent profiled operations from the query profiler.
- [`opentelemetry_mongodb_tracing.js`](./opentelemetry_mongodb_tracing.js): Example of instrumenting MongoDB with OpenTelemetry for distributed tracing.
- [`prometheus_mongodb_exporter.yml`](./prometheus_mongodb_exporter.yml): Configuration file for the Prometheus MongoDB exporter.
- [`enable_database_profiler.js`](./enable_database_profiler.js): Script to enable the database profiler for a specific database.
- [`example_profiler_output.json`](./example_profiler_output.json): Sample output from the database profiler showing slow operations.

## How to Read and Use the Code Snippets

- **MongoDB Shell Scripts (`.js`)**: Copy and paste these scripts into the MongoDB shell (`mongosh`) connected to your test or development environment. They illustrate metric extraction, profiler configuration, and monitoring patterns. Not intended for direct production use without adaptation.
- **Shell Commands and Output (`.sh`)**: Run these commands from your system's terminal. Some files show sample output for reference. Ensure you have the necessary privileges and MongoDB tools installed.
- **Configuration Files (`.yml`)**: Use these as templates for integrating MongoDB metrics with external platforms like Prometheus. Adapt configuration to your environment and monitoring stack.
- **Profiler Output (`.json`)**: Review these samples to understand the format and interpretation of profiler results. Use them to compare with your own profiler output and identify slow operations.
- **OpenTelemetry Example**: The tracing example requires Node.js and the relevant OpenTelemetry packages. Use it as a reference for integrating MongoDB with distributed tracing platforms.
- **Interpretation**: Focus on the metrics, configuration, and patterns shown in each snippet. Adapt the code and configs to your own deployment, monitoring stack, and performance requirements.

## Best Practices for Using the Code Snippets

- Always monitor both operational (health, resource usage) and performance (latency, throughput) metrics.
- Set up alerting for critical thresholds (e.g., replication lag, cache saturation, connection limits).
- Use the query profiler to identify slow or inefficient operations.
- Integrate MongoDB metrics with external platforms for unified observability.
- Regularly review and tune monitoring configurations as your workload evolves.
- Test monitoring and alerting in a staging environment before deploying to production.
- Document your monitoring setup and escalation procedures for your team.

## Further Reading and Documentation

- [MongoDB Monitoring Manual](https://www.mongodb.com/docs/manual/administration/monitoring/)
- [MongoDB serverStatus Command](https://www.mongodb.com/docs/manual/reference/command/serverStatus/)
- [MongoDB WiredTiger Metrics](https://www.mongodb.com/docs/manual/reference/command/serverStatus/#wiredtiger)
- [MongoDB Query Profiler](https://www.mongodb.com/docs/manual/reference/database-profiler/)
- [mongostat Documentation](https://www.mongodb.com/docs/database-tools/mongostat/)
- [mongotop Documentation](https://www.mongodb.com/docs/database-tools/mongotop/)
- [Prometheus MongoDB Exporter](https://github.com/percona/mongodb_exporter)
- [Datadog MongoDB Integration](https://docs.datadoghq.com/integrations/mongodb/)
