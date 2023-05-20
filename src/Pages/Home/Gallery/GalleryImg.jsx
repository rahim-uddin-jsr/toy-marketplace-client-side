import React from "react";

const GalleryImg = ({ img }) => {
  return (
    <div className="border p-5 mx-auto rounded-lg">
      <img className="mask w-[240px] h-[320px]" src={img} />
    </div>
  );
};

export default GalleryImg;
