const app = require("./app");
const { PORT } = require("./config/env");

const port = PORT || process.env.PORT || 5000;

app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 CyberForge API Server running on port ${port}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 Health check: http://localhost:${port}/api/health`);
});
