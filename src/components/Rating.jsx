import React from "react";
import { FaStar } from "react-icons/fa"; // Install react-icons if not already: npm install react-icons

const StarRating = ({ rating }) => {
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          size={24}
          color={star <= rating ? "#FFD700" : "#dcdcdc"} // Yellow for active, gray for inactive
        />
      ))}
    </div>
  );
};

export default StarRating;
