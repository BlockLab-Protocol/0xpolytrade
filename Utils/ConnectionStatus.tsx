import { useAccount } from "wagmi";
import React, { useState } from 'react';
//import { ReactNode } from "react";

const ConnectionStatus = () => {
  const { address, isConnecting, isDisconnected } = useAccount() || {};

  const addressStyle = {
    color: 'green',
  };

  const containerStyle: React.CSSProperties = {
    position: "relative",
    top: "1px",
    right: "10px",
  };

  const textStyle: React.CSSProperties = {
    color: "lightblue",
    // You can add other CSS styles here if needed
  };

  const [isCopied, setIsCopied] = useState(false);

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  const copyAddress = () => {
    if (address) {
      const addressString = address as string; // Type assertion to ensure it's a string
      navigator.clipboard.writeText(addressString).then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1000);
      });
    }
  };

  if (isConnecting) {
    return (
      <div style={containerStyle}>
        <div style={textStyle}>Connecting...</div>
      </div>
    );
  }

  if (isDisconnected) {
    return (
      <div style={containerStyle}>
        <div style={textStyle}>Disconnected</div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div>
        <span style={textStyle}>Connected Wallet: </span>
        <span style={addressStyle}>
  {address && truncateAddress(address)}
</span>
        <button
          onClick={copyAddress}
          className="cursor-pointer"
          style={{ marginLeft: '10px', color: isCopied ? 'green' : 'blue' }}
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
      {/* Display wallet balances here */}
      {/* You can add your wallet balance components or logic here */}
    </div>
  );
};

export default ConnectionStatus;






























/*


import { useAccount } from "wagmi";
import React from 'react';


const ConnectionStatus = () => {
  const { address, isConnecting, isDisconnected } = useAccount() || {};

  const addressStyle = {
    color: 'green',
  };
  

  const containerStyle: React.CSSProperties = {
    position: "relative",
    top: "1px",
    right: "10px",
  };

  const textStyle: React.CSSProperties = {
    color: "blue",
    // You can add other CSS styles here if needed
  };

  if (isConnecting) {
    return (
      <div style={containerStyle}>
        <div style={textStyle}>Connecting...</div>
      </div>
    );
  }

  if (isDisconnected) {
    return (
      <div style={containerStyle}>
        <div style={textStyle}>Disconnected</div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div>
        <span style={textStyle}>Connected Wallet: </span>
        <span style={addressStyle}>{address}</span>
      </div>
    </div>
  );
};

export default ConnectionStatus;



*/













/*
import { useAccount } from "wagmi";

const ConnectionStatus = () => {
  // Add error handling in case useAccount() doesn't return an object as expected
  const { address, isConnecting, isDisconnected } = useAccount() || {};

  const textStyle = {
    color: "blue",
    // You can add other CSS styles here if needed
  };

  if (isConnecting) {
    return <div style={textStyle}>Connecting...</div>;
  }

  if (isDisconnected) {
    return <div style={textStyle}>Disconnected</div>;
  }

  return (
    <div>
      <span style={textStyle}>Connected Wallet: </span>
      <span>{address}</span>
    </div>
  );
};

export default ConnectionStatus;






*/


/*
import { useAccount } from "wagmi";

// Make sure that this component is wrapped with ConnectKitProvider
const MyComponent = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  if (isConnecting) return <div>Connecting...</div>;
  if (isDisconnected) return <div>Disconnected</div>;
  return <div>Connected Wallet: {address}</div>;
};
export default MyComponent;
*/