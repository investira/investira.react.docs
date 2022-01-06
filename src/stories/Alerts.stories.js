import React from "react";
import { Alerts } from "investira.react.components";
import { alertsColors, textColors, icons } from "./options";

export default {
  title: "Alerts",
  parameters: {
    componentSubtitle: "Alertas",
  },
  component: Alerts,
  argTypes: {
    iconName: {
      options: icons,
      control: { type: "select" },
    },
    backgroundColor: {
      options: alertsColors,
      control: { type: "select" },
    },
    color: {
      options: textColors,
      control: { type: "radio" },
    },
  },
};

export const Primary = (args) => <Alerts {...args}>{args.text}</Alerts>;
Primary.args = {
  close: true,
  iconName: "callcenter",
  open: true,
  backgroundColor: "default",
  text: "Este é um alerta.",
};
