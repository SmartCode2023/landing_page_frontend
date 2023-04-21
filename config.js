const API_ENDPOINT = process.env.NODE_ENV === 'production'
  ? process.env.COTIZACIONES_ENDPOINT_PROD
  : process.env.COTIZACIONES_ENDPOINT_TEST;

export default API_ENDPOINT;