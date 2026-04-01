const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  studentId: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  institution: {
    type: String,
    required: true,
    trim: true
  },
  enrollmentDate: {
    type: Date,
    default: Date.now
  },
  courses: [{
    courseId: String,
    courseName: String,
    enrollmentStatus: {
      type: String,
      enum: ['Active', 'Completed', 'Dropped'],
      default: 'Active'
    },
    grade: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  password: {
    type: String,
    required: true
  }
});

// Update timestamp before saving
studentSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Student', studentSchema);