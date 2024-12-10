import { Card } from "~/components/ui/card";
import { useParams } from "@remix-run/react";
import { StatusTimeline } from "~/components/contract/StatusTimeline";

export default function ContractStatus() {
  const { contractId } = useParams();

  // In a real app, you would fetch the contract status from your backend
  const contractSteps = [
    { label: "Transaction created", status: "completed" as const },
    { label: "Client paid", status: "completed" as const },
    { label: "Amount blocked", status: "completed" as const },
    { label: "Product sent and signed", status: "pending" as const },
    { label: "Accepted by buyer", status: "pending" as const },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Card className="p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Transaction Status</h2>
          <p className="text-sm text-muted-foreground">
            Contract ID: <span className="font-mono">{contractId}</span>
          </p>
        </div>

        <StatusTimeline steps={contractSteps} />

        <div className="mt-16 text-sm flex justify-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
            <span>Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#eab308]" />
            <span>Pending</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
            <span>Failed/Rejected</span>
          </div>
        </div>
      </Card>
    </div>
  );
} 