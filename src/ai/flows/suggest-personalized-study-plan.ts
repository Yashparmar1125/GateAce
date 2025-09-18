'use server';

/**
 * @fileOverview A personalized study plan suggestion AI agent.
 *
 * - suggestPersonalizedStudyPlan - A function that handles the study plan suggestion process.
 * - SuggestPersonalizedStudyPlanInput - The input type for the suggestPersonalizedStudyPlan function.
 * - SuggestPersonalizedStudyPlanOutput - The return type for the suggestPersonalizedStudyPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestPersonalizedStudyPlanInputSchema = z.object({
  branch: z.string().describe('The student\\\'s engineering branch.'),
  targetGateYear: z.number().describe('The student\\\'s target GATE exam year.'),
  startDate: z.string().describe('The student\\\'s study start date (YYYY-MM-DD).'),
  monthsLeft: z.number().describe('The number of months the student has left to prepare.'),
  studyHoursPerWeek: z
    .number()
    .describe('The number of hours per week the student can dedicate to studying.'),
});
export type SuggestPersonalizedStudyPlanInput = z.infer<
  typeof SuggestPersonalizedStudyPlanInputSchema
>;

const SuggestPersonalizedStudyPlanOutputSchema = z.object({
  studyPlan: z.string().describe('A personalized study plan for the student.'),
});
export type SuggestPersonalizedStudyPlanOutput = z.infer<
  typeof SuggestPersonalizedStudyPlanOutputSchema
>;

export async function suggestPersonalizedStudyPlan(
  input: SuggestPersonalizedStudyPlanInput
): Promise<SuggestPersonalizedStudyPlanOutput> {
  return suggestPersonalizedStudyPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestPersonalizedStudyPlanPrompt',
  input: {schema: SuggestPersonalizedStudyPlanInputSchema},
  output: {schema: SuggestPersonalizedStudyPlanOutputSchema},
  prompt: `You are an expert GATE exam coach.

You will generate a personalized study plan for the student, tailored to their specific goals and available time. The study plan should consider the student's branch, target GATE year, start date, months left, and study hours per week.

Branch: {{{branch}}}
Target GATE Year: {{{targetGateYear}}}
Start Date: {{{startDate}}}
Months Left: {{{monthsLeft}}}
Study Hours Per Week: {{{studyHoursPerWeek}}}

Here is the study plan:
`,
});

const suggestPersonalizedStudyPlanFlow = ai.defineFlow(
  {
    name: 'suggestPersonalizedStudyPlanFlow',
    inputSchema: SuggestPersonalizedStudyPlanInputSchema,
    outputSchema: SuggestPersonalizedStudyPlanOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
