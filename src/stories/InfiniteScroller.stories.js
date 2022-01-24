import React from "react";
import { InfiniteScroller, List } from "investira.react.components";

export default {
  title: "InfiniteScroller",
  component: InfiniteScroller,
};

export const Default = () => {
  return (
    <InfiniteScroller>
      <List>
        {[...Array(200)].map((_, i) => (
          <div style={{ color: "white" }}> Elemento {i}</div>
        ))}
      </List>
    </InfiniteScroller>
  );
};
