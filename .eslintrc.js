module.exports = {
  root: true,
  env: {
    node: true,
    browser:true,
    jquery:true
  },
  "globals":{
    "document": true,
    "$vm":true,
    "localStorage": true,
    "window": true,
    "AMap":true,
    "Vuex":true,
    "Vue":true,
    "moment":true,
    "ELEMENT":true,
    "SVG":true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

    "no-unused-vars": [2, {
      // 允许声明未使用变量
      "vars": "local",
      // 参数不检查
      "args": "none"
    }],
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
