import React from "react";
import { CopyToClipboard } from "investira.react.components";

export default {
  title: "CopyToClipboard",
  component: CopyToClipboard,
};

export const Default = (args) => {
  return <CopyToClipboard {...args} />;
};
Default.args = {
  value: "Exemplo",
};
