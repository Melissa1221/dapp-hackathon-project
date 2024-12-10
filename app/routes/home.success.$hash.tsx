import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { CheckCircle2, Copy } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "@remix-run/react";

export default function ContractSuccess() {
  const navigate = useNavigate();
  const { hash } = useParams();
  
  const [copyStatus, setCopyStatus] = useState<{
    hash: boolean;
    link: boolean;
  }>({ hash: false, link: false });

  const contractLink = `https://yourcontractsite.com/contract/${hash}`;

  const handleCopy = async (text: string, type: 'hash' | 'link') => {
    await navigator.clipboard.writeText(text);
    setCopyStatus(prev => ({ ...prev, [type]: true }));
    setTimeout(() => {
      setCopyStatus(prev => ({ ...prev, [type]: false }));
    }, 2000);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Card className="p-6">
        <div className="flex flex-col items-center mb-8">
          <div className="rounded-full bg-primary/10 p-3 mb-4">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold text-center">
            Payment order created successfully
          </h2>
        </div>

        <div className="space-y-6 max-w-xl mx-auto">
          <div className="space-y-2">
            <label htmlFor="hash-code" className="text-sm font-medium">Hash Code</label>
            <div className="flex gap-2">
              <Input 
                id="hash-code"
                value={hash} 
                readOnly 
                className="font-mono"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleCopy(hash || "", "hash")}
                className="shrink-0"
              >
                {copyStatus.hash ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="contract-link" className="text-sm font-medium">Contract Link</label>
            <div className="flex gap-2">
              <Input 
                id="contract-link"
                value={contractLink} 
                readOnly 
                className="font-mono"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleCopy(contractLink, "link")}
                className="shrink-0"
              >
                {copyStatus.link ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          <div className="pt-6">
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => navigate("/home")}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
} 