import React from "react";
import { FilterBar } from "investira.react.components";
import { iconColors, icons } from "./options";

export default {
  title: "FilterBar",
  component: FilterBar,
  argTypes: {
    iconName: {
      options: icons,
      control: { type: "select" },
    },
    color: {
      options: iconColors,
      control: { type: "select" },
    },
    default: {
      options: iconColors,
      control: { type: "select" },
    },
  },
};

export const Default = (args) => {
  const generateData = (size = 6) => {
    let xData = [];

    for (let xI = 0; xI <= size; xI++) {
      xData.push({
        label: `FILTER ${xI}`,
        iconName: args.iconName,
        color: args.color,
        default: args.default,
      });
    }
    return xData;
  };
  return <FilterBar {...args} data={generateData()} />;
};
Default.args = {
  margin: true,
  iconName: "ok",
  color: "primary",
  default: "secondary",
};
