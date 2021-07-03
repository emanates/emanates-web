module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier'
  ],
  rules: {
    "at-rule-no-unknown": [
      true,
      { "ignoreAtRules": ["apply", "extend"] }
    ],
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseduoElements: ["v-deep"]
      }
    ]
  },
}
