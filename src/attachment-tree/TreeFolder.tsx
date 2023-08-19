import { PaperClipOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import React, { useState } from "react";
import { IFolderItem } from ".";
import { useAttachmentTreeContext } from "./context";

export const TreeFolder = ({ node }: { node: IFolderItem }) => {
  const { onChangeUploadFiles } = useAttachmentTreeContext();

  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  if (node.type === "file") {
    return <div>{node.name}</div>;
  }

  if (!node.children) {
    return <div>{node.name}</div>;
  }

  return (
    <div>
      <div onClick={handleToggle} style={{ cursor: "pointer" }}>
        {expanded ? "[-] " : "[+] "}
        {node.name}
        {node.attachButton && (
          <div
            style={{ display: "inline-block" }}
            onClick={(event) => event.stopPropagation()}
          >
            <Upload
              beforeUpload={(_, files) => {
                onChangeUploadFiles(files);
                return false;
              }}
              showUploadList={false}
              multiple
            >
              <PaperClipOutlined /> Đính kèm
            </Upload>
          </div>
        )}
      </div>
      {expanded && node.children && (
        <div style={{ marginLeft: 20 }}>
          {node.children.map((child) => (
            <div key={child.id}>
              <TreeFolder node={child} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
