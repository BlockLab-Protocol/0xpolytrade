import React from "react";
import Link from "next/link";
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";

const Header: React.FC = () => {
  return (
<div>

    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, background: 'green', zIndex: 100 }}>
      <nav>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button className="blue-button-light" style={{ margin: '10px' }}>
            <Link href="/trade" passHref>
              TRADE
            </Link>
          </button>
          <button className="blue-button-medium" style={{ margin: '10px' }}>
            <Link href="/pool" passHref>
              POOL
            </Link>
          </button>
          <button className="blue-button-dark" style={{ margin: '10px' }}>
            <Link href="/earn" passHref>
              EARN
            </Link>
          </button>
          <button className="blue-button-darkest" style={{ margin: '10px' }}>
            <Link href="/analytics" passHref>
              ANALYTICS
            </Link>
          </button>
          <button className="blue-button-light" style={{ margin: '10px' }}>
            <Link href="/airdrop" passHref>
              AIRDROP
            </Link>
          </button>
        </div>
       </nav>
    </header>
    </div>
  );
};

export default Header;



/*
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button className="blue-button-light" style={{ margin: '10px' }}>
            <Link href="/trade" passHref>
              TRADE
            </Link>
          </button>
          <button className="blue-button-medium" style={{ margin: '10px' }}>
            <Link href="/pool" passHref>
              POOL
            </Link>
          </button>
          <button className="blue-button-dark" style={{ margin: '10px' }}>
            <Link href="/earn" passHref>
              EARN
            </Link>
          </button>
          <button className="blue-button-darkest" style={{ margin: '10px' }}>
            <Link href="/analytics" passHref>
              ANALYTICS
            </Link>
          </button>
          <button className="blue-button-light" style={{ margin: '10px' }}>
            <Link href="/airdrop" passHref>
              AIRDROP
            </Link>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;










// components/Header.tsx
import React from "react";
import Link from "next/link";


const Header: React.FC = () => {
  return (
<header>
<nav>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button className="blue-button-light" style={{ margin: '10px' }}>
             <Link href="/trade" passHref>
               TRADE
             </Link>
      </button>
      <button className="blue-button-medium" style={{ margin: '10px' }}>
              <Link href="/pool" passHref>
                POOL
              </Link>
     </button>
      <button className="blue-button-dark" style={{ margin: '10px' }}>
             <Link href="/earn" passHref>
               EARN
             </Link>
      </button>
      <button className="blue-button-darkest" style={{ margin: '10px' }}>
              <Link href="/analytics" passHref>
                ANALYTICS
              </Link>
     </button>
     <button className="blue-button-light" style={{ margin: '10px' }}>
              <Link href="/airdrop" passHref>
                AIRDROP
              </Link>
     </button>
</div>
   

</nav>
</header>
  );
};

export default Header;
*/