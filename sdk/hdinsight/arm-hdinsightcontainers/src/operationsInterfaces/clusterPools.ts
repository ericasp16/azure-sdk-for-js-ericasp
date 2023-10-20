/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  ClusterPool,
  ClusterPoolsListBySubscriptionOptionalParams,
  ClusterPoolsListByResourceGroupOptionalParams,
  ClusterPoolsGetOptionalParams,
  ClusterPoolsGetResponse,
  ClusterPoolsCreateOrUpdateOptionalParams,
  ClusterPoolsCreateOrUpdateResponse,
  TagsObject,
  ClusterPoolsUpdateTagsOptionalParams,
  ClusterPoolsUpdateTagsResponse,
  ClusterPoolsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ClusterPools. */
export interface ClusterPools {
  /**
   * Gets the list of Cluster Pools within a Subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: ClusterPoolsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<ClusterPool>;
  /**
   * Lists the HDInsight cluster pools under a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ClusterPoolsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ClusterPool>;
  /**
   * Gets a cluster pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterPoolName: string,
    options?: ClusterPoolsGetOptionalParams
  ): Promise<ClusterPoolsGetResponse>;
  /**
   * Creates or updates a cluster pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterPool The Cluster Pool to create.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterPool: ClusterPool,
    options?: ClusterPoolsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ClusterPoolsCreateOrUpdateResponse>,
      ClusterPoolsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a cluster pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterPool The Cluster Pool to create.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterPool: ClusterPool,
    options?: ClusterPoolsCreateOrUpdateOptionalParams
  ): Promise<ClusterPoolsCreateOrUpdateResponse>;
  /**
   * Updates an existing Cluster Pool Tags.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterPoolTags Parameters supplied to update tags.
   * @param options The options parameters.
   */
  beginUpdateTags(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterPoolTags: TagsObject,
    options?: ClusterPoolsUpdateTagsOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ClusterPoolsUpdateTagsResponse>,
      ClusterPoolsUpdateTagsResponse
    >
  >;
  /**
   * Updates an existing Cluster Pool Tags.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterPoolTags Parameters supplied to update tags.
   * @param options The options parameters.
   */
  beginUpdateTagsAndWait(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterPoolTags: TagsObject,
    options?: ClusterPoolsUpdateTagsOptionalParams
  ): Promise<ClusterPoolsUpdateTagsResponse>;
  /**
   * Deletes a Cluster Pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    clusterPoolName: string,
    options?: ClusterPoolsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a Cluster Pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    clusterPoolName: string,
    options?: ClusterPoolsDeleteOptionalParams
  ): Promise<void>;
}
