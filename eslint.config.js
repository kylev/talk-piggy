import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";

export default defineConfig([
  globalIgnores(["dist", "tmp"]),
  {
    files: ["**/*.{js,vue}"],
    extends: [js.configs.recommended, pluginVue.configs["flat/recommended"]],
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
    },
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
  },
]);
