import React from "react";
import { FluidPaper } from "investira.react.components";

export default {
  title: "FluidPaper",
  parameters: {
    componentSubtitle: "Paper que alarga em 100% quando selecionado",
  },
  component: FluidPaper,
  argTypes: {
    variant: {
      options: ["elevation"],
      control: { type: "radio" },
    },
    elevation: {
      control: { type: "number" },
    },
    selected: {
      control: { type: "boolean" },
    },
  },
};

export const Default = (args) => {
  return (
    <FluidPaper {...args}>
      <div style={{ padding: "16px", fontFamily: "Montserrat" }}>
        <b> {args.conteudo} </b>
      </div>
    </FluidPaper>
  );
};

Default.args = {
  square: false,
  selected: false,
  conteudo: "Papel fluido",
};
