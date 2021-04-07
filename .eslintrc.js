module.exports = {
  root: true,
  env: {
    node: true
  },
  // extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  extends: ["plugin:vue/essential","@vue/standard"],
  parserOptions: {
    parser: "babel-eslint"
  },
  globals:{
    AMap:true,
    moment:true,
    Big:true,
    Vuex:true,
    Vue:true,
    XLSX:true,
  },
  rules: {
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "camelcase": [2, { 
      "properties": "never"
    }],
    "no-unused-vars": [2, { 
      // 允许声明未使用变量
      "vars": "local",
      // 参数不检查
      "args": "none" 
    }],
    "no-unused-expressions": ["error", { 
      "allowShortCircuit": true, 
      "allowTernary": true 
    }]
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
