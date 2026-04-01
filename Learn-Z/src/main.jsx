import React from 'react'
import { ToastContainer } from 'react-toastify';
import './index.css'
import ReactDOM from 'react-dom/client'
import StudentPortal from '../Portal/student_portal.jsx'

function App() {
  return (
    <>
      <StudentPortal />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


export default App
