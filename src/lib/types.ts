import { z } from 'zod';

export const StudyPlanFormSchema = z.object({
  branch: z.string({ required_error: 'Please select an engineering branch.' }),
  targetGateYear: z.coerce.number({ required_error: 'Please select a target year.' }).min(new Date().getFullYear()),
  startDate: z.date({ required_error: 'Please select a start date.' }),
  studyHoursPerWeek: z.coerce.number().min(1, 'Please enter hours per week.').max(100, 'Hours per week must be 100 or less.'),
});

export type StudyPlanFormValues = z.infer<typeof StudyPlanFormSchema>;

export interface StudyPlanState {
  studyPlan?: string;
  error?: string;
}
