import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ExamHeader } from '@/components/layout/ExamHeader';

export default function InstructionsPage() {
  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 font-sans">
      <ExamHeader title="Other Important Instructions" />

      {/* Main Content Area */}
      <main className="flex-1 flex justify-center p-6 overflow-y-auto bg-gray-50 dark:bg-gray-950">
        <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="bg-blue-100 dark:bg-blue-900 p-4 border-b border-blue-200 dark:border-blue-800">
            <h2 className="text-xl font-bold text-blue-800 dark:text-blue-200">General Instructions</h2>
          </div>
          <div className="p-6 text-gray-700 dark:text-gray-300">
            <div className="space-y-4 mb-6 text-base leading-relaxed">
              <p>The clock will be set at the server. The countdown timer at the right corner of the screen will display the remaining time available for you to complete the examination. When the timer reaches zero the examination ends by itself. You need to terminate the examination or submit the paper.</p>
              <p>The question palette displayed on the right side of the screen will show the status of each question using one of the following symbols:</p>

              <div className="grid grid-cols-1 gap-2 mt-4 text-sm">
                <div className="flex items-center p-2 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-700">
                  <span className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-xs text-black mr-3 font-bold">0</span>
                  <span>You have not visited the question yet.</span>
                </div>
                <div className="flex items-center p-2 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-700">
                  <span className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white mr-3 font-bold"></span>
                  <span>You have NOT answered the question.</span>
                </div>
                <div className="flex items-center p-2 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-700">
                  <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-xs text-white mr-3 font-bold"></span>
                  <span>You have answered the question.</span>
                </div>
                <div className="flex items-center p-2 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-700">
                  <span className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-xs text-white mr-3 font-bold"></span>
                  <span>You have NOT answered the question, but have marked the question for review.</span>
                </div>
                <div className="flex items-center p-2 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-700">
                  <span className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-xs text-white mr-3 font-bold"></span>
                  <span>You have answered the question, but marked it for review.</span>
                </div>
              </div>

              <p className="mt-6">The Marked for Review status for a question simply indicates that you would like to look at that question again. If a question is answered, but marked for review, then the answer to that question will be considered for evaluation.</p>

              <h3 className="text-lg font-semibold mt-6 text-gray-800 dark:text-gray-100">Navigating to a Question</h3>
              <p>To answer a question, do the following:</p>
              <ol className="list-decimal list-inside space-y-2 pl-5">
                <li>Click on the question number in the Question Palette to go to that question directly.</li>
                <li>Select an answer for a multiple choice type question by clicking on bubble placed before the 4 choices A, B, C, D. Use the virtual numeric keypad to enter a number as an answer to a numerical type question.</li>
                <li>Click on the 'Save & Next' button to save your answer and move to the next question.</li>
                <li>Click on the 'Mark for Review & Next' button to mark the question for review and move to the next question.</li>
                <li>Click on the 'Clear Response' button to clear your selected answer.</li>
              </ol>
            </div>

            <div className="flex items-start space-x-3 mt-8 p-4 bg-gray-100 dark:bg-gray-700 rounded-md border border-gray-200 dark:border-gray-600">
              <Checkbox id="instructions-read" className="mt-1" />
              <label
                htmlFor="instructions-read"
                className="text-sm leading-relaxed text-gray-800 dark:text-gray-200"
              >
                I have read and understood the instructions. All computer hardware allotted to me are in proper working condition. I declare that I am not in possession of / not wearing / not carrying any prohibited gadget like mobile phone, bluetooth devices etc. /any prohibited material with me into the Examination Hall.I agree that in case of not adhering to the instructions, I shall be liable to be debarred from this Test and/or to disciplinary action, which may include ban from future Tests / Examinations.
              </label>
            </div>

            <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
              <Button variant="outline" disabled className="px-6 py-2">Previous</Button>
              <Link href="/dashboard/tests/mock-test-1">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2">I am ready to begin</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
