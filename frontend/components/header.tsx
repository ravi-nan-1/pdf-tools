import { Shuffle } from "lucide-react";

export function Header() {
  return (
    <header className="p-4 border-b bg-card">
      <div className="container mx-auto flex items-center gap-2">
        <div className="bg-primary p-2 rounded-md">
           <Shuffle className="h-6 w-6 text-primary-foreground" />
        </div>
        <h1 className="text-xl font-bold font-headline tracking-tight">PDF2Word</h1>
      </div>
    </header>
  );
}
