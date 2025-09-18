import { Header } from '@/components/layout/header';
import { StudyPlanForm } from '@/components/study-plan-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, Target, TrendingUp, Calendar, Award, Zap, ArrowRight } from 'lucide-react';

export default function DashboardPage() {
  return (
    <>
      <Header title="Dashboard" />
      <main className="flex flex-1 flex-col gap-6 p-4 lg:gap-8 lg:p-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-3 animate-fade-in">Welcome back! 👋</h1>
          <p className="text-lg text-muted-foreground">Ready to continue your GATE preparation journey?</p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="card-hover group bg-card border-border shadow-lg hover:shadow-xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Study Progress</CardTitle>
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <BookOpen className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary mb-2">68%</div>
              <p className="text-sm text-muted-foreground font-medium">+12% from last week</p>
              <Progress value={68} className="mt-3 h-2" />
            </CardContent>
          </Card>
          
          <Card className="card-hover group bg-card border-border shadow-lg hover:shadow-xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Study Hours</CardTitle>
              <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                <Clock className="h-4 w-4 text-accent" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent mb-2">24h</div>
              <p className="text-sm text-muted-foreground font-medium">This week</p>
            </CardContent>
          </Card>
          
          <Card className="card-hover group bg-card border-border shadow-lg hover:shadow-xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Tests Completed</CardTitle>
              <div className="p-2 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-all duration-300 group-hover:scale-110">
                <Target className="h-4 w-4 text-green-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-500 mb-2">8</div>
              <p className="text-sm text-muted-foreground font-medium">This month</p>
            </CardContent>
          </Card>
          
          <Card className="card-hover group bg-card border-border shadow-lg hover:shadow-xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Average Score</CardTitle>
              <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-all duration-300 group-hover:scale-110">
                <TrendingUp className="h-4 w-4 text-blue-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-500 mb-2">78%</div>
              <p className="text-sm text-muted-foreground font-medium">+5% improvement</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="card-hover bg-card border-border shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-card-foreground">
              <Zap className="h-5 w-5 text-primary" />
              Quick Actions
            </CardTitle>
            <CardDescription className="text-muted-foreground">Jump into your study routine</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-3">
            <div className="flex items-center space-x-4 rounded-lg border border-border p-4 card-hover group bg-muted/50 hover:bg-muted transition-all duration-300">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1 flex-1">
                <p className="text-sm font-semibold leading-none text-card-foreground">Continue Studying</p>
                <p className="text-sm text-muted-foreground">Data Structures & Algorithms</p>
                <Badge variant="secondary" className="text-xs font-medium bg-primary/10 text-primary border-primary/20">In Progress</Badge>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1" />
            </div>
            
            <div className="flex items-center space-x-4 rounded-lg border border-border p-4 card-hover group bg-muted/50 hover:bg-muted transition-all duration-300">
              <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <div className="space-y-1 flex-1">
                <p className="text-sm font-semibold leading-none text-card-foreground">Take Practice Test</p>
                <p className="text-sm text-muted-foreground">Digital Logic - Topic Test</p>
                <Badge variant="outline" className="text-xs font-medium border-accent/20 text-accent">30 Questions</Badge>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors group-hover:translate-x-1" />
            </div>
            
            <div className="flex items-center space-x-4 rounded-lg border border-border p-4 card-hover group bg-muted/50 hover:bg-muted transition-all duration-300">
              <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-all duration-300 group-hover:scale-110">
                <TrendingUp className="h-6 w-6 text-green-500" />
              </div>
              <div className="space-y-1 flex-1">
                <p className="text-sm font-semibold leading-none text-card-foreground">View Analytics</p>
                <p className="text-sm text-muted-foreground">Track your progress</p>
                <Badge variant="outline" className="text-xs font-medium border-green-500/20 text-green-500">Updated</Badge>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-green-500 transition-colors group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>

        {/* Today's Schedule */}
        <Card className="card-hover bg-card border-border shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-card-foreground">
              <Calendar className="h-5 w-5 text-primary" />
              Today's Schedule
            </CardTitle>
            <CardDescription className="text-muted-foreground">Your planned study sessions for today</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border hover:bg-muted transition-all duration-300 group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors group-hover:scale-110">
                  <BookOpen className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Data Structures - Trees</p>
                  <p className="text-sm text-muted-foreground font-medium">2 hours • Theory + Practice</p>
                </div>
              </div>
              <Badge className="bg-primary/10 text-primary font-medium border-primary/20">10:00 AM</Badge>
            </div>
            
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border hover:bg-muted transition-all duration-300 group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors group-hover:scale-110">
                  <Target className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Practice Test - Algorithms</p>
                  <p className="text-sm text-muted-foreground font-medium">1 hour • 25 questions</p>
                </div>
              </div>
              <Badge className="bg-accent/10 text-accent font-medium border-accent/20">2:00 PM</Badge>
            </div>
            
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border hover:bg-muted transition-all duration-300 group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors group-hover:scale-110">
                  <Award className="h-4 w-4 text-green-500" />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Review Weak Topics</p>
                  <p className="text-sm text-muted-foreground font-medium">1 hour • Compiler Design</p>
                </div>
              </div>
              <Badge className="bg-green-500/10 text-green-500 font-medium border-green-500/20">6:00 PM</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Study Plan Form */}
        <StudyPlanForm />
      </main>
    </>
  );
}
