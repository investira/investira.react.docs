import React from "react";
import { addParameters } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { HorizontalList } from "investira.react.components";

export default {
  title: "HorizontalList",
  parameters: {
    componentSubtitle:
      "Lista horizontal com centralização do elemento selecionado",
  },
  component: HorizontalList,
};

addParameters({
  docs: {
    inlineStories: false,
  },
});

const Item = (props) => (
  <div
    style={{
      backgroundColor: props.backgroundColor,
      borderRadius: "10px",
      padding: "5px",
      color: "white",
      fontFamily: "Montserrat",
    }}
    onClick={props.onClick}
  >
    Hello {props.data.text}
  </div>
);

const Wrapper = (props) => (
  <div style={{ maxWidth: "150px" }}>{props.children}</div>
);

const generateData = (size = 6) => {
  let xData = [];

  for (let xI = 0; xI <= size; xI++) {
    xData.push({ text: xI });
  }
  return xData;
};

export const Default = (args) => (
  <Wrapper>
    <HorizontalList
      {...args}
      id={"horizontalList"}
      onClick={action("clicked")}
      child={Item}
      childProps={{
        backgroundColor: "#191b2a",
      }}
      data={generateData()}
    />
  </Wrapper>
);
Default.args = {
  initialFocus: 6,
};
