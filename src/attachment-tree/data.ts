import { IFolderItem } from ".";

export const data: IFolderItem[] = [
  {
    id: "1",
    name: "Hồ sơ định giá tài sản",
    children: [
      {
        id: "2",
        name: "Chứng thư định giá",
        children: [
          {
            id: "3",
            name: "File1.pdf",
            type: "file",
          },
          {
            id: "4",
            name: "File2.docx",
            type: "file",
          },
        ],
        attachButton: true,
        type: "folder",
      },
      {
        id: "5",
        name: "GCN QSDĐ",
        children: [
          {
            id: "6",
            name: "File3.png",
            type: "file",
          },
        ],
        attachButton: true,
        type: "folder",
      },
    ],
    type: "folder",
  },
  {
    id: "7",
    name: "Hồ sơ phê duyệt",
    children: [
      {
        id: "8",
        name: "File4.xlsx",
        type: "file",
      },
    ],
    attachButton: true,
    type: "folder",
  },
];
