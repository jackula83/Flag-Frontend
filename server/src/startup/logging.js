const Sentry = require('@sentry/node');

module.exports = () => {
  Sentry.init({
    dsn: `https://${process.env.SENTRY_DSN}.ingest.sentry.io/6387150`,

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
};
