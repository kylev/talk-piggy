import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'tmp']),
  // add more generic rulesets here, such as:
  // js.configs.recommended,
  ...pluginVue.configs['flat/vue2-recommended'],
  // ...pluginVue.configs['flat/recommended'], // Use this if you are using Vue.js 3.x.
  {
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
    },
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser
      }
    }
  }
]);
