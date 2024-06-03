import React, { useState } from "react";
import { arrayMoveImmutable as arrayMove } from 'array-move';
import SortableList from "./SortableList";
import { Button, Form, Modal } from "react-bootstrap";
import "../custom.css";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [listName, setListName] = useState("");
  const [listType, setListType] = useState("Grocery");
  const [showModal, setShowModal] = useState(false);

  const handleAddItem = () => {
    setItems([...items, { name: "", quantity: 1 }]);
  };

  const handleDeleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleItemChange = (index, field, value) => {
    const newItems = items.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setItems(newItems);
  };

  const handleSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  const handleSaveList = () => {
    if (
      !listName ||
      !listType ||
      items.some((item) => !item.name || !item.quantity)
    ) {
      alert("Please fill in all fields before saving.");
      return;
    }
    setShowModal(true);
  };

  return (
    <div className="shopping-list">
      <h3>My Shopping list</h3>
      <Form className="list-fields-cont">
        <Form.Group className="list-field-group">
          <Form.Label>List Name</Form.Label>
          <Form.Control
            type="text"
            value={listName}
            onChange={(e) => setListName(e.target.value)}
            required
            style={{ height: "42px" }}
          />
        </Form.Group>
        <Form.Group className="list-field-group">
          <Form.Label>Type</Form.Label>
          <div className="custom-select">
            <Form.Control
              as="select"
              value={listType}
              onChange={(e) => setListType(e.target.value)}
              required
            >
              <option>Grocery</option>
              <option>Home Goods</option>
              <option>Hardware</option>
            </Form.Control>
          </div>
        </Form.Group>
      </Form>
      <Button
        variant="primary"
        onClick={handleAddItem}
        style={{ width: "100%", margin: "12px 0" }}
      >
        Add an Item
      </Button>
      <div className="sortable-list-heading">
        <div style={{ width: "60%" }}>Item name</div>

        <div style={{ width: "40%" }}>quantity</div>
      </div>
      <SortableList
        items={items}
        handleChange={handleItemChange}
        handleDelete={handleDeleteItem}
        onSortEnd={handleSortEnd}
      />
      <div
        style={{
          height: "60px",
          padding: "10px",
          borderTop: "1px solid #ddd",
          position: "absolute",
          marginLeft: "-20px",
          bottom: "0px",
          width: "100%",
          background: '#fff',
        }}
      >
        <Button variant="success" onClick={handleSaveList}>
          Save List
        </Button>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping List Saved!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your shopping list has been saved successfully.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ShoppingList;
