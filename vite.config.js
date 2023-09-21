import { resolve } from "path";

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname,"index.html"),
        component: resolve(__dirname, "component.html"),
      },
    },
  },
  server: {
    port: 3000,
  },
  /**
   * https://stackoverflow.com/questions/68973043/how-to-create-multi-pages-with-vite-following-this-directory-structure
   */
};
