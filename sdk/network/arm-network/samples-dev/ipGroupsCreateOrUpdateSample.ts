/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { IpGroup, NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates an ipGroups in a specified resource group.
 *
 * @summary Creates or updates an ipGroups in a specified resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-06-01/examples/IpGroupsCreate.json
 */
async function createOrUpdateIPGroups() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subId";
  const resourceGroupName =
    process.env["NETWORK_RESOURCE_GROUP"] || "myResourceGroup";
  const ipGroupsName = "ipGroups1";
  const parameters: IpGroup = {
    ipAddresses: ["13.64.39.16/32", "40.74.146.80/31", "40.74.147.32/28"],
    location: "West US",
    tags: { key1: "value1" }
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.ipGroups.beginCreateOrUpdateAndWait(
    resourceGroupName,
    ipGroupsName,
    parameters
  );
  console.log(result);
}

async function main() {
  createOrUpdateIPGroups();
}

main().catch(console.error);
