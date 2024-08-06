import React, { useRef, useState } from "react";
import CloudUploadSharpIcon from "@mui/icons-material/CloudUploadSharp";
import "./AddNew.css";
import defaultImage from "../../Images/default.webp";
import { Dialog } from "@mui/material";
import { useNavigate } from "react-router";

const AddNew = () => {
  // Create a ref for the file input element
  const fileInputRef = useRef(null);
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to trigger the file input click
  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Dialog maxWidth={1000} open={open} onClose={handleClose}>
      <div className="add-restaurant">
        <div className="image">
          <div className="added-image">
            <img src={defaultImage} alt="No image" />
          </div>
          <input
            type="file"
            id="add-image"
            name="resImage"
            className="inp-img"
            ref={fileInputRef}
            style={{ display: "none" }} // Hide the default file input
            onChange={(e) => {
              // Handle file selection if needed
              const file = e.target.files[0];
              console.log(file);
            }}
          />
          <div className="add-img">
            <CloudUploadSharpIcon
              onClick={handleIconClick}
              style={{ cursor: "pointer", fontSize: "80px" }}
            />
            <button className="upload-btn">Upload</button>
          </div>
        </div>
        <div className="res-content-parent">
          <div className="res-content">
            <div className="inp-row">
              <p>Name of Restaurent: </p>
              <input type="text" name="name" id="name" />
            </div>
            <div className="inp-row">
              <p>Food type: </p>
              <select name="foodType" id="">
                <option value="fastfood">FastFood</option>
                <option value="Dining">Dining</option>
                <option value="both">All type</option>
              </select>
            </div>
            <div className="inp-row">
              <p>Price per person: </p>
              <input type="text" name="price" id="price" />
            </div>
            <div className="inp-row">
              <p>Description: </p>
              <input type="text" name="description" id="" />
            </div>
            <div className="inp-row">
              <p>Location: </p>
              <input type="text" name="location" id="" />
            </div>
          </div>
        </div>
        <div className="add-btns">
          <button className="add">Add</button>
          <div className="cancel" onClick={handleClose}>
            Cancel
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default AddNew;
