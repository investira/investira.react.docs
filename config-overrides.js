const path = require("path");
const fs = require("fs");
const {
  override,
  addDecoratorsLegacy,
  babelInclude,
  addWebpackAlias,
} = require("customize-cra");

module.exports = function (config, env) {
  return Object.assign(
    config,
    override(
      addDecoratorsLegacy(),
      addWebpackAlias({
        react: path.resolve(path.join(__dirname, "./node_modules/react")),
        formik: path.resolve(path.join(__dirname, "./node_modules/formik")),
        "investira.react.components": path.resolve(
          path.join(
            __dirname,
            "./node_modules/investira.react.components/src/components"
          )
        ),
      }),
      babelInclude([
        path.resolve("src"),
        fs.realpathSync("node_modules/investira.react.components/src"),
      ])
    )(config, env)
  );
};
