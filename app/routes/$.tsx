import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center text-center max-w-md">
        <div className="rounded-full bg-muted p-6 mb-6">
          <FileQuestion className="w-12 h-12 text-muted-foreground" />
        </div>
        
        <h1 className="text-4xl font-bold mb-2">Page Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The page you are looking for doesn&apos;t exist or you don&apos;t have access to it.
        </p>

        <Button asChild>
          <Link to="/home">
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
} 