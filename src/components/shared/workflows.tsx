"use client";

import { useCreateWorkflow, useSuspenseWorkflows } from "@/hooks/use-workflow";
import { EntityContainer, EntityHeader } from "./entity-components";
import { useUpgradeModal } from "@/hooks/use-upgrade-modal";
import { useRouter } from "next/navigation";

export function WorkflowsList() {
  const workflows = useSuspenseWorkflows();

  return <p>{JSON.stringify(workflows.data, null, 2)}</p>;
}

export const WorkflowHeader = ({ disabled }: { disabled?: boolean }) => {
  const createWorkflow = useCreateWorkflow();
  const { handleError, modal } = useUpgradeModal();

  const router = useRouter();

  const handleCreate = () => {
    createWorkflow.mutate(undefined, {
      onSuccess: (data) => {
        router.push(`/workflows/${data.id}`);
      },
      onError: (error) => {
        handleError(error);
      },
    });
  };
  return (
    <>
      {modal}
      <EntityHeader
        title="Workflows"
        description="Create and Manage workflows"
        onNew={handleCreate}
        newButtonLabel="New workflow"
        disabled={disabled}
        isCreating={createWorkflow.isPending}
      />
    </>
  );
};

export const WorkflowsContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <EntityContainer
      header={<WorkflowHeader />}
      search={<></>}
      pagination={<></>}
    >
      {children}
    </EntityContainer>
  );
};
