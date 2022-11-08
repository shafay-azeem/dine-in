import React from "react";
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";

const GlobalFunction = (props) => {
  const exportToExcel = async () => {
    const ws = XLSX.utils.json_to_sheet(props.excelData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: props.fileType });
    FileSaver.saveAs(data, props.fileName + props.fileExtension);
  };
  return exportToExcel;
};

export default GlobalFunction;
