"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function Home() {
  const trpc = useTRPC();
  const testAI = useMutation(
    trpc.testAI.mutationOptions({
      onSuccess: () => {
        toast("AI job queued");
      },
    })
  );
  return (
    <div>
      protected
      <Button disabled={testAI.isPending} onClick={() => testAI.mutate()}>
        Test AI
      </Button>
    </div>
  );
}
