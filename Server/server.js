const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const Student = require('./studentSchema');
const Teacher = require('./teacherSchema').default;
const app = express();

const corsOrigin = {
  origin: 'http://localhost:5173', //or whatever port your frontend is using
  credentials: true,
  optionSuccessStatus: 200
}

// Middleware
app.use(express.urlencoded())
app.use(express.json())
app.use(cors(corsOrigin)); // Restrict to frontend origin

// MongoDB Connection
const DB_NAME = process.env.DB_NAME || 'Portal'; // Use env or default
//const uri = `mongodb+srv://saharupam24_db_user:ML!pU*fb3EKhUau@learningplatform.glcnquv.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=LearningPlatform`;
const uri = `mongodb+srv://debasishsil189_db_user:Debasish2003@cluster0.y3ex39h.mongodb.net/?appName=Cluster0`

mongoose.connect(uri, {
  serverApi: {
    version: '1',
    strict: false,
    deprecationErrors: true,
  },
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log(`Connected to MongoDB Atlas, DB: ${DB_NAME}`))
  .catch(err => console.error('MongoDB connection error:', err));

// Sign-up Route
app.post('/api/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password, institution, course, agreeToTerms } = req.body;

    // Validate input
    if (!firstName || !lastName || !email || !password || !agreeToTerms || !course || !institution) {
      return res.status(400).json({ message: 'All required fields must be filled' });
    }

    // Check if email or studentId already exists
    const existingStudent = await Student.findOne({ $or: [{ email }, { studentId: email }] });
    if (existingStudent) {
      return res.status(400).json({ message: 'Email or student ID already registered' });
    }

    // Save plain password
    const student = new Student({
      firstName,
      lastName,
      studentId: email,
      email,
      password, // Save as plain text
      courses: [{ courseName: course, courseId: `COURSE_${Date.now()}` }],
      institution
    });
    await student.save();
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
});

// Sign-in Route
app.post('/api/signin', async (req, res) => {
  console.log("Signin request received", req.body);
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Please fill all the require fields.' });
    }

    // Find student by email
    const existingStudent = await Student.findOne({ email });
    console.log("Existing student:", existingStudent);
    if (existingStudent && password === existingStudent.password) {
      res.status(200).json({ message: 'SignIn successfully' });
    } else {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('SignIn error:', error);
    res.status(500).json({ message: 'Server error during SignIn' });
  }
});

// Add this route to get student count
app.get('/api/students/count', async (req, res) => {
  try {
    const studentCount = await Student.countDocuments();
    res.status(200).json({ count: studentCount });
  } catch (error) {
    console.error('Error fetching student count:', error);
    res.status(500).json({ message: 'Server error fetching student count' });
  }
});

app.post('/api/teacher/login', async (req, res) => {
  try {
    const { name, email, department } = req.body;
    console.log('Teacher login:', { name, email, department }); // Debug log

    // Validate input
    if (!name || !email || !department) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Find teacher in database
    const teacher = await Teacher.findOne({
      email: email.toLowerCase(),
      name: { $regex: new RegExp(name, 'i') },
      department: { $regex: new RegExp(department, 'i') }
    });

    if (teacher) {
      res.status(200).json({
        message: 'Login successful',
        teacher: {
          name: teacher.name,
          email: teacher.email,
          department: teacher.department
        }
      });
    } else {
      res.status(401).json({ message: 'Invalid teacher credentials' });
    }
  } catch (error) {
    console.error('Teacher login error:', error);
    res.status(500).json({ message: 'Server error during teacher login' });
  }
});

// Profile Route
app.get('/api/profile', async (req, res) => {
  const { email } = req.query;
  if (!email) return res.status(400).json({ message: 'Email required' });
  try {
    const student = await Student.findOne({ email });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




