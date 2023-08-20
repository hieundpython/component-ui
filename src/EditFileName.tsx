import React, { useState } from 'react';
import { Button, Modal, Input } from 'antd';

const SimpleComponent = () => {
  const [name, setName] = useState('SampleFile');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleButtonClick = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  return (
    <div>
      <p>File name: {name}</p>
      <Button onClick={handleButtonClick}>Edit Name</Button>

      <Modal
        title="Edit File Name"
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <Input value={name} onChange={handleNameChange} />
      </Modal>
    </div>
  );
};

export default SimpleComponent;
