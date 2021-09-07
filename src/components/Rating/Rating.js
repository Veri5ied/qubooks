import React from "react";
import BeautyStars from "beauty-stars";

function Rating({ value }) {
  return (
    <BeautyStars
      value={value}
      size="14px"
      gap="4px"
      inactiveColor="grey"
      padding="0px"
      width="20px"
      activeColor="#ffa534"
    />
  );
}

export default Rating;
