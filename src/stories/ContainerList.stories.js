import React from "react";
import { ContainerList, List } from "investira.react.components";

export default {
  title: "ContainerList",
  component: ContainerList,
};

export const Primary = (args) => {
  return (
    <ContainerList {...args}>
      <List>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <div
            style={{
              color: "white",
              fontFamily: "Montserrat",
              padding: "8px 0px",
            }}
          >
            Elemento {item}
          </div>
        ))}
      </List>
    </ContainerList>
  );
};
Primary.args = { sticky: false };
