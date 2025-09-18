import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  email: string;
  name: string;
  branch: string;
  targetGateYear: number;
  studyHoursPerWeek: number;
  createdAt: Date;
  updatedAt: Date;
  preferences: {
    notifications: boolean;
    theme: 'light' | 'dark';
  };
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  branch: { type: String, required: true },
  targetGateYear: { type: Number, required: true },
  studyHoursPerWeek: { type: Number, required: true },
  preferences: {
    notifications: { type: Boolean, default: true },
    theme: { type: String, enum: ['light', 'dark'], default: 'light' }
  }
}, {
  timestamps: true
});

export const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
