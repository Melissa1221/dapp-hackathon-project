import { useParams } from "@remix-run/react";

export default function ContractDetails() {
  const { contractId } = useParams();
  
  return (
    <div>
      <h1 className="text-3xl font-bold">Contract Details</h1>
      <p>Contract ID: {contractId}</p>
      {/* Add your contract details content here */}
    </div>
  );
} 