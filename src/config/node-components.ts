import { InitialNode } from "@/components/shared/initial-node";
import { NodeType } from "@/generated/prisma";
import type { NodeTypes } from "@xyflow/react";

export const nodesComponents = {
  [NodeType.INITIAL]: InitialNode,
} as const satisfies NodeTypes;

export type RegisteredNodeType = keyof typeof nodesComponents;
