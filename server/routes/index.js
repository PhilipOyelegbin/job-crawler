const { Router } = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const api = Router();

// Route to Job Service
api.use(
  "/",
  createProxyMiddleware({
    target: "http://localhost:4001",
    changeOrigin: true,
  }),
);

module.exports = api;
