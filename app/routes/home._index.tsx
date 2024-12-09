import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";

interface Transaction {
  id: string;
  name: string;
  description: string;
  status: 'blocked' | 'created' | 'completed';
  amount: string;
  date: string;
}

const transactions: Transaction[] = [
  {
    id: "1",
    name: "Online Store",
    description: "Payment for goods",
    status: "blocked",
    amount: "$100.00",
    date: "2024-02-12"
  },
  {
    id: "2",
    name: "Crypto Transfer",
    description: "ETH transfer",
    status: "created",
    amount: "$500.00",
    date: "2024-02-11"
  },
  // Add more mock transactions as needed
];

export default function HomeDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
          My Transactions
        </h1>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Time</SelectItem>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {transactions.map((transaction) => (
          <Card 
            key={transaction.id}
            className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">
                {transaction.name}
              </CardTitle>
              <Badge 
                variant={
                  transaction.status === 'blocked' 
                    ? 'destructive' 
                    : transaction.status === 'created'
                    ? 'secondary'
                    : 'default'
                }
                className="animate-fade-in"
              >
                {transaction.status}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                {transaction.description}
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-semibold bg-gradient-to-r from-primary/80 to-secondary/80 bg-clip-text text-transparent">
                  {transaction.amount}
                </span>
                <span className="text-sm text-muted-foreground">
                  {new Date(transaction.date).toLocaleDateString()}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 