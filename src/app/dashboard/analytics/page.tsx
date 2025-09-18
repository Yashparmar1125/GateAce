import { Header } from '@/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, LineChart, PieChart } from 'lucide-react';
import { TopicAccuracyChart, TestPerformanceChart } from '@/components/charts';
import { Button } from '@/components/ui/button';

export default function AnalyticsPage() {
  return (
    <>
      <Header title="Performance Analytics" />
      <main className="flex flex-1 flex-col gap-6 p-4 lg:gap-8 lg:p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="card-hover group bg-card border-border shadow-lg hover:shadow-xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Overall Score</CardTitle>
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <BarChart className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary mb-2">78%</div>
              <p className="text-sm text-muted-foreground font-medium">+5% from last test</p>
            </CardContent>
          </Card>
          <Card className="card-hover group bg-card border-border shadow-lg hover:shadow-xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Percentile</CardTitle>
              <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                <PieChart className="h-4 w-4 text-accent" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent mb-2">92nd</div>
              <p className="text-sm text-muted-foreground font-medium">Top 8% of performers</p>
            </CardContent>
          </Card>
          <Card className="card-hover group bg-card border-border shadow-lg hover:shadow-xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Time Usage</CardTitle>
              <div className="p-2 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-all duration-300 group-hover:scale-110">
                <LineChart className="h-4 w-4 text-green-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-500 mb-2">1h 45m</div>
              <p className="text-sm text-muted-foreground font-medium">Avg. time per test</p>
            </CardContent>
          </Card>
          <Card className="card-hover group bg-card border-border shadow-lg hover:shadow-xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Accuracy</CardTitle>
              <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-all duration-300 group-hover:scale-110">
                <BarChart className="h-4 w-4 text-blue-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-500 mb-2">85%</div>
              <p className="text-sm text-muted-foreground font-medium">Correctly answered</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="card-hover bg-card border-border shadow-lg">
            <CardHeader>
              <CardTitle className="text-card-foreground">Topic-wise Accuracy</CardTitle>
            </CardHeader>
            <CardContent>
              <TopicAccuracyChart />
            </CardContent>
          </Card>
          <Card className="card-hover bg-card border-border shadow-lg">
            <CardHeader>
              <CardTitle className="text-card-foreground">Recent Test Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <TestPerformanceChart />
            </CardContent>
          </Card>
        </div>
        
        <Card className="card-hover bg-card border-border shadow-lg">
            <CardHeader>
                <CardTitle className="text-card-foreground">Analysis & Recommendations</CardTitle>
            </CardHeader>
            <CardContent className='grid md:grid-cols-2 gap-6'>
                <div className="space-y-4">
                    <h3 className='font-bold text-lg text-card-foreground'>Strong Topics</h3>
                    <ul className='space-y-2'>
                        <li className='flex items-center gap-2 text-sm text-muted-foreground font-medium'>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          Data Structures & Algorithms
                        </li>
                        <li className='flex items-center gap-2 text-sm text-muted-foreground font-medium'>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          Digital Logic
                        </li>
                        <li className='flex items-center gap-2 text-sm text-muted-foreground font-medium'>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          Computer Networks
                        </li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h3 className='font-bold text-lg text-card-foreground'>Weak Topics</h3>
                    <ul className='space-y-2'>
                        <li className='flex items-center gap-2 text-sm text-muted-foreground font-medium'>
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          Theory of Computation
                        </li>
                        <li className='flex items-center gap-2 text-sm text-muted-foreground font-medium'>
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          Compiler Design
                        </li>
                        <li className='flex items-center gap-2 text-sm text-muted-foreground font-medium'>
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          Operating Systems
                        </li>
                    </ul>
                </div>
                <div className='md:col-span-2 mt-6 p-4 bg-muted/50 rounded-lg border border-border'>
                    <h3 className='font-bold text-lg text-card-foreground mb-3'>Suggested Actions</h3>
                    <p className='text-sm text-muted-foreground mb-4 font-medium'>Focus on your weak areas by reviewing concepts and taking topic-specific tests.</p>
                    <Button className="btn-primary">Retake Weak Topics Test</Button>
                </div>
            </CardContent>
        </Card>

      </main>
    </>
  );
}
