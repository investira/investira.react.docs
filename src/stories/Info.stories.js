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
      control: { type: "radios" },
    },
    labelColor: {
      options: textColors,
      control: { type: "radios" },
    },
    gutter: {
      options: ["left", "full", "right"],
      control: { type: "radios" },
    },

    direction: {
      options: ["vertical", "horizontal"],
      control: { type: "radios" },
    },
  },
};

const Template = (args) => (
  <div
    style={{
      backgroundColor: "#191b2a",
      padding: "16px",
      borderRadius: "10px",
      width: "300px",
    }}
  >
    <Info />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  value: "R$ 1.000,00",
  label: "Teste",
  colon: false,
  bold: false,
  gutterBottom: false,
};
