module.exports = {
  root: true,

  // parser: 'babel-eslint',
  parserOptions: {
    "parser": "babel-eslint"
  },

  env: {
    browser: true,
    es6: true,
    node: true
  },

  extends: [
    'standard',
    'plugin:vue/strongly-recommended'
  ],

  // required to lint *.vue files
  plugins: [
    'standard',
    'vue'
  ],

  // add your custom rules here
  rules: {
    'camelcase': [0, {properties: 'never'}],
    'eqeqeq': ['error', 'smart'],
    "vue/script-indent": ["error", 2, { "baseIndent": 1 }],
    "indent": ["error", 2],
    "vue/order-in-components": ["error", {
      "order": [
        "el",
        "name",
        "parent",
        "functional",
        ["delimiters", "comments"],
        ["directives", "filters"],
        "extends",
        "mixins",
        "inheritAttrs",
        "model",
        ["props", "propsData"],
        "data",
        "computed",
        "methods",
        "watch",
        "LIFECYCLE_HOOKS",
        ["template", "render"],
        "renderError",
        "components"
      ]
    }],
    "handle-callback-err": "off",

    // SPECIAL SPRINT TO CHANGE ALL THE PROPS
    "vue/require-prop-types": "off",
    "vue/require-default-prop": "off",
    "vue/no-side-effects-in-computed-properties": "off"
  },

  globals: {
    '$nuxt': false
  },

  overrides: [
    {
      "files": ["*.vue"],
      "rules": {
        "indent": "off"
      }
    },
    {
      "files": ["*.js"],
      "rules": {
        "vue/script-indent": "off"
      }
    }
  ]
}
