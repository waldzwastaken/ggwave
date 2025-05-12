// vite.config.js
export default {
  server: {
    port: 3000,
    open: true
  },
  optimizeDeps: {
    include: ['ggwave'],
  }
};