import mongoose, { Document, Schema } from 'mongoose';

export interface ITest extends Document {
  title: string;
  type: 'full-length' | 'topic-wise' | 'subject-wise' | 'pyq';
  subject?: string;
  branch: string;
  duration: number; // in minutes
  questions: mongoose.Types.ObjectId[];
  totalQuestions: number;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const TestSchema = new Schema<ITest>({
  title: { type: String, required: true },
  type: { type: String, enum: ['full-length', 'topic-wise', 'subject-wise', 'pyq'], required: true },
  subject: { type: String },
  branch: { type: String, required: true },
  duration: { type: Number, required: true },
  questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
  totalQuestions: { type: Number, required: true },
  description: { type: String }
}, {
  timestamps: true
});

export const Test = mongoose.models.Test || mongoose.model<ITest>('Test', TestSchema);
