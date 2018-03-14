module.exports = {
    root: true,
    extends: ["react", "standard"],
    env: {
        amd: true
    },
    rules: {
        quotes: ["error", "double"],
        "space-before-function-paren": ["error", "never"],
        indent: ["error", 4],
        "no-tabs": "off",
        semi: ["error", "always"],
        "prefer-reflect": "off",
        "one-var": "off",
        curly: ["error", "all"],
        "quote-props": ["error", "as-needed"],
        "consistent-this": ["error", "self"]
    }
};
