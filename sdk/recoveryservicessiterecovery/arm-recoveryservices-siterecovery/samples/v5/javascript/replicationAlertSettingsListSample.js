/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SiteRecoveryManagementClient } = require("@azure/arm-recoveryservices-siterecovery");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets the list of email notification(alert) configurations for the vault.
 *
 * @summary Gets the list of email notification(alert) configurations for the vault.
 * x-ms-original-file: specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/stable/2023-06-01/examples/ReplicationAlertSettings_List.json
 */
async function getsTheListOfConfiguredEmailNotificationAlertConfigurations() {
  const subscriptionId =
    process.env["RECOVERYSERVICESSITERECOVERY_SUBSCRIPTION_ID"] ||
    "c183865e-6077-46f2-a3b1-deb0f4f4650a";
  const resourceName = "vault1";
  const resourceGroupName =
    process.env["RECOVERYSERVICESSITERECOVERY_RESOURCE_GROUP"] || "resourceGroupPS1";
  const credential = new DefaultAzureCredential();
  const client = new SiteRecoveryManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.replicationAlertSettings.list(resourceName, resourceGroupName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  getsTheListOfConfiguredEmailNotificationAlertConfigurations();
}

main().catch(console.error);
