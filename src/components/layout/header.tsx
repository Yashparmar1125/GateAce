import Link from 'next/link';
import {
  Search,
  User,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SidebarTrigger } from '../ui/sidebar';
import { ThemeToggle } from '../theme-toggle';


export function Header({ title }: { title: string }) {
  return (
    <header className="flex h-16 items-center gap-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:h-[70px] lg:px-6 shadow-sm">
      <div className="md:hidden">
        <SidebarTrigger />
      </div>
      <div className="w-full flex-1">
        <h1 className="font-headline text-xl font-bold md:text-3xl text-foreground animate-fade-in">{title}</h1>
      </div>
      <div className="flex flex-1 items-center justify-end gap-4 md:ml-auto">
        <form className="relative ml-auto hidden flex-1 sm:flex-initial md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search resources..."
            className="pl-10 pr-4 h-10 sm:w-[300px] md:w-[200px] lg:w-[300px] border-border focus:border-primary focus:ring-primary/20 transition-all duration-300"
          />
        </form>
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300">
              <User className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 shadow-xl border-border">
            <DropdownMenuLabel className="text-foreground font-semibold">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dashboard/profile" className="flex items-center hover:bg-primary/5 transition-colors">
                <User className="mr-2 h-4 w-4" />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard/settings" className="hover:bg-primary/5 transition-colors">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/" className="text-red-600 hover:bg-red-50 transition-colors">Logout</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
