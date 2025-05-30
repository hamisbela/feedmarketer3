// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"]
  },
  server: {
    historyApiFallback: true,
    fs: {
      // Allow serving files from project root, blog-content, and node_modules
      allow: [".", "blog-content", "node_modules"],
      strict: false
    }
  },
  preview: {
    historyApiFallback: true
  },
  assetsInclude: ["**/*.md", "**/*.jpg", "**/*.png", "**/*.gif", "**/*.jpeg", "**/*.webp"],
  publicDir: "public",
  build: {
    rollupOptions: {
      // Make sure to exclude the zip files from the build
      external: [
        /\/blog-zips\/.*/
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGV4Y2x1ZGU6IFsnbHVjaWRlLXJlYWN0J10sXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIGhpc3RvcnlBcGlGYWxsYmFjazogdHJ1ZSxcbiAgICBmczoge1xuICAgICAgLy8gQWxsb3cgc2VydmluZyBmaWxlcyBmcm9tIHByb2plY3Qgcm9vdCwgYmxvZy1jb250ZW50LCBhbmQgbm9kZV9tb2R1bGVzXG4gICAgICBhbGxvdzogWycuJywgJ2Jsb2ctY29udGVudCcsICdub2RlX21vZHVsZXMnXSxcbiAgICAgIHN0cmljdDogZmFsc2VcbiAgICB9LFxuICB9LFxuICBwcmV2aWV3OiB7XG4gICAgaGlzdG9yeUFwaUZhbGxiYWNrOiB0cnVlLFxuICB9LFxuICBhc3NldHNJbmNsdWRlOiBbJyoqLyoubWQnLCAnKiovKi5qcGcnLCAnKiovKi5wbmcnLCAnKiovKi5naWYnLCAnKiovKi5qcGVnJywgJyoqLyoud2VicCddLFxuICBwdWJsaWNEaXI6ICdwdWJsaWMnLFxuICBidWlsZDoge1xuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB0byBleGNsdWRlIHRoZSB6aXAgZmlsZXMgZnJvbSB0aGUgYnVpbGRcbiAgICAgIGV4dGVybmFsOiBbXG4gICAgICAgIC9cXC9ibG9nLXppcHNcXC8uKi9cbiAgICAgIF1cbiAgICB9XG4gIH1cbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUyxvQkFBb0I7QUFDdFAsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsY0FBYztBQUFBLEVBQzFCO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixvQkFBb0I7QUFBQSxJQUNwQixJQUFJO0FBQUE7QUFBQSxNQUVGLE9BQU8sQ0FBQyxLQUFLLGdCQUFnQixjQUFjO0FBQUEsTUFDM0MsUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxvQkFBb0I7QUFBQSxFQUN0QjtBQUFBLEVBQ0EsZUFBZSxDQUFDLFdBQVcsWUFBWSxZQUFZLFlBQVksYUFBYSxXQUFXO0FBQUEsRUFDdkYsV0FBVztBQUFBLEVBQ1gsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBO0FBQUEsTUFFYixVQUFVO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
