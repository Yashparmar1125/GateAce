import mongoose, { Document, Schema } from 'mongoose';

export interface IResource extends Document {
  title: string;
  type: 'video' | 'pdf' | 'pyq' | 'notes';
  subject: string;
  branch: string;
  url: string;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration?: number; // for videos in minutes
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ResourceSchema = new Schema<IResource>({
  title: { type: String, required: true },
  type: { type: String, enum: ['video', 'pdf', 'pyq', 'notes'], required: true },
  subject: { type: String, required: true },
  branch: { type: String, required: true },
  url: { type: String, required: true },
  tags: [{ type: String }],
  difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'], default: 'intermediate' },
  duration: { type: Number },
  description: { type: String }
}, {
  timestamps: true
});

export const Resource = mongoose.models.Resource || mongoose.model<IResource>('Resource', ResourceSchema);
