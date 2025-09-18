import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const tests = [
  {
    title: 'Full Length Mock Test #1',
    subject: 'All Subjects',
    duration: '180 mins',
    questions: 65,
    tags: ['Full Syllabus', 'Mock'],
  },
  {
    title: 'Topic Test: Algorithms',
    subject: 'Algorithms',
    duration: '60 mins',
    questions: 20,
    tags: ['Topic-wise', 'Practice'],
  },
  {
    title: 'Subject Test: Digital Logic',
    subject: 'Digital Logic',
    duration: '90 mins',
    questions: 30,
    tags: ['Subject-wise'],
  },
  {
    title: 'GATE 2023 PYQ (CS)',
    subject: 'Previous Year',
    duration: '180 mins',
    questions: 65,
    tags: ['PYQ'],
  },
];

export default function TestsPage() {
  return (
    <>
      <Header title="Practice Tests" />
      <main className="flex flex-1 flex-col gap-6 p-4 lg:gap-8 lg:p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tests.map((test, index) => (
            <Card key={index} className="card-hover group bg-card border-border shadow-lg hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-card-foreground group-hover:text-primary transition-colors">{test.title}</CardTitle>
                <CardDescription className="text-muted-foreground font-medium">{test.subject}</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground font-medium">Duration:</span>
                  <span className="text-card-foreground font-semibold">{test.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground font-medium">Questions:</span>
                  <span className="text-card-foreground font-semibold">{test.questions}</span>
                </div>
                <div className="flex items-center space-x-2 pt-2">
                  {test.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs font-medium border-primary/20 text-primary hover:bg-primary/10">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/dashboard/tests/mock-test-${index + 1}`}>
                  <Button className="w-full btn-primary group-hover:scale-105 transition-transform duration-300">Start Test</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
