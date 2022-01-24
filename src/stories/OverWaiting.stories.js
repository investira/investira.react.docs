import React from "react";
import { OverWaiting } from "investira.react.components";
import { textColors, variants } from "./options";

export default {
  title: "OverWaiting",
  component: OverWaiting,
  argTypes: {
    progressProps: {
      color: {
        options: [
          "primary",
          "secondary",
          "success",
          "info",
          "warning",
          "danger",
        ],
        control: { type: "select" },
      },
      variant: {
        options: ["determinate", "indeterminate", "query", "buffer"],
        control: { type: "radio" },
      },
    },
    typographyProps: {
      color: {
        options: textColors,
        control: { type: "radio" },
      },
      variant: {
        options: variants,
        control: { type: "select" },
      },
    },
  },
};

export const Default = (args) => {
  return <OverWaiting {...args} />;
};
Default.args = {
  cancelable: true,
  backgroundFlat: false,
  open: true,
  message: "Carregando...",
  progressProps: {
    color: "primary",
    value: 100,
    variant: "determinate",
  },
  typographyProps: {
    color: "textSecondary",
    variant: "caption",
  },
  min: 0,
  max: 100,
};
