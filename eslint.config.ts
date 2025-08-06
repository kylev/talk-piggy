import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import pluginVue from 'eslint-plugin-vue'
import { globalIgnores } from 'eslint/config'
import globals from 'globals'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'

export default defineConfigWithVueTs([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,ts,vue}'],
  },

  globalIgnores(['**/dist/**', '**/tmp/**']),
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
      },
    },
  },
  skipFormatting,
])
