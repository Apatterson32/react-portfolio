export default defineConfig({
  plugins: [react()],
  optimizeDeps: {},
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  server: {
    port: 3000,
    open: true,
    headers: {
      'Content-Type': 'application/javascript',
    },
  },
});
