import { Card } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { useState } from "react";

export default function NewContract() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleWalletConnection = () => {
    // Here you would implement the actual wallet connection logic
    setIsWalletConnected(true);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Product Details</h2>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Product name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="characteristics">Characteristics</Label>
            <Input id="characteristics" placeholder="Product characteristics" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Enter Amount</Label>
            <Input 
              id="amount" 
              type="number" 
              placeholder="0.00" 
              className="font-mono"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="gas">Gas fee</Label>
            <Input 
              id="gas" 
              type="number" 
              placeholder="0.00" 
              className="font-mono"
              disabled
            />
          </div>
        </div>

        <div className="mt-8">
          {!isWalletConnected && (
            <p className="text-sm text-muted-foreground mb-4">
              (Wallet not connected)
            </p>
          )}
          <div className="flex justify-end">
            {isWalletConnected ? (
              <Button>
                Generate
              </Button>
            ) : (
              <Button variant="outline" onClick={handleWalletConnection}>
                Connect Wallet
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
} 