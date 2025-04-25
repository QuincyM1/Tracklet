import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
      proxy: {
          '/api/mock-lowes-report':{
          target: 'http://localhost:5173',
              changeOrigin: true,
              configure: (proxy, options) => {
                  proxy.on('proxyReq', (proxyReq, req, res) => {
                      });


          proxy.on('proxyRes', (proxyRes, req, res) => {
            // Just a placeholder, not used in this case
          });
        },
        bypass: (req, res) => {
          if (req.url?.startsWith('/api/mock-lowes-report')) {
            res.setHeader('Content-Type', 'application/json');
            res.end(
              JSON.stringify({
                productId: req.query?.productId ?? 'Unknown',
                startDate: req.query?.startDate ?? '',
                endDate: req.query?.endDate ?? '',
                report: [
                  { store: 'Store 101', qty: 25, sales: 10 },
                  { store: 'Store 102', qty: 40, sales: 15 },
                  { store: 'Store 103', qty: 30, sales: 12 },
                ],
              })
            );
            return true;
          }
          return false;
        },
      },
    },
  },
});