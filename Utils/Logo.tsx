import React from "react";

const Logo: React.FC = () => {
  return (
    <div style={{ position: "fixed", top: 70, left: 10 }}>
      <img src="/favicon.ico" alt="Logo" style={{ width: "60px", height: "auto" }}/>
      <h2 style={{ color: "blue", fontWeight: "bold" }}>Block-Lab Protocol</h2>
    </div>
  );
};

export default Logo;
