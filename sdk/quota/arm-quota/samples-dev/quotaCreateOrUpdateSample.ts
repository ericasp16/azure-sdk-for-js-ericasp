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
  CurrentQuotaLimitBase,
  AzureQuotaExtensionAPI
} from "@azure/arm-quota";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update the quota limit for the specified resource with the requested value. To update the quota, follow these steps:
1. Use the GET operation for quotas and usages to determine how much quota remains for the specific resource and to calculate the new quota limit. These steps are detailed in [this example](https://techcommunity.microsoft.com/t5/azure-governance-and-management/using-the-new-quota-rest-api/ba-p/2183670).
2. Use this PUT operation to update the quota limit. Please check the URI in location header for the detailed status of the request.
 *
 * @summary Create or update the quota limit for the specified resource with the requested value. To update the quota, follow these steps:
1. Use the GET operation for quotas and usages to determine how much quota remains for the specific resource and to calculate the new quota limit. These steps are detailed in [this example](https://techcommunity.microsoft.com/t5/azure-governance-and-management/using-the-new-quota-rest-api/ba-p/2183670).
2. Use this PUT operation to update the quota limit. Please check the URI in location header for the detailed status of the request.
 * x-ms-original-file: specification/quota/resource-manager/Microsoft.Quota/stable/2023-02-01/examples/putNetworkOneSkuQuotaRequest.json
 */
async function quotasPutRequestForNetwork() {
  const resourceName = "MinPublicIpInterNetworkPrefixLength";
  const scope =
    "subscriptions/D7EC67B3-7657-4966-BFFC-41EFD36BAAB3/providers/Microsoft.Network/locations/eastus";
  const createQuotaRequest: CurrentQuotaLimitBase = {
    properties: {
      name: { value: "MinPublicIpInterNetworkPrefixLength" },
      limit: { limitObjectType: "LimitValue", value: 10 },
      resourceType: "MinPublicIpInterNetworkPrefixLength"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureQuotaExtensionAPI(credential);
  const result = await client.quota.beginCreateOrUpdateAndWait(
    resourceName,
    scope,
    createQuotaRequest
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update the quota limit for the specified resource with the requested value. To update the quota, follow these steps:
1. Use the GET operation for quotas and usages to determine how much quota remains for the specific resource and to calculate the new quota limit. These steps are detailed in [this example](https://techcommunity.microsoft.com/t5/azure-governance-and-management/using-the-new-quota-rest-api/ba-p/2183670).
2. Use this PUT operation to update the quota limit. Please check the URI in location header for the detailed status of the request.
 *
 * @summary Create or update the quota limit for the specified resource with the requested value. To update the quota, follow these steps:
1. Use the GET operation for quotas and usages to determine how much quota remains for the specific resource and to calculate the new quota limit. These steps are detailed in [this example](https://techcommunity.microsoft.com/t5/azure-governance-and-management/using-the-new-quota-rest-api/ba-p/2183670).
2. Use this PUT operation to update the quota limit. Please check the URI in location header for the detailed status of the request.
 * x-ms-original-file: specification/quota/resource-manager/Microsoft.Quota/stable/2023-02-01/examples/putNetworkOneSkuQuotaRequestStandardSkuPublicIpAddresses.json
 */
async function quotasPutRequestForNetworkStandardSkuPublicIPAddressesResource() {
  const resourceName = "StandardSkuPublicIpAddresses";
  const scope =
    "subscriptions/D7EC67B3-7657-4966-BFFC-41EFD36BAAB3/providers/Microsoft.Network/locations/eastus";
  const createQuotaRequest: CurrentQuotaLimitBase = {
    properties: {
      name: { value: "StandardSkuPublicIpAddresses" },
      limit: { limitObjectType: "LimitValue", value: 10 },
      resourceType: "PublicIpAddresses"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureQuotaExtensionAPI(credential);
  const result = await client.quota.beginCreateOrUpdateAndWait(
    resourceName,
    scope,
    createQuotaRequest
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update the quota limit for the specified resource with the requested value. To update the quota, follow these steps:
1. Use the GET operation for quotas and usages to determine how much quota remains for the specific resource and to calculate the new quota limit. These steps are detailed in [this example](https://techcommunity.microsoft.com/t5/azure-governance-and-management/using-the-new-quota-rest-api/ba-p/2183670).
2. Use this PUT operation to update the quota limit. Please check the URI in location header for the detailed status of the request.
 *
 * @summary Create or update the quota limit for the specified resource with the requested value. To update the quota, follow these steps:
1. Use the GET operation for quotas and usages to determine how much quota remains for the specific resource and to calculate the new quota limit. These steps are detailed in [this example](https://techcommunity.microsoft.com/t5/azure-governance-and-management/using-the-new-quota-rest-api/ba-p/2183670).
2. Use this PUT operation to update the quota limit. Please check the URI in location header for the detailed status of the request.
 * x-ms-original-file: specification/quota/resource-manager/Microsoft.Quota/stable/2023-02-01/examples/putComputeOneSkuQuotaRequest.json
 */
async function quotasPutRequestForCompute() {
  const resourceName = "standardFSv2Family";
  const scope =
    "subscriptions/D7EC67B3-7657-4966-BFFC-41EFD36BAAB3/providers/Microsoft.Compute/locations/eastus";
  const createQuotaRequest: CurrentQuotaLimitBase = {
    properties: {
      name: { value: "standardFSv2Family" },
      limit: { limitObjectType: "LimitValue", value: 10 }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureQuotaExtensionAPI(credential);
  const result = await client.quota.beginCreateOrUpdateAndWait(
    resourceName,
    scope,
    createQuotaRequest
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update the quota limit for the specified resource with the requested value. To update the quota, follow these steps:
1. Use the GET operation for quotas and usages to determine how much quota remains for the specific resource and to calculate the new quota limit. These steps are detailed in [this example](https://techcommunity.microsoft.com/t5/azure-governance-and-management/using-the-new-quota-rest-api/ba-p/2183670).
2. Use this PUT operation to update the quota limit. Please check the URI in location header for the detailed status of the request.
 *
 * @summary Create or update the quota limit for the specified resource with the requested value. To update the quota, follow these steps:
1. Use the GET operation for quotas and usages to determine how much quota remains for the specific resource and to calculate the new quota limit. These steps are detailed in [this example](https://techcommunity.microsoft.com/t5/azure-governance-and-management/using-the-new-quota-rest-api/ba-p/2183670).
2. Use this PUT operation to update the quota limit. Please check the URI in location header for the detailed status of the request.
 * x-ms-original-file: specification/quota/resource-manager/Microsoft.Quota/stable/2023-02-01/examples/putMachineLearningServicesQuotaRequestLowPriority.json
 */
async function quotasRequestForMachineLearningServicesLowPriorityResource() {
  const resourceName = "TotalLowPriorityCores";
  const scope =
    "subscriptions/D7EC67B3-7657-4966-BFFC-41EFD36BAAB3/providers/Microsoft.MachineLearningServices/locations/eastus";
  const createQuotaRequest: CurrentQuotaLimitBase = {
    properties: {
      name: { value: "TotalLowPriorityCores" },
      limit: { limitObjectType: "LimitValue", value: 10 },
      resourceType: "lowPriority"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureQuotaExtensionAPI(credential);
  const result = await client.quota.beginCreateOrUpdateAndWait(
    resourceName,
    scope,
    createQuotaRequest
  );
  console.log(result);
}

async function main() {
  quotasPutRequestForNetwork();
  quotasPutRequestForNetworkStandardSkuPublicIPAddressesResource();
  quotasPutRequestForCompute();
  quotasRequestForMachineLearningServicesLowPriorityResource();
}

main().catch(console.error);
