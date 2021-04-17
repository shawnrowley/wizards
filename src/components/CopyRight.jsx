import React from "react";

const CopyRight = ({ name, year }) => {
  return (
    <div>
      <p>Created by {name}</p>
      <p>CopyRight @{year}</p>
    </div>
  );
};

export default CopyRight;
