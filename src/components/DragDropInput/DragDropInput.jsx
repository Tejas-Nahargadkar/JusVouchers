import React, { useState } from 'react'
import './DragDropInput.css'
import { ReactComponent as Upload } from "../asset/upload.svg";
export default function DragDropInput({file,setFile}) {

    const [progress, setProgress] = useState('input-inactive')
    
    const handleDragEnter = e => {
        e.preventDefault();
        console.log("drag enter");
        setProgress('input-hover')
        e.stopPropagation();
      };
    
      const handleDragLeave = e => {
        e.preventDefault();
        console.log("drag leave");
        if(!file) setProgress('input-inactive')
      };
    
      const handleDragOver = e => {
        e.preventDefault();
        setProgress('input-hover')
        e.stopPropagation();
      };
    
      const handleDrop = e => {
        e.preventDefault();
        console.log("drag drop");
        setProgress('input-drop')
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            console.log(e.dataTransfer.files[0].name)
            setFile({...file,url:e.dataTransfer.files[0]});
          }
      };
    
      const handleInputChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile({...file,url:e.target.files[0]});
          }
      };
      const handleClick =(e)=>{
          document.getElementById('fileInput').click()
      }
    
  return (
    <div
      className={`dragDropInput ${progress}`}
      onDrop={e => handleDrop(e)}
      onDragOver={e => handleDragOver(e)}
      onDragEnter={e => handleDragEnter(e)}
      onDragLeave={e => handleDragLeave(e)}
      onChange={handleInputChange}
      onClick = {handleClick}
    >
      <div className="sub-header">{!file&&<Upload>Upload</Upload>}{file?file.name:'Drag & drop file here'}</div>
      <div className="draggable-container">
        <input type="file" name="" id="fileInput" onChange={handleInputChange} style={{display:'none'}} />
      </div>
    </div>
  )
}
