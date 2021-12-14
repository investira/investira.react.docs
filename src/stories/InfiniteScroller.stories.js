import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { InfiniteScroller, List } from "investira.react.components";

export default {
  title: "InfiniteScroller",
  component: InfiniteScroller,
  decorators: [withKnobs],
};

export const Default = () => {
  return (
    <InfiniteScroller>
      {" "}
      <List>
        {[...Array(200)].map((_, i) => (
          <div> Elemento {i}</div>
        ))}
      </List>
    </InfiniteScroller>
  );
};
