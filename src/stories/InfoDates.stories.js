import React from "react";
import { InfoDates } from "investira.react.components";
import { textColors, variants } from "./options";

const optionsFormat = {
  custom: "custom",
  datetime: "datetime",
  date: "date",
  duration: "duration",
  fromnow: "fromnow",
};

export default {
  title: "InfoDates",
  parameters: {
    componentSubtitle: "Display de informações de data",
  },
  component: InfoDates,
  argTypes: {
    color: {
      options: textColors,
      control: { type: "select" },
    },
    direction: {
      options: {
        horizontal: "horizontal",
        vertical: "vertical",
      },
      control: { type: "radio" },
    },
    format: {
      control: { type: "text" },
    },
    time: {
      control: { type: "date" },
    },
    variant: {
      options: optionsFormat,
      control: { type: "select" },
    },
    labelVariant: {
      options: variants,
      control: { type: "select" },
    },
    timeVariant: {
      options: variants,
      control: { type: "select" },
    },
  },
};

export const Primary = (args) => <InfoDates {...args} />;

Primary.args = {
  color: "textSecondary",
  bold: false,
  colon: false,
  gutterBottom: true,
  label: "Label",
  variant: "datetime",
  labelVariant: "caption",
  timeVariant: "caption",
};
