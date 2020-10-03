import React from "react";
import FileViewer from "react-file-viewer";
import DogDayDoc from "./Documents/DogDaysAdoptionApplication.docx";

const type = "docx";
export const AdoptionApplication = () => (
  <FileViewer fileType={type} filePath={DogDayDoc} />
);
export default AdoptionApplication;
