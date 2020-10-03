import React from "react";
import FileViewer from "react-file-viewer";
import FosterApplicationDoc from "./Documents/DogDaysFosterApplication.docx";

const type = "docx";
export const FosterApplication = () => (
  <FileViewer fileType={type} filePath={FosterApplicationDoc} />
);
export default FosterApplication;
