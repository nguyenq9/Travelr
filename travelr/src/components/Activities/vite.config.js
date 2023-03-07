import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr:
      process.env.CODESANDBOX_SSE || process.env.GITPOD_WORKSPACE_ID
        ? 443
        : undefined,
  },
  resolve: {
    extensions: ['.js', '.mjs'],
    alias: {
      'my-module': 'path/to/my-module.mjs'
    },
    modules: [
      "node_modules",
      "src",
    ],
    contentType: {
      '.mjs': 'application/javascript'
    }
  },
  
});
