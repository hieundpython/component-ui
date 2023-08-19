import React, { ReactNode, createContext } from "react";
import { IFolderItem } from ".";

interface IAttachmentTreeContext {
  folders: IFolderItem[];
  onChangeFolders: (folders: IFolderItem[]) => void;
  uploadFiles: any[];
  onChangeUploadFiles: (files: any[]) => void;
}

const AttachmentTreeContext = createContext<IAttachmentTreeContext | undefined>(
  undefined
);

const AttachmentTreeProvider = ({
  folders,
  onChangeFolders,
  uploadFiles,
  onChangeUploadFiles,
  children,
}: {
  folders: IFolderItem[];
  onChangeFolders: (folders: IFolderItem[]) => void;
  uploadFiles: any[];
  onChangeUploadFiles: (files: any[]) => void;
  children: ReactNode;
}) => {
  const values = {
    folders,
    onChangeFolders,
    uploadFiles,
    onChangeUploadFiles,
  };

  return (
    <AttachmentTreeContext.Provider value={values}>
      {children}
    </AttachmentTreeContext.Provider>
  );
};

const useAttachmentTreeContext = () => {
  const context = React.useContext(AttachmentTreeContext);
  if (context === undefined) {
    throw new Error(
      "useAttachmentTreeContext must be used within a AttachmentTreeContext"
    );
  }
  return context;
};

export { AttachmentTreeProvider, useAttachmentTreeContext };
