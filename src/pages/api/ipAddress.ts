import type { NextApiRequest, NextApiResponse } from "next";
import type { IPAddressData } from "@/types";

const API_KEY = process.env.IPIFY_API_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IPAddressData | { error: string }>
) {
  const { searchTerm } = req.query;

  if (!searchTerm || typeof searchTerm !== "string") {
    return res.status(400).json({ error: "Search term is required" });
  }

  try {
    const isIP = /^(\d{1,3}\.){3}\d{1,3}$/.test(searchTerm);
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&${
      isIP ? "ipAddress" : "domain"
    }=${searchTerm}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.messages || "Failed to fetch IP data");
    }

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch IP data" });
  }
}
