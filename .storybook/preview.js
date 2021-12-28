import React from "react";
import { ThemeProvider } from "investira.react.components";
import { themePrimary } from "../src/styles/invThemes";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={themePrimary}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
