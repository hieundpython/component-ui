import React from "react";
import { TreeFolder } from "./TreeFolder";
import { AttachmentTreeProvider } from "./context";

export interface IFolderItem {
  id: string;
  name: string;
  attachButton?: boolean;
  children?: IFolderItem[];
  type: "folder" | "file";
}

type Props = {
  folders: IFolderItem[];
  onChangeFolders: (folders: IFolderItem[]) => void;
  uploadFiles: any[];
  onChangeUploadFiles: (files: any[]) => void;
};

export const FileAttachmentTree = (props: Props) => {
  const { folders } = props;

  return (
    <AttachmentTreeProvider {...props}>
      <div>
        <div style={{ marginLeft: 20 }}>
          {folders.map((rootNode) => (
            <div key={rootNode.id}>
              <TreeFolder node={rootNode} />
            </div>
          ))}
        </div>
      </div>
    </AttachmentTreeProvider>
  );
};
