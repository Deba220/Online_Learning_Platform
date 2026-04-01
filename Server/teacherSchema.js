import { Schema, model } from 'mongoose';

const teacherSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  department: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

// Create index for better query performance
teacherSchema.index({ email: 1 });

export default model('Teacher', teacherSchema, 'teachers');