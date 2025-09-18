import mongoose, { Document, Schema } from 'mongoose';

export interface ITestResult extends Document {
  userId: mongoose.Types.ObjectId;
  testId: mongoose.Types.ObjectId;
  answers: { questionId: mongoose.Types.ObjectId; selectedAnswer: number }[];
  score: number;
  percentage: number;
  timeSpent: number; // in minutes
  completedAt: Date;
  topicWiseAccuracy: { topic: string; accuracy: number }[];
  createdAt: Date;
  updatedAt: Date;
}

const TestResultSchema = new Schema<ITestResult>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  testId: { type: Schema.Types.ObjectId, ref: 'Test', required: true },
  answers: [{
    questionId: { type: Schema.Types.ObjectId, ref: 'Question', required: true },
    selectedAnswer: { type: Number, required: true }
  }],
  score: { type: Number, required: true },
  percentage: { type: Number, required: true },
  timeSpent: { type: Number, required: true },
  completedAt: { type: Date, required: true },
  topicWiseAccuracy: [{
    topic: { type: String, required: true },
    accuracy: { type: Number, required: true }
  }]
}, {
  timestamps: true
});

export const TestResult = mongoose.models.TestResult || mongoose.model<ITestResult>('TestResult', TestResultSchema);
