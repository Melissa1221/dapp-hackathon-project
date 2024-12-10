import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { FileX } from "lucide-react";

export default function ContractNotFound() {
  return (
    <div className="h-[80vh] w-full flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center text-center max-w-md">
        <div className="rounded-full bg-destructive/10 p-6 mb-6">
          <FileX className="w-12 h-12 text-destructive" />
        </div>
        
        <h1 className="text-2xl font-bold mb-2">Contract Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The contract you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>

        <div className="flex gap-4">
          <Button asChild variant="outline">
            <Link to="/home">
              Go to Home
            </Link>
          </Button>
          <Button asChild>
            <Link to="/home/new-contract">
              Create New Contract
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 