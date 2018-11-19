module.exports = {
  "plugins": [
    "flowtype",
    "react",
    "babel",
    "prettier"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:flowtype/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "prettier/prettier": ["error"],
    "indent": [2, 2, {"SwitchCase": 1}],
    "quotes": [2,"single"],
    "linebreak-style": [2,"unix"],
    "semi": [2,"always"],
    "no-console": 0,
    "max-len": [1,110],
    "comma-dangle": [2,"never"],
    "no-cond-assign": [2, "always"],
    "no-ex-assign": 2,
    "curly": 2,
    "max-depth": [2, 5],
    "complexity": [1, 8],
    "prefer-const": 0,
    "no-trailing-spaces": [2, {"skipBlankLines": false}],
    "one-var": [2, "never"],
    "func-names": 2,
    "key-spacing": [2, {
      "beforeColon": false,
      "afterColon": true
    }],
    "max-nested-callbacks": [2, 2],
    "new-cap": 0,
    "new-parens": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multiple-empty-lines": [1, {"max": 1}],
    "no-nested-ternary": 2,
    "no-new-object": 2,
    "no-spaced-func": 2,
    "arrow-spacing": [2, {"before": true, "after": true}],
    "operator-assignment": [2, "always"],
    "operator-linebreak": [2, "after", {
      "overrides": {
        "?": "before",
        ":": "before"
      }
    }
    ],
    "keyword-spacing": ["error", {before: true, after: true}],
    "space-before-blocks": [2, "always"],
    "space-before-function-paren": [2, "never"],
    "object-curly-spacing": [2, "never"],
    "array-bracket-spacing": [2, "never"],
    "computed-property-spacing": [2, "never"],
    "space-in-parens": [2, "never"],
    "space-infix-ops": [2, {"int32Hint": true}],
    "space-unary-ops": [2, { "words": true, "nonwords": false }],
    "no-delete-var": 2,
    "no-underscore-dangle": 0,
    "no-shadow": 2,
    "no-shadow-restricted-names": 2,
    "no-undef-init": 2,
    "no-undef": 2,
    "no-undefined": 2,
    "no-unused-vars": [2, {
      "vars": "all",
      "args": "after-used",
      "varsIgnorePattern": "hJSX"
    }],
    "yoda": [2, "never"],
    "consistent-return": 2,
    "spaced-line-comment": 0,
    "strict": [2, "global"],
    "eqeqeq": 2,
    "guard-for-in": 2,
    "no-alert": 2,
    "no-caller": 2,
    "no-labels": 2,
    "no-eval": 2,
    "no-fallthrough": 2,
    "default-case": 2,
    "no-iterator": 2,
    "no-loop-func": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-new": 2,
    "no-param-reassign": 2,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-return-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-unused-expressions": 2,
    "no-with": 2,
    "vars-on-top": 0,
    "wrap-iife": [2, "outside"],
    "valid-typeof": 2,
    "max-statements": [1, 30],
    "max-params": [1, 6],
    "no-var": 0,
    "no-unexpected-multiline": 2,
    "dot-location": [2, "property"],
    "no-unreachable": 2,
    "no-negated-in-lhs": 2,
    "no-irregular-whitespace": 2,
    "no-invalid-regexp": 2,
    "no-func-assign": 2,
    "no-extra-semi": 2,
    "no-extra-boolean-cast": 2,
    "no-empty": 2,
    "no-duplicate-case": 2,
    "no-dupe-keys": 2,
    "no-dupe-args": 2,
    "no-constant-condition": 2,
    "comma-style": [2, "last"],
    "eol-last": 2,
    "no-lonely-if": 2,
    "jsx-quotes": ["error", "prefer-single"],
    "react/display-name": 1,
    "react/jsx-boolean-value": 0,
    "react/jsx-no-undef": 2,
    "react/jsx-sort-prop-types": 0,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-multi-comp": 1,
    "react/no-unknown-property": 1,
    "react/prop-types": 1,
    "react/react-in-jsx-scope": 1,
    "react/self-closing-comp": 1,
    "react/sort-comp": 1,
    "react/wrap-multilines": 1,
    "babel/generator-star-spacing": 1,
    "babel/new-cap": 0,
    "babel/object-curly-spacing": [2, "never"],
    "babel/object-shorthand": 1,
    "babel/arrow-parens": 0,
    "babel/no-await-in-loop": 1
  }
};
