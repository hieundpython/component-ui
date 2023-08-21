import React from 'react';
import { Table } from 'antd';

const columns: any[] = [
  {
    title: 'Mã nhân viên',
    dataIndex: 'maNhanVien',
    key: 'maNhanVien',
    fixed: 'left',
    width: 100,
  },
  {
    title: 'Họ và tên',
    dataIndex: 'hoTen',
    key: 'hoTen',
    fixed: 'left',
    width: 150,
  },
  {
    title: 'Phòng thẩm định',
    dataIndex: 'phongThamDinh',
    key: 'phongThamDinh',
    fixed: 'left',
    width: 150,
  },
  {
    title: 'Doanh thu',
    dataIndex: 'doanhThu',
    key: 'doanhThu',
    fixed: 'left',
    width: 150,
  },
  // Add day columns dynamically here
  ...Array.from({ length: 30 }, (_, i) => ({
    title: `Ngày ${i + 1}`,
    children: [
      {
        title: 'AM',
        dataIndex: `ngay${i + 1}AM`,
        key: `ngay${i + 1}AM`,
        render: (text: any) => (text ? text : '-'),
      },
      {
        title: 'PM',
        dataIndex: `ngay${i + 1}PM`,
        key: `ngay${i + 1}PM`,
        render: (text: any) => (text ? text : '-'),
      },
    ],
  })),
];

const sampleData = [
  {
    key: '1',
    maNhanVien: 'NV001',
    hoTen: 'Nguyễn Văn A',
    phongThamDinh: 'Phòng A',
    doanhThu: '$100,000',
    // Add day data here
    ...Array.from({ length: 30 }, (_, i) => ({
      [`ngay${i + 1}AM`]: `AM${i + 1}`,
      [`ngay${i + 1}PM`]: `PM${i + 1}`,
    })),
  },
  // Add more sample data here
];

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Employee Table</h1>
      <Table
        columns={columns}
        dataSource={sampleData}
        scroll={{ x: true }}
        bordered
        pagination={false} 
      />
    </div>
  );
};

export default App;
