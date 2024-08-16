module.exports = {
  $schema: "https://json.schemastore.org/stylelintrc.json",
  extends: [
    "stylelint-rscss/config",
    "stylelint-config-recess-order"
  ],
  rules: {
    "selector-class-pattern": null,
    "rscss/no-descendant-combinator": true,
    "rscss/class-format": [
      true,
      {
        "component": "pascal-case",
        "maxDepth": 3
      }
    ]
  }
};
