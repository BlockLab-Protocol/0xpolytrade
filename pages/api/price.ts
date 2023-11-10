import qs from "qs";
import type { NextApiRequest, NextApiResponse } from "next";
import * as dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.API_KEY_0X ?? ""; // Provide a default value (empty string)

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const query = qs.stringify(req.query);

  const headers = new Headers();
  headers.append("0x-api-key", apiKey); // Add your custom header

  const response = await fetch(
    `https://polygon.api.0x.org/swap/v1/price?${query}`,
    {
      headers: headers, // Pass the Headers object here
    }
  );

  const data = await response.json();

  res.status(200).json(data);
}















/*

import qs from "qs";
import type { NextApiRequest, NextApiResponse } from "next";
import * as dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.API_KEY_0X;


type Data = {
  name: string;
};
// Define the API URLs for different networks
const networkAPIs: { [key: string]: string } = {
  polygon: "https://polygon.api.0x.org/",
  ethereum: "https://api.0x.org/",
  goerli: "https://goerli.api.0x.org/",
  arbitrum: "https://arbitrum.api.0x.org/",
  avalanche: "https://avalanche.api.0x.org/",
  base: "https://base.api.0x.org/",
  bsc: "https://bsc.api.0x.org/",
  celo: "https://celo.api.0x.org/",
  fantom: "https://fantom.api.0x.org/",
  optimism: "https://optimism.api.0x.org/",
  mumbai: "https://mumbai.api.0x.org/",
};


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const query = qs.stringify(req.query);
  const network = req.query.network as string;

  if (!network) {
    res.status(400).json({ error: "Network not specified in the query parameters." });
    return;
  }

  // Check if the specified network exists in the networkAPIs object
  if (!networkAPIs[network]) {
    res.status(400).json({ error: "Invalid network specified." });
    return;
  }

  const apiUrl = networkAPIs[network];
  const headers: HeadersInit = {
    "0x-api-key": apiKey || '', // Provide a default value or handle undefined apiKey as needed
  };

  const response = await fetch(`${apiUrl}swap/v1/price?${query}`, {
    headers
  });

  const data = await response.json();

  res.status(200).json(data);
}










//default code
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import qs from "qs";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const query = qs.stringify(req.query);
  const response = await fetch(
    `https://polygon.api.0x.org/swap/v1/price?${query}`,
    {
      headers: {
        "0x-api-key": "ba5602f2-c54d-4b4f-a1e3-32cd1940b896", // process.env.NEXT_PUBLIC_0X_API_KEY,
      },
    }
  );

  const data = await response.json();

  res.status(200).json(data);
}

*/










