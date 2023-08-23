import { Radio } from "antd";
import "./style.css"; // Import tệp CSS của bạn
import SelectWithDetail from "./SelectWithDetail";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="radio-group-container">
        <div className="additional-label">Bổ sung hồ sơ</div>
        <Radio.Group className="horizontal-radio-group">
          <Radio value="option1">Option 1</Radio>
          <Radio value="option2">Option 2</Radio>
          <Radio value="option3">Option 3</Radio>
        </Radio.Group>
      </div>
      <div style={{ marginTop: 10 }}>
        <SelectWithDetail />
      </div>
    </>
  );
};

export default Header;
