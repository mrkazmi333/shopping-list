import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import SortableItem from "./SortableItem";

const SortableList = SortableContainer(({ items, ...props }) => {
  return (
    <div className="sortable-list-cont">
      {items.map((item, index) => (
        <SortableItem
          key={`item-${index}`}
          index={index}
          indexItem={index}
          item={item}
          {...props}
        />
      ))}
    </div>
  );
});

export default SortableList;
