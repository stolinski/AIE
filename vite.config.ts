import { defineConfig } from "vite";

export default defineConfig({
  server: {
    watch: {
      // pnpm's project links can point back to this root and recurse indefinitely.
      ignored: ["**/.pnpm-store/**"],
    },
  },
});
