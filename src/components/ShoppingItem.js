import "../custom.css";
import { RxDragHandleHorizontal } from "react-icons/rx";
import React from "react";
import { Button, Form } from "react-bootstrap";

const ShoppingItem = ({
  item,
  index,
  indexItem,
  handleChange,
  handleDelete,
}) => {
  return (
    <div className="shopping-item">
      <RxDragHandleHorizontal
        style={{ cursor: "pointer", height: "45px", width: "85px" }}
      />
      <Form.Control
        type="text"
        placeholder="Item Name"
        value={item.name}
        onChange={(e) => handleChange(indexItem, "name", e.target.value)}
        style={{ height: "42px" }}
      />
      <div className="custom-select">
        <Form.Control
          as="select"
          value={item.quantity}
          onChange={(e) => handleChange(indexItem, "quantity", e.target.value)}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </Form.Control>
      </div>
      <Button variant="danger" onClick={() => handleDelete(indexItem)}>
        Delete
      </Button>
    </div>
  );
};

export default ShoppingItem;
