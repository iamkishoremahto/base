
import { MdOutlineFileUpload } from "react-icons/md";
import React, { useState } from 'react';
import { Dashboard  } from '../Dashboard';
import * as XLSX from 'xlsx';

export const Upload = ({setExcelData}) => {
    // const [excelData, setExcelData] = useState([])
    

    const handleExcelDataObject = (file) =>{
        const reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = (e) =>{
            const data = e.target.result;
            const workbook = XLSX.read(data,{type: 'binary'});
            const sheetname = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetname];
            const parseData = XLSX.utils.sheet_to_json(sheet);
            // console.log(parseData);
            setExcelData(parseData);
        
        };
        
    
    }

    const inputOnChange = (e) =>{
        let files = e.target.files
        setDropMessage(files[0].name)
        setBrowseMessage('Remove')
        setUploadFileClass('fileUploaded')
        setBrowseHandler(false);
        handleExcelDataObject(files[0]);
        
    }


    const handleBrowseClick = () =>{
        let inputBtn = document.getElementById('excelFile');
        inputBtn.click();
        inputBtn.addEventListener('change',inputOnChange)
       
    }
    

   const [isDragging, setIsDragging] = useState(false);
   const [dropMessage, setDropMessage] = useState('Drop your excel sheet here or');
   const [browseMessage, setBrowseMessage] = useState('browse')
   const [browseHandler, setBrowseHandler] = useState(true);
   const [uploadFileClass, setUploadFileClass] = useState('')

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        setIsDragging(false);
    };

    const handleDrop =(e) =>{
        e.preventDefault();
        setIsDragging(false);
        const files = e.dataTransfer.files;

        if (files.length > 0) {
            handleFiles(files);
          }

    };


    const handleFiles = (files) => {
        setDropMessage(files[0].name)
        setBrowseMessage('Remove')
        setUploadFileClass('fileUploaded')
        setBrowseHandler(false);
        let fileInput = document.getElementById('excelFile');
        fileInput.files = files;
        const e = new Event('change');
        fileInput.dispatchEvent(e);
        handleExcelDataObject(files[0]);
        
       
        
      };
      

      const handleRemoveClick = () =>{
        setDropMessage('Drop your excel sheet here or')
        setBrowseMessage('browse');
        setUploadFileClass('');
        setBrowseHandler(true);
        setExcelData([]);
        let inputBtn = document.getElementById('excelFile');
        inputBtn.value = ''
      }

    return (
        <>
            <div className="uploadWrapper">
                <div className="uploadArea" 
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                >
                    <input type="file" name="excelFile" id="excelFile" />
                    <img src={process.env.PUBLIC_URL + 'images/excel.svg'} alt="" className="img-fluid excelIcon" />
                    <p className={uploadFileClass}><span id="dropFile">{dropMessage}</span> <span onClick = {browseHandler?handleBrowseClick:handleRemoveClick}>{browseMessage}</span></p>
                </div>
                <div className="uploadBtnWrapper">
                    <button className="uploadBtn">
                        <MdOutlineFileUpload />
                        Upload
                    </button>
                </div>
            </div>
        </>
    )

};



