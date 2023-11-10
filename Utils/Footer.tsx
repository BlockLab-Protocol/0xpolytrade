import React from "react";

const Footer = () => {
  const footerStyle: React.CSSProperties = {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(128, 128, 128, 0.5)", // Grey with 50% transparency
    color: "#fff",
    textAlign: "center",
    padding: "10px",
  };

  const iconContainer: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px 0",
  };

  const iconStyle: React.CSSProperties = {
    width: "24px",
    height: "24px",
    margin: "0 10px",
  };

  return (
    <footer style={footerStyle}>
      <div style={iconContainer}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/facebook.svg" alt="Facebook" style={iconStyle} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/twitter.svg" alt="Twitter" style={iconStyle} />
        </a>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/github.svg" alt="GitHub" style={iconStyle} />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/youtube.svg" alt="YouTube" style={iconStyle} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/instagram.svg" alt="Instagram" style={iconStyle} />
        </a>
        <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/discord.svg" alt="Discord" style={iconStyle} />
        </a>
      </div>
      &copy; 2023 Blocklab-Protocol || Blockswap
    </footer>
  );
};

export default Footer;
