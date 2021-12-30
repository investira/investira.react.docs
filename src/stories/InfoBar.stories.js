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
    captionColor: {
      options: textColors,
      control: { type: "radios" },
    },
    labelColor: {
      options: textColors,
      control: { type: "radios" },
    },

    valueColor: {
      options: basicColors,
      control: { type: "radios" },
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
      control: { type: "radios" },
    },
  },
};

export const Template = () => {
  return (
    <div
      style={{
        backgroundColor: "#191b2a",
        padding: "16px",
        borderRadius: "10px",
        width: "300px",
      }}
    >
      <InfoBar variantValue={"body1"} />
    </div>
  );
};
export const Primary = Template.bind({});
Primary.args = {
  value: 100,
  label: "Teste",
  variant: "caption",
  captionColor: "textSecondary",
  labelColor: "textSecondary",
  valueColor: "primary",
  caption: "Teste",
  animate: "progress",
};
