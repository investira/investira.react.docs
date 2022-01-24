import React from "react";
import { Icon } from "investira.react.components";
import { icons, iconColors } from "./options";

export default {
  title: "Icon",
  parameters: {
    componentSubtitle: "Renderiza ícones em svg",
  },
  component: Icon,
  argTypes: {
    iconName: {
      control: { type: "select", options: icons },
    },
    color: {
      control: { type: "select", options: iconColors },
    },
  },
};

export const Default = (args) => {
  return <Icon {...args} />;
};
Default.args = {
  size: 160,
  color: "greenLight",
  iconName: "investira_h",
};
