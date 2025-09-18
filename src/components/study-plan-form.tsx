'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';

import { generateStudyPlan } from '@/lib/actions';
import { StudyPlanFormSchema, type StudyPlanFormValues, type StudyPlanState } from '@/lib/types';
import { ENGINEERING_BRANCHES } from '@/lib/constants';
import { useToast } from '@/hooks/use-toast';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { CalendarIcon, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { Textarea } from './ui/textarea';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full btn-primary h-12 text-lg font-semibold group">
      {pending ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
      Generate Plan
      {!pending && <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>}
    </Button>
  );
}

export function StudyPlanForm() {
  const { toast } = useToast();
  const initialState: StudyPlanState = {};
  const [state, dispatch] = useFormState(generateStudyPlan, initialState);

  const form = useForm<StudyPlanFormValues>({
    resolver: zodResolver(StudyPlanFormSchema),
    defaultValues: {
      branch: '',
      targetGateYear: new Date().getFullYear() + 1,
      startDate: new Date(),
      studyHoursPerWeek: 10,
    },
  });

  useEffect(() => {
    if (state.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.error,
      });
    }
  }, [state, toast]);

  const targetYears = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() + i + 1);

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <Card className="lg:col-span-1 card-hover bg-card border-border shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-card-foreground">Create Your Study Plan</CardTitle>
          <CardDescription className="text-muted-foreground">Tell us your goals, and we&apos;ll generate a personalized plan.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form action={dispatch} className="space-y-6">
              <FormField
                control={form.control}
                name="branch"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-card-foreground font-semibold">Engineering Branch</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-border focus:border-primary focus:ring-primary/20">
                          <SelectValue placeholder="Select your branch" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ENGINEERING_BRANCHES.map((branch) => (
                          <SelectItem key={branch} value={branch}>
                            {branch}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="targetGateYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target GATE Year</FormLabel>
                    <Select onValueChange={(value) => field.onChange(Number(value))} defaultValue={String(field.value)}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {targetYears.map((year) => (
                          <SelectItem key={year} value={String(year)}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Preparation Start Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn('pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}
                          >
                            {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date > new Date() || date < new Date('2020-01-01')}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="studyHoursPerWeek"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Weekly Study Hours</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 15" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <SubmitButton />
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <Card className="lg:col-span-2 card-hover bg-card border-border shadow-lg">
        <CardHeader>
            <CardTitle className="font-headline text-card-foreground">Your AI-Generated Plan</CardTitle>
            <CardDescription className="text-muted-foreground">
                {state.studyPlan ? "Here is your personalized roadmap to success." : "Your plan will appear here once generated."}
            </CardDescription>
        </CardHeader>
        <CardContent>
            {state.studyPlan ? (
                <Textarea readOnly value={state.studyPlan} className="h-[450px] min-h-[300px] resize-none bg-muted/50 border-border whitespace-pre-wrap font-mono text-sm text-card-foreground" />
            ) : (
                <div className="flex h-[450px] items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/50">
                    <div className="text-center text-muted-foreground">
                        <p className="text-lg font-medium">Your personalized study plan awaits.</p>
                        <p className="text-sm">Fill out the form to get started.</p>
                    </div>
                </div>
            )}
        </CardContent>
      </Card>
    </div>
  );
}
