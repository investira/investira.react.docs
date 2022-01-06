import React from "react";
import { InfoBar } from "investira.react.components";
import { variants, textColors, basicColors, barRange } from "./options";

export default {
  title: "InfoBar",
  parameters: {
    componentSubtitle:
      "Display de informação em forma de barra, utiliza a ProgressBar",
  },
  component: InfoBar,
  argTypes: {
    variant: {
      options: variants,
      control: { type: "select" },
    },
    captionVariant: {
      options: variants,
      control: { type: "select" },
    },
    captionColor: {
      options: textColors,
      control: { type: "radio" },
    },
    labelColor: {
      options: textColors,
      control: { type: "radio" },
    },

    valueColor: {
      options: basicColors,
      control: { type: "radio" },
    },
    value: {
      options: barRange,
      control: { type: "number" },
    },
    label: {
      control: { type: "text" },
    },
    caption: {
      control: { type: "text" },
    },
    animate: {
      options: ["progress", "indeterminate"],
      control: { type: "radio" },
    },
  },
};

export const Primary = (args) => <InfoBar {...args} />;

Primary.args = {
  value: 100,
  label: "Teste",
  variant: "caption",
  captionColor: "textSecondary",
  labelColor: "textSecondary",
  valueColor: "primary",
  caption: "Teste",
  animate: "progress",
  captionVariant: "caption",
};
