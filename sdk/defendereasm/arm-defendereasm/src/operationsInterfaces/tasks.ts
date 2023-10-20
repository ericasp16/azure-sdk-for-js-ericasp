/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  TasksGetByWorkspaceOptionalParams,
  TasksGetByWorkspaceResponse
} from "../models";

/** Interface representing a Tasks. */
export interface Tasks {
  /**
   * Returns a task in the given workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the Workspace.
   * @param taskId The id of the Task.
   * @param options The options parameters.
   */
  getByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    taskId: string,
    options?: TasksGetByWorkspaceOptionalParams
  ): Promise<TasksGetByWorkspaceResponse>;
}
