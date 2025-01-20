import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  endpoint: process.env.COSMOS_ENDPOINT,
  key: process.env.COSMOS_KEY,
};
