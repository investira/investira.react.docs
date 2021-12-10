var path = require("path");
var fs = require("fs");
const {
  override,
  addDecoratorsLegacy,
  babelInclude,
  addBabelPresets,
  addWebpackAlias,
  addBabelPlugin,
} = require("customize-cra");

module.exports = function (config, env) {
  return Object.assign(
    config,
    override(
      addDecoratorsLegacy(),
      addWebpackAlias({
        react: path.resolve(path.join(__dirname, "./node_modules/react")),
        formik: path.resolve(path.join(__dirname, "./node_modules/formik")),
        investiraComponents: path.resolve(
          path.join(__dirname, "./node_modules/investira.react.components")
        ),
        investiraLib: path.resolve(
          path.join(__dirname, "./node_modules/investira.react.lib")
        ),
      }),
      babelInclude([
        path.resolve("src"),
        fs.realpathSync("node_modules/investira.react.components"),
      ]),
      babelInclude([
        path.resolve("src"),
        fs.realpathSync("node_modules/investira.react.lib"),
      ])
      //...addBabelPresets("@babel/preset-env", "@babel/preset-react")
      //   addBabelPlugin(["@babel/plugin-syntax-jsx", {}]),
      //   addBabelPlugin([
      //     "@babel/plugin-proposal-optional-chaining",
      //     { loose: false },
      //   ]),
      //   addBabelPlugin([
      //     "@babel/plugin-proposal-nullish-coalescing-operator",
      //     { loose: false },
      //   ])
    )(config, env)
  );
};
