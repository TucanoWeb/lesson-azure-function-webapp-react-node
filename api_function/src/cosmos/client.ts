import { CosmosClient } from "@azure/cosmos";
import { config } from "./api";

const client = new CosmosClient({
  key: config.key,
  endpoint: config.endpoint,
});

export default client;
