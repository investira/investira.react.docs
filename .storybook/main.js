const path = require("path");
const fs = require("fs");

const myConsole = new console.Console(
  fs.createWriteStream("./output_storybook.txt")
);

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-knobs",
  ],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    console.log(`info => Storybook webpackFinal`);

    config.resolve.alias = {
      ...config.resolve.alias,
      "investira.react.components": path.resolve(
        path.join(
          __dirname,
          "../node_modules/investira.react.components/src/components"
        )
      ),
    };

    config.module.rules[5].oneOf[2].include = [
      ...config.module.rules[5].oneOf[2].include,
      fs.realpathSync("node_modules/investira.react.components/src"),
    ];

    return config;
  },
};
