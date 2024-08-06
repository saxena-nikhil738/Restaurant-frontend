import React, { useState } from "react";
import "./Collection.css";
import resImage from "../../Images/res-image.jpg";
import OneCard from "../OneCard/OneCard";
import ControlPointSharpIcon from "@mui/icons-material/ControlPointSharp";
import { useNavigate } from "react-router-dom";

// Helper function to truncate text

const Collection = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  // const [open, setOpen] = useState(false);

  // const handleClose=()=>{
  //   setOpen(false);
  // }
  // const handleOpen = ()=>{
  //   setOpen(true);
  // }

  const addNewRes = () => {
    navigate("/add-new-restaurant");
  };

  const collections = [
    {
      _id: "123456",
      image: resImage,
      name: "Starbucks",
      mealType: "Dinner",
      items: "Burger, Pizza, Thali...",
      location: "Warangal, Telangana",
      price: "50",
    },
    {
      _id: "234567",
      image: resImage,
      name: "pizzahut",
      mealType: "Dinner",
      items: "Burger, lassi, Pizza, Thali...",
      location: "Warangal, Telangana",
      price: "50",
    },
    {
      _id: "345678",
      image: resImage,
      name: "dominos",
      mealType: "Dinner",
      items: "Burger, Pizza, paratha, Thali...",
      location: "Warangal, Telangana",
      price: "50",
    },
    {
      _id: "456789",
      image: resImage,
      name: "dominos",
      mealType: "Dinner",
      items: "Burger, Pizza, paratha, Thali...",
      location: "Warangal, Telangana",
      price: "50",
    },
    {
      _id: "123456",
      image: resImage,
      name: "Starbucks",
      mealType: "Dinner",
      items: "Burger, Pizza, Thali...",
      location: "Warangal, Telangana",
      price: "50",
    },
    {
      _id: "234567",
      image: resImage,
      name: "pizzahut",
      mealType: "Dinner",
      items: "Burger, lassi, Pizza, Thali...",
      location: "Warangal, Telangana",
      price: "50",
    },
    {
      _id: "345678",
      image: resImage,
      name: "dominos",
      mealType: "Dinner",
      items: "Burger, Pizza, paratha, Thali...",
      location: "Warangal, Telangana",
      price: "50",
    },
    {
      _id: "456789",
      image: resImage,
      name: "dominos",
      mealType: "Dinner",
      items: "Burger, Pizza, paratha, Thali...",
      location: "Warangal, Telangana",
      price: "50",
    },
  ];

  const filteredCollections = collections.filter(
    (collection) =>
      collection.name.toLowerCase().includes(query.toLowerCase()) ||
      collection.items.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="collections-content">
      <div className="heading">
        <p>Restaurant Collections</p>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by name or items..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="collections-parent">
        <div className="collections">
          <div className="add-card">
            <div className="inner-add" onClick={addNewRes}>
              <ControlPointSharpIcon style={{ fontSize: "60px" }} />
              <p>Add new Restaurant</p>
            </div>
          </div>
          {filteredCollections.map((collection, index) => (
            <OneCard e={{ collection, index }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
