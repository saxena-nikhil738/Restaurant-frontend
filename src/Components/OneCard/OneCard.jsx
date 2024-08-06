import React, { useState } from "react";
import "./OneCard.css";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import { Edit, Delete } from "@mui/icons-material";
import { Dialog, DialogTitle } from "@mui/material";
import { useNavigate } from "react-router";

const OneCard = ({ e }) => {
  const { collection, index } = e;
  const [delConfirm, setDelConfirm] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const handleClose = () => {
    setDelConfirm(false);
  };

  const deleteRes = () => {
    setDelConfirm(true);
  };
  const deleteConfirmed = (id) => {
    try {
      // API call  use id
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const editRestaurant = (id) => {
    try {
      console.log(id);
      navigate(`/edit-restaurent/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="single-card" key={index}>
      {/* <div className="res-image">
        <img src={collection.image} alt="res-image" />
        
        
      </div> */}
      <Dialog open={delConfirm} onClose={handleClose}>
        <div className="del-parent">
          <DialogTitle>Are you sure?</DialogTitle>
          <div className="add-btns">
            <button
              className="add"
              onClick={(e) => {
                deleteConfirmed(collection._id);
              }}
            >
              DELETE
            </button>
            <button className="cancel" onClick={handleClose}>
              CANCEL
            </button>
          </div>
        </div>
      </Dialog>
      <div className="res-image-container">
        <img src={collection.image} alt="res-image" className="res-image" />
        <div className="overlay">
          <div className="icon-container">
            <Edit
              className="icon"
              style={{ fontSize: "50px" }}
              onClick={() => editRestaurant(collection._id)}
            />
            <Delete
              className="icon"
              style={{ fontSize: "50px" }}
              onClick={deleteRes}
            />
          </div>
        </div>
      </div>
      <div className="res-details">
        <p className="res-name" style={{ fontSize: "20px", fontWeight: "600" }}>
          {truncateText(collection.name, 50)}
        </p>
        <p>
          {truncateText(collection.mealType, 50)} | $ {collection.price} /person
        </p>
        <p>{truncateText(collection.items, 50)}</p>
        <p>{truncateText(collection.location, 50)}</p>
      </div>
    </div>
  );
};

export default OneCard;
