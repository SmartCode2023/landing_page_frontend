import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5157, // This is the port which we will use in docker
  },
  define: {
    'process.env': {
      COTIZACIONES_ENDPOINT_TEST: 'http://localhost:5200/api/v1',
      COTIZACIONES_ENDPOINT_PROD: 'http://10.43.101.108:5200/api/v1',
    },
  },
})


// COTIZACIONES_ENDPOINT_TEST=http://10.43.101.114:5100/api/v1/cotizaciones
// COTIZACIONES_ENDPOINT_DEPLOY=http://10.43.101.108:5100/api/v1/cotizaciones


// COTIZACIONES_ENDPOINT_TEST=http://localhost:5100/api/v1/cotizaciones
// COTIZACIONES_ENDPOINT_DEPLOY=http://localhost:5200/api/v1/cotizaciones