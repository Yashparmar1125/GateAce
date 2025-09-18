import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ExamHeaderProps {
  title: string;
  timeRemaining?: string;
  showTimer?: boolean;
  showQuestionPaperButton?: boolean;
  showInstructionsButton?: boolean;
}

export function ExamHeader({
  title,
  timeRemaining,
  showTimer = false,
  showQuestionPaperButton = false,
  showInstructionsButton = false,
}: ExamHeaderProps) {
  return (
    <header className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 shadow-md border-b-4 border-blue-500">
      <div className="flex items-center space-x-4">
        <div className="relative w-40 h-10">
          <Image src="/made_easy_logo.png" alt="MADE EASY" layout="fill" objectFit="contain" />
        </div>
        <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</h1>
      </div>
      <div className="flex items-center space-x-4">
        {showTimer && timeRemaining && (
          <div className="text-sm text-muted-foreground">
            <span className="font-medium">Time Left:</span> <span className="text-red-600 font-bold">{timeRemaining}</span>
          </div>
        )}
        {showQuestionPaperButton && (
          <Button variant="outline" size="sm" className="h-8">Question paper</Button>
        )}
        {showInstructionsButton && (
          <Link href="/dashboard/tests/instructions">
            <Button variant="outline" size="sm" className="h-8">Instruction</Button>
          </Link>
        )}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image src="/yash_profile.jpg" alt="Yash Dharmendra Parmar" width={32} height={32} objectFit="cover" />
          </div>
          <span className="text-sm font-medium">Welcome Yash Dharmendra Parmar</span>
        </div>
      </div>
    </header>
  );
}
