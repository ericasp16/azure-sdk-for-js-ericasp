/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  NetworkServiceDesignVersionUpdateState,
  HybridNetworkManagementClient
} from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update network service design version state.
 *
 * @summary Update network service design version state.
 * x-ms-original-file: specification/hybridnetwork/resource-manager/Microsoft.HybridNetwork/stable/2023-09-01/examples/NetworkServiceDesignVersionUpdateState.json
 */
async function updateNetworkServiceDesignVersionState() {
  const subscriptionId =
    process.env["HYBRIDNETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["HYBRIDNETWORK_RESOURCE_GROUP"] || "rg";
  const publisherName = "TestPublisher";
  const networkServiceDesignGroupName = "TestNetworkServiceDesignGroupName";
  const networkServiceDesignVersionName = "1.0.0";
  const parameters: NetworkServiceDesignVersionUpdateState = {
    versionState: "Active"
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.networkServiceDesignVersions.beginUpdateStateAndWait(
    resourceGroupName,
    publisherName,
    networkServiceDesignGroupName,
    networkServiceDesignVersionName,
    parameters
  );
  console.log(result);
}

async function main() {
  updateNetworkServiceDesignVersionState();
}

main().catch(console.error);
