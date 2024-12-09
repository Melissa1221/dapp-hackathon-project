import { Link } from "@remix-run/react";
import { Bell, FileText, Home, PlusCircle, Settings, HelpCircle, LogOut } from "lucide-react";

interface SidebarOptions{
    name: string;
    icon: React.ReactNode;
    path: string;
    isActive: boolean;
}
const sidebarOptions: SidebarOptions[] = [
    {
        name: "Dashboard",
        icon: <Home size={20} />,
        path: "/home",
        isActive: true,
    },
    {
        name: "New Contract",
        icon: <PlusCircle size={20} />,
        path: "/home/new-contract",
        isActive: false,
    },
    {
        name: "Notifications",
        icon: <Bell size={20} />,
        path: "/home/notifications",
        isActive: false,
    },
    {
        name: "Contracts",
        icon: <FileText size={20} />,
        path: "/home/contracts",
        isActive: false,
    },
    {
        name: "Settings",
        icon: <Settings size={20} />,
        path: "/home/settings",
        isActive: false,
    },
    {
        name: "Help",
        icon: <HelpCircle size={20} />,
        path: "/home/help",
        isActive: false,
    },
    {
        name: "Logout",
        icon: <LogOut size={20} />,
        path: "/home/logout",
        isActive: false,
    }

]

export function Sidebar() {
  return (
    <div className="flex h-full w-64 flex-col border-r border-border/40 bg-card">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary">dApp Name</h1>
      </div>
      
      <nav className="flex-1 space-y-2 p-4">
       
        {sidebarOptions.map((option) => (
            <Link 
                key={option.name}
                to={option.path}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
                {option.icon}
                {option.name}
            </Link>     
        ))}
      </nav>
    </div>
  );
} 