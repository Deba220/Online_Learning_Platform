// // App.jsx
// import React, { useState } from 'react';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import StudentPortal from '../Portal/student_portal';
// import PaymentPage from '../Payment/PaymentPage';
// import './index.css';

// function App() {
//   const [currentView, setCurrentView] = useState('portal');
//   const [selectedCourse, setSelectedCourse] = useState(null);

//   const handleEnrollClick = (course) => {
//     setSelectedCourse(course);
//     setCurrentView('payment');
//   };

//   const handlePaymentClose = () => {
//     setCurrentView('portal');
//     setSelectedCourse(null);
//   };

//   const handlePaymentSuccess = () => {
//     // Show success message
//     alert(`Successfully enrolled in ${selectedCourse.title}!`);
//     setCurrentView('portal');
//     setSelectedCourse(null);
//   };

//   return (
//     <>
//       {currentView === 'portal' && (
//         <StudentPortal onEnrollClick={handleEnrollClick} />
//       )}
//       {currentView === 'payment' && (
//         <PaymentPage 
//           course={selectedCourse} 
//           onClose={handlePaymentClose}
//           onPaymentSuccess={handlePaymentSuccess}
//         />
//       )}
//       <ToastContainer position="top-right" autoClose={3000} />
//     </>
//   );
// }

// export default App;