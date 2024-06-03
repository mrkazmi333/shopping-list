import React from "react";
import { SortableElement } from "react-sortable-hoc";
import ShoppingItem from "./ShoppingItem";

const SortableItem = SortableElement((props) => <ShoppingItem {...props} />);

export default SortableItem;
