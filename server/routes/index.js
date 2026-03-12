const { Router } = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const api = Router();

// Route to Job Service
api.use(
  "/",
  createProxyMiddleware({
    target: "https://jsjob-crawler.vercel.app",
    changeOrigin: true,
  }),
);

module.exports = api;
