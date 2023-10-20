/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureNetworkFabricManagementServiceAPI } = require("@azure/arm-managednetworkfabric");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Update certain properties of the Network Fabric resource.
 *
 * @summary Update certain properties of the Network Fabric resource.
 * x-ms-original-file: specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/stable/2023-06-15/examples/NetworkFabrics_Update_MaximumSet_Gen.json
 */
async function networkFabricsUpdateMaximumSetGen() {
  const subscriptionId =
    process.env["MANAGEDNETWORKFABRIC_SUBSCRIPTION_ID"] || "1234ABCD-0A1B-1234-5678-123456ABCDEF";
  const resourceGroupName = process.env["MANAGEDNETWORKFABRIC_RESOURCE_GROUP"] || "example-rg";
  const networkFabricName = "example-fabric";
  const body = {
    annotation: "annotation1",
    fabricASN: 12345,
    ipv4Prefix: "10.18.0.0/17",
    ipv6Prefix: "3FFE:FFFF:0:CD40::/60",
    managementNetworkConfiguration: {
      infrastructureVpnConfiguration: {
        networkToNetworkInterconnectId:
          "/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/networkFabrics/example-fabric/networkToNetworkInterconnects/example-nni",
        optionAProperties: {
          bfdConfiguration: { intervalInMilliSeconds: 300, multiplier: 10 },
          mtu: 1501,
          peerASN: 1235,
          primaryIpv4Prefix: "10.0.0.12/30",
          primaryIpv6Prefix: "4FFE:FFFF:0:CD30::a8/127",
          secondaryIpv4Prefix: "20.0.0.13/30",
          secondaryIpv6Prefix: "6FFE:FFFF:0:CD30::ac/127",
          vlanId: 3001,
        },
        optionBProperties: {
          exportRouteTargets: ["65046:10050"],
          importRouteTargets: ["65046:10050"],
          routeTargets: {
            exportIpv4RouteTargets: ["65046:10050"],
            exportIpv6RouteTargets: ["65046:10050"],
            importIpv4RouteTargets: ["65046:10050"],
            importIpv6RouteTargets: ["65046:10050"],
          },
        },
        peeringOption: "OptionB",
      },
      workloadVpnConfiguration: {
        networkToNetworkInterconnectId:
          "/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/networkFabrics/example-fabric/networkToNetworkInterconnects/example-nni",
        optionAProperties: {
          bfdConfiguration: { intervalInMilliSeconds: 300, multiplier: 5 },
          mtu: 1500,
          peerASN: 61234,
          primaryIpv4Prefix: "10.0.0.14/30",
          primaryIpv6Prefix: "2FFE:FFFF:0:CD30::a7/126",
          secondaryIpv4Prefix: "10.0.0.15/30",
          secondaryIpv6Prefix: "2FFE:FFFF:0:CD30::ac/126",
          vlanId: 3000,
        },
        optionBProperties: {
          exportRouteTargets: ["65046:10050"],
          importRouteTargets: ["65046:10050"],
          routeTargets: {
            exportIpv4RouteTargets: ["65046:10050"],
            exportIpv6RouteTargets: ["65046:10050"],
            importIpv4RouteTargets: ["65046:10050"],
            importIpv6RouteTargets: ["65046:10050"],
          },
        },
        peeringOption: "OptionA",
      },
    },
    rackCount: 6,
    serverCountPerRack: 10,
    tags: { keyID: "KeyValue" },
    terminalServerConfiguration: {
      password: "xxxxxxxx",
      primaryIpv4Prefix: "10.0.0.12/30",
      primaryIpv6Prefix: "4FFE:FFFF:0:CD30::a8/127",
      secondaryIpv4Prefix: "40.0.0.14/30",
      secondaryIpv6Prefix: "6FFE:FFFF:0:CD30::ac/127",
      serialNumber: "1234567",
      username: "username1",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureNetworkFabricManagementServiceAPI(credential, subscriptionId);
  const result = await client.networkFabrics.beginUpdateAndWait(
    resourceGroupName,
    networkFabricName,
    body
  );
  console.log(result);
}

async function main() {
  networkFabricsUpdateMaximumSetGen();
}

main().catch(console.error);
