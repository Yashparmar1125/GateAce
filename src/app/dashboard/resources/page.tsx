import { Header } from '@/components/layout/header';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Book, Youtube, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const resources = [
  {
    title: 'GATE CS 2023 Paper Analysis',
    type: 'YouTube',
    icon: <Youtube className="h-6 w-6 text-red-600" />,
    subject: 'General Aptitude',
    tags: ['PYQ', 'Analysis'],
    link: '#',
  },
  {
    title: 'Digital Logic - Number Systems Notes',
    type: 'PDF',
    icon: <FileText className="h-6 w-6 text-blue-600" />,
    subject: 'Digital Logic',
    tags: ['Notes', 'Core'],
    link: '#',
  },
  {
    title: 'Algorithms - Sorting Techniques Playlist',
    type: 'YouTube',
    icon: <Youtube className="h-6 w-6 text-red-600" />,
    subject: 'Algorithms',
    tags: ['Video', 'Playlist'],
    link: '#',
  },
  {
    title: 'GATE 2021 Full Paper (CS)',
    type: 'PYQ',
    icon: <Book className="h-6 w-6 text-green-600" />,
    subject: 'Computer Science',
    tags: ['PYQ', 'Full Paper'],
    link: '#',
  },
  {
    title: 'Operating Systems - Process Management',
    type: 'PDF',
    icon: <FileText className="h-6 w-6 text-blue-600" />,
    subject: 'Operating Systems',
    tags: ['Notes'],
    link: '#',
  },
  {
    title: 'Engineering Mathematics - Linear Algebra',
    type: 'YouTube',
    icon: <Youtube className="h-6 w-6 text-red-600" />,
    subject: 'Engineering Mathematics',
    tags: ['Video'],
    link: '#',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Header title="Resource Library" />
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <Card>
            <CardHeader>
                <CardTitle>Filter Resources</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row gap-4">
                <Input placeholder="Search by keyword..." className="flex-grow"/>
                <Select>
                    <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="By Subject" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="cs">Computer Science</SelectItem>
                        <SelectItem value="ec">Electronics</SelectItem>
                        <SelectItem value="ee">Electrical</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="By Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="video">Video</SelectItem>
                        <SelectItem value="pdf">PDF</SelectItem>
                        <SelectItem value="pyq">PYQ</SelectItem>
                    </SelectContent>
                </Select>
                <Button>Apply Filters</Button>
            </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center gap-4">
                {resource.icon}
                <CardTitle className="text-lg">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                    {resource.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="text-sm text-muted-foreground">{resource.subject}</span>
                <Button variant="outline" asChild>
                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                        Open
                    </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
