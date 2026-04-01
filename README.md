# Learn-Z: Online Learning Platform 2.0

## Overview
Learn-Z is a modern online learning platform designed to provide a seamless educational experience for students and teachers. The platform offers a variety of features including course management, assignments, e-library, webinars, workshops, payment integration, and user portals for both students and teachers.

## Features
- **User Authentication:** Sign in and registration forms for students and teachers.
- **Course Management:** Browse, enroll, and manage courses.
- **Assignments:** Assignment upload and tracking.
- **E-Library:** Access to digital resources and materials.
- **Webinars & Workshops:** Participate in live and recorded events.
- **Payment Integration:** Secure payment gateway for course fees.
- **Profile Management:** Personalized profiles for students and teachers.
- **Portals:** Dedicated dashboards for students and teachers.

## Project Structure
```
Learn-Z/
├── FeaturesSection/
├── Forms/
├── HeroSection/
├── Nav-Options/
├── Navbar/
├── Payment/
├── Portal/
├── Profile/
├── public/
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── assets/
│   └── components/
│       ├── ParticleBackground.css
│       └── ParticleBackground.jsx
├── index.html
├── main.jsx
├── package.json
```

## Server
The backend server is located in the `Server/` directory and includes:
- `server.js`: Main server file
- `studentSchema.js`: Student data schema
- `teacherSchema.js`: Teacher data schema

## Getting Started
### Prerequisites
- Node.js (v16 or above)
- npm or yarn

### Installation
1. Clone the repository.
2. Install dependencies for both frontend and backend:
   ```bash
   cd Learn-Z
   npm install
   cd ../Server
   npm install
   ```
3. Start the backend server:
   ```bash
   node server.js
   ```
4. Start the frontend development server:
   ```bash
   cd ../Learn-Z
   npm start
   ```

## Technologies Used
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (schema files provided)
- **Styling:** CSS Modules

## License
This project is for educational purposes.

## Credits
- Project by the Learn-Z Team
- Logo and images are for demonstration purposes only.
