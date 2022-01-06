import React from "react";
import { InfoBool } from "investira.react.components";
import { textColors, variants } from "./options";

export default {
  title: "InfoBool",
  parameters: {
    componentSubtitle: "Display de informações de apenas dois estados",
  },
  component: InfoBool,
  argTypes: {
    labelColor: {
      options: textColors,
      control: { type: "radio" },
    },
    variant: {
      options: variants,
      control: { type: "select" },
    },
  },
};

export const Primary = (args) => <InfoBool {...args} />;
Primary.args = {
  value: false,
  label: "Teste",
  variant: "caption",
  labelColor: "textSecondary",
  gutter: false,
};
