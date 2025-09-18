import mongoose, { Document, Schema } from 'mongoose';

export interface IQuestion extends Document {
  questionText: string;
  options: string[];
  correctAnswer: number; // index of correct option
  explanation: string;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  year?: number; // for PYQs
  branch: string;
  createdAt: Date;
  updatedAt: Date;
}

const QuestionSchema = new Schema<IQuestion>({
  questionText: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: Number, required: true },
  explanation: { type: String, required: true },
  topic: { type: String, required: true },
  difficulty: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
  year: { type: Number },
  branch: { type: String, required: true }
}, {
  timestamps: true
});

export const Question = mongoose.models.Question || mongoose.model<IQuestion>('Question', QuestionSchema);
