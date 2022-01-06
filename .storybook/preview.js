import React from "react";
import { ThemeProvider } from "investira.react.components";
import { themePrimary } from "../src/styles/invThemes";
import { ReactComponent as IconSprite } from "../src/images/symbol-defs.svg";
import "../src/global/global.css";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={themePrimary}>
      <div id={"test-root"} className={"themePrimary"}>
        <Story />
        <IconSprite />
      </div>
    </ThemeProvider>
  ),
];

export const parameters = {
  backgrounds: {
    default: "Background Dark",
    values: [
      {
        name: "Primary",
        value: "#00dfa8",
      },
      {
        name: "Background Dark",
        value: "#191b2a",
      },
      {
        name: "Secondary",
        value: "#2e2e46",
      },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
