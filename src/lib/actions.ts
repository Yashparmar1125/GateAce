"use server";

import { suggestPersonalizedStudyPlan } from '@/ai/flows/suggest-personalized-study-plan';
import { StudyPlanFormSchema, type StudyPlanState } from './types';

export async function generateStudyPlan(
  prevState: StudyPlanState,
  formData: FormData
): Promise<StudyPlanState> {
  const rawFormData = Object.fromEntries(formData.entries());

  const parsed = StudyPlanFormSchema.safeParse({
    ...rawFormData,
    startDate: new Date(rawFormData.startDate as string),
  });

  if (!parsed.success) {
    console.error('Form validation failed:', parsed.error.flatten().fieldErrors);
    return { error: "Invalid form data. Please check your inputs and try again." };
  }

  const { branch, targetGateYear, startDate, studyHoursPerWeek } = parsed.data;

  try {
    // Calculate months left for preparation. GATE exam is typically in February.
    const examDate = new Date(targetGateYear, 1, 1); // February 1st of target year
    let monthsLeft = (examDate.getFullYear() - startDate.getFullYear()) * 12;
    monthsLeft -= startDate.getMonth();
    monthsLeft += examDate.getMonth();
    monthsLeft = monthsLeft <= 0 ? 1 : monthsLeft; // Ensure at least 1 month is provided

    const result = await suggestPersonalizedStudyPlan({
      branch,
      targetGateYear,
      startDate: startDate.toISOString().split('T')[0], // Format as YYYY-MM-DD
      monthsLeft,
      studyHoursPerWeek,
    });
    
    if (result.studyPlan) {
      return { studyPlan: result.studyPlan };
    } else {
      return { error: "The AI couldn't generate a study plan. Please try again." };
    }
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
    return { error: `An unexpected error occurred: ${errorMessage}` };
  }
}
