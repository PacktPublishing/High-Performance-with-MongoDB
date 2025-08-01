// tracing.js
const opentelemetry = require('@opentelemetry/api');
const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');
const { MongoDBInstrumentation } = require('@opentelemetry/instrumentation-mongodb');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');

// Configure the tracer provider
const provider = new NodeTracerProvider();
provider.register();

// Register MongoDB instrumentation
registerInstrumentations({
  instrumentations: [new MongoDBInstrumentation()],
});

// Export traces using your preferred exporter  
// (OTLP, Jaeger, Zipkin, etc.)
