/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ContainerServiceClient } = require("@azure/arm-containerservice");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Contains extra metadata on the version, including supported patch versions, capabilities, available upgrades, and details on preview status of the version
 *
 * @summary Contains extra metadata on the version, including supported patch versions, capabilities, available upgrades, and details on preview status of the version
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/aks/preview/2023-08-02-preview/examples/KubernetesVersions_List.json
 */
async function listKubernetesVersions() {
  const subscriptionId = process.env["CONTAINERSERVICE_SUBSCRIPTION_ID"] || "subid1";
  const location = "location1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.managedClusters.listKubernetesVersions(location);
  console.log(result);
}

async function main() {
  listKubernetesVersions();
}

main().catch(console.error);
