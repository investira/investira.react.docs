import React from "react";
import { IconDatePicker } from "investira.react.components";

export default {
  title: "IconDatePicker",
  component: IconDatePicker,
  argTypes: {
    value: {
      control: { type: "date" },
    },
  },
};

export const Default = (args) => {
  return <IconDatePicker {...args} />;
};
