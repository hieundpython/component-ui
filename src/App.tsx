import React, { useState } from "react";
import { FileAttachmentTree } from "./attachment-tree";
import { data } from "./attachment-tree/data";

function App() {
  // const [value, setValue] = useState<any>(null)
  // return <PickDateTime value={value} onChange={(value) => setValue(value)}/>;

  const [folders, setFolders] = useState(data);
  const [uploadFiles, setUploadFiles] = useState<any[]>([]);

  return (
    <div>
      <h3>Đính kèm hồ sơ</h3>
      <FileAttachmentTree
        folders={folders}
        onChangeFolders={setFolders}
        uploadFiles={uploadFiles}
        onChangeUploadFiles={setUploadFiles}
      />
    </div>
  );
}

export default App;
