import React, { useState } from "react";
import { Row, Select, Button } from "antd";
import "./style.css"; 

const { Option } = Select;

const SelectWithDetail = ({ onDelete }: any) => {
  const [items, setItems] = useState([{ id: 1, selectedValue: null }]);

  const handleSelectChange = (value: any, itemId: any) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, selectedValue: value } : item
    );
    setItems(updatedItems);
  };

  const handleAddItem = () => {
    const newItemId = items.length + 1;
    setItems([...items, { id: newItemId, selectedValue: null }]);
  };

  const handleDeleteItem = (itemId: any) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
    // onDelete(itemId);
  };

  return (
    <div style={{float: "right"}}>
      {items.map((item) => (
        <Row
          gutter={[16, 16]}
          align="middle"
          className="select-with-detail"
          key={item.id}
        >
          <Select
            placeholder="Chọn một mục"
            style={{ width: 200 }}
            onChange={(value) => handleSelectChange(value, item.id)}
            value={item.selectedValue}
          >
            <Option value="option1">Mục 1</Option>
            <Option value="option2">Mục 2</Option>
            <Option value="option3">Mục 3</Option>
          </Select>
          
            <span className="detail-text">
              Mô tả chi tiết cho
            </span>
          
          <Button type="link" onClick={() => handleDeleteItem(item.id)}>
            Xóa
          </Button>
        </Row>
      ))}
      <Button
        type="primary"
        onClick={handleAddItem}
        style={{ marginTop: "10px", float: "right" }}
      >
        Thêm
      </Button>
    </div>
  );
};

export default SelectWithDetail;
