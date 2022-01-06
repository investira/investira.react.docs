import React from "react";
import { Info } from "investira.react.components";
import { variants, textColors } from "./options";

export default {
  title: "Info",
  parameters: {
    componentSubtitle:
      "Display de informações de label e valor com layout personalizável",
  },
  component: Info,
  argTypes: {
    variant: {
      options: variants,
      control: { type: "select" },
    },
    variantValue: {
      options: variants,
      control: { type: "select" },
    },
    valueColor: {
      options: textColors,
      control: { type: "radio" },
    },
    labelColor: {
      options: textColors,
      control: { type: "radio" },
    },
    gutter: {
      options: ["left", "full", "right"],
      control: { type: "radio" },
    },

    direction: {
      options: ["vertical", "horizontal"],
      control: { type: "radio" },
    },
  },
};

export const Primary = (args) => <Info {...args} />;

Primary.args = {
  value: "R$ 1.000,00",
  label: "Teste",
  colon: false,
  bold: false,
  gutterBottom: false,
};
