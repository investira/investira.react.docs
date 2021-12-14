import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Transition } from "investira.react.components";

export default {
  title: "Transition",
  component: Transition,
  decorators: [withKnobs],
};

export const Default = () => {
  return <Transition />;
};
