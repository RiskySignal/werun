module.exports = {
    root: true,
    extends: ["react", "standard"],
    env: {
        amd: true
    },
    rules: {
        quotes: ["error", "double"],
        "space-before-function-paren": "off",
        indent: ["error", 4],
        "no-tabs": "off",
        semi: ["error", "always"],
        "prefer-reflect": "off",
        "one-var": "off",
        curly: ["error", "all"],
        "quote-props": ["error", "as-needed"],
        "consistent-this": ["error", "self"],
        "no-multiple-empty-lines": [1, {"max": 2}],
        "padded-blocks": 0
    }
};
