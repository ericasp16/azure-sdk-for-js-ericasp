/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { FirewallRule, CosmosDBManagementClient } from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates a new firewall rule or updates an existing firewall rule on a mongo cluster.
 *
 * @summary Creates a new firewall rule or updates an existing firewall rule on a mongo cluster.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2023-09-15-preview/examples/mongo-cluster/CosmosDBMongoClusterFirewallRuleCreate.json
 */
async function createAFirewallRuleOfTheMongoCluster() {
  const subscriptionId =
    process.env["COSMOSDB_SUBSCRIPTION_ID"] ||
    "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName =
    process.env["COSMOSDB_RESOURCE_GROUP"] || "TestGroup";
  const mongoClusterName = "myMongoCluster";
  const firewallRuleName = "rule1";
  const parameters: FirewallRule = {
    endIpAddress: "255.255.255.255",
    startIpAddress: "0.0.0.0"
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.mongoClusters.beginCreateOrUpdateFirewallRuleAndWait(
    resourceGroupName,
    mongoClusterName,
    firewallRuleName,
    parameters
  );
  console.log(result);
}

async function main() {
  createAFirewallRuleOfTheMongoCluster();
}

main().catch(console.error);
