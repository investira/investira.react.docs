import React from "react";
import { OverLoading } from "investira.react.components";
import { textColors, variants } from "./options";

export default {
  title: "OverLoading",
  component: OverLoading,
  argTypes: {
    variant: {
      options: variants,
      control: { type: "select" },
    },
    color: {
      options: textColors,
      control: { type: "select" },
    },
  },
};

export const Default = (args) => {
  return <OverLoading {...args} />;
};
Default.args = {
  open: true,
  backgroundFlat: false,
  message: "Carregando...",
  color: "textSecondary",
  variant: "caption",
  size: 40,
};
