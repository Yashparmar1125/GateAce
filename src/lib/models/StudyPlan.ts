import mongoose, { Document, Schema } from 'mongoose';

export interface IStudyPlan extends Document {
  userId: mongoose.Types.ObjectId;
  branch: string;
  targetGateYear: number;
  startDate: Date;
  studyHoursPerWeek: number;
  planContent: string;
  status: 'active' | 'completed' | 'paused';
  createdAt: Date;
  updatedAt: Date;
}

const StudyPlanSchema = new Schema<IStudyPlan>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  branch: { type: String, required: true },
  targetGateYear: { type: Number, required: true },
  startDate: { type: Date, required: true },
  studyHoursPerWeek: { type: Number, required: true },
  planContent: { type: String, required: true },
  status: { type: String, enum: ['active', 'completed', 'paused'], default: 'active' }
}, {
  timestamps: true
});

export const StudyPlan = mongoose.models.StudyPlan || mongoose.model<IStudyPlan>('StudyPlan', StudyPlanSchema);
