import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GateIcon } from '@/components/icons';

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="48px"
        height="48px"
      >
        <path
          fill="#FFC107"
          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
        />
        <path
          fill="#FF3D00"
          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
        />
        <path
          fill="#4CAF50"
          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
        />
        <path
          fill="#1976D2"
          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C42.022,35.244,44,30.036,44,24C44,22.659,43.862,21.35,43.611,20.083z"
        />
      </svg>
    );
  }

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <Card className="mx-auto max-w-md w-full shadow-2xl border-border bg-card">
        <CardHeader className="text-center space-y-6">
            <Link href="/" className="inline-flex justify-center items-center gap-2 font-bold mb-4 animate-fade-in">
                <GateIcon className="h-10 w-10 text-primary" />
                <span className="text-2xl font-headline text-gradient">GateAce</span>
            </Link>
          <CardTitle className="font-headline text-3xl text-card-foreground">Welcome Back</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">Enter your credentials to access your dashboard.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email" className="text-sm font-semibold text-card-foreground">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="m@example.com" 
                required 
                className="h-12 border-border focus:border-primary focus:ring-primary/20"
              />
            </div>
            <div className="grid gap-3">
              <div className="flex items-center">
                <Label htmlFor="password" className="text-sm font-semibold text-card-foreground">Password</Label>
                <Link href="#" className="ml-auto inline-block text-sm text-primary hover:text-primary/80 font-medium transition-colors" prefetch={false}>
                  Forgot your password?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                required 
                className="h-12 border-border focus:border-primary focus:ring-primary/20"
              />
            </div>
            <Button type="submit" className="w-full h-12 btn-primary text-lg font-semibold" asChild>
                <Link href="/dashboard">Log in</Link>
            </Button>
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-background px-4 text-muted-foreground font-medium">Or continue with</span>
              </div>
            </div>
            <Button variant="outline" className="w-full h-12 border-border hover:bg-primary/5 hover:border-primary/40 transition-all duration-300" asChild>
                <Link href="/dashboard">
                    <GoogleIcon className="mr-2 h-5 w-5" />
                    Login with Google
                </Link>
            </Button>
          </div>
          <div className="mt-6 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="#" className="text-primary hover:text-primary/80 font-semibold transition-colors" prefetch={false}>
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
