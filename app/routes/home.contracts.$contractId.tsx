import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { useParams, useNavigate } from "@remix-run/react";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";

export default function ContractView() {
  const { contractId } = useParams();
  const navigate = useNavigate();
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'paid' | 'signing'>('pending');
  const [showSuccess, setShowSuccess] = useState(false);

  // In a real app, you would fetch contract details using the contractId
  const contractDetails = {
    name: "safdsf",
    characteristics: "sdfsdg",
    amount: "54165",
  };

  const handlePayment = async () => {
    // Here you would handle the actual payment
    setPaymentStatus('signing');
    // Simulate payment process
    setTimeout(() => {
      setPaymentStatus('paid');
      setShowSuccess(true);
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {showSuccess && (
        <div className="fixed top-4 right-4 animate-in fade-in slide-in-from-top-2 duration-300">
          <Alert className="bg-primary/10 text-primary border-primary">
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              Payment completed successfully
            </AlertDescription>
          </Alert>
        </div>
      )}

      <Card className="p-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">Contract Details</h2>
          {paymentStatus === 'paid' && (
            <div className="flex items-center gap-2 text-sm">
              <span className="rounded-full bg-primary/10 p-1">
                <CheckCircle className="w-4 h-4 text-primary" />
              </span>
              Payment successful
            </div>
          )}
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-muted-foreground">Name</label>
              <div id="name" className="p-3 bg-muted/10 rounded-md">
                {contractDetails.name}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="characteristics" className="text-sm text-muted-foreground">Characteristics</label>
              <div id="characteristics" className="p-3 bg-muted/10 rounded-md">
                {contractDetails.characteristics}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="amount" className="text-sm text-muted-foreground">Amount</label>
              <div id="amount" className="p-3 bg-muted/10 rounded-md font-mono">
                ${contractDetails.amount}
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-6 border-t">
            <div className="text-sm text-muted-foreground">
              Contract ID: <span className="font-mono">{contractId}</span>
            </div>
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                onClick={() => navigate(`/home/status/${contractId}`)}
              >
                View Status
              </Button>
              <Button
                onClick={handlePayment}
                disabled={paymentStatus === 'paid'}
              >
                {paymentStatus === 'pending' && 'Pay Now'}
                {paymentStatus === 'signing' && 'Sign Transaction...'}
                {paymentStatus === 'paid' && 'Paid'}
              </Button> 
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
} 