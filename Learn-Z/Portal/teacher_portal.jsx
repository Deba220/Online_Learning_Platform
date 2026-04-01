import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import Profile from '../HeroSection/hero'
import './teacher_portal.css'

const App = ({ teacher, onLogout }) => {
  const [activeTab, setActiveTab] = useState('home')
  const [videos, setVideos] = useState([
    { id: 1, title: 'Introduction to Algebra', views: 245, date: '2023-09-01', duration: '15:30', subject: 'Mathematics' },
    { id: 2, title: 'Physics: Newton\'s Laws', views: 189, date: '2023-09-05', duration: '22:15', subject: 'Science' },
    { id: 3, title: 'History of Ancient Rome', views: 312, date: '2023-09-10', duration: '18:45', subject: 'History' },
    { id: 4, title: 'English Literature Basics', views: 156, date: '2023-09-15', duration: '12:20', subject: 'English' }
  ])

  const [stats, setStats] = useState({
    totalVideos: 24,
    totalViews: 2450,
    totalStudents: 0, // Start at 0
    averageRating: 4.7
  })

  const [recentActivity, setRecentActivity] = useState([
    { id: 1, action: 'uploaded', item: 'Calculus Lecture', time: '2 hours ago' },
    { id: 2, action: 'graded', item: 'Assignment #3', time: '5 hours ago' },
    { id: 3, action: 'commented', item: 'on Student Submission', time: 'Yesterday' },
    { id: 4, action: 'created', item: 'New Quiz', time: '2 days ago' }
  ])

  // Fetch student count from server
  useEffect(() => {
    fetch('http://localhost:5000/api/students/count')
      .then(res => res.json())
      .then(data => {
        setStats(prev => ({ ...prev, totalStudents: data.count }))
      })
      .catch(() => {
        setStats(prev => ({ ...prev, totalStudents: 0 }))
      })
  }, [])

  const handleUploadVideo = () => {
    // This would typically open a modal or form for video upload
    alert('Video upload feature would open here');
  }

  const handleDeleteVideo = (videoId) => {
    setVideos(videos.filter(video => video.id !== videoId));
  }

  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="bi bi-star-half text-warning"></i>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="bi bi-star text-warning"></i>);
    }

    return stars;
  }

  return (
    <div className="container-fluid px-4 mt-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center">
          <img
            src="https://img.icons8.com/fluency/96/teacher.png"
            alt="Teacher Portal"
            className="me-3"
            style={{ width: '50px' }}
          />
          <div>
            <h1 className="h3 mb-0 portal-title">Teacher Portal</h1>
            <p className="text-muted small mb-0">Welcome, {teacher?.name || "Professor"}</p>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="dropdown me-3">
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              <i className="bi bi-bell"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
              </span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#">New student submission</a></li>
              <li><a className="dropdown-item" href="#">System update available</a></li>
              <li><a className="dropdown-item" href="#">Meeting reminder</a></li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              <i className="bi bi-person-circle me-2"></i>
              {teacher?.name?.split(' ')[0] || 'Profile'}
            </button>
            {/* Add this to the dropdown menu in teacher_portal.jsx */}
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#"><i className="bi bi-person me-2"></i>Profile</a></li>
              <li><a className="dropdown-item" href="#"><i className="bi bi-gear me-2"></i>Settings</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    if (window.confirm('Are you sure you want to logout?')) {
                      // This will be handled by the parent component
                      if (typeof onLogout === 'function') {
                        onLogout();
                      }
                    }
                  }}
                >
                  <i className="bi bi-box-arrow-right me-2"></i>Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row mb-4">
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Videos</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">{stats.totalVideos}</div>
                </div>
                <div className="col-auto">
                  <i className="bi bi-play-btn-fill text-primary fa-2x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Total Views</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">{stats.totalViews.toLocaleString()}</div>
                </div>
                <div className="col-auto">
                  <i className="bi bi-eye-fill text-success fa-2x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Students</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">{stats.totalStudents}</div>
                </div>
                <div className="col-auto">
                  <i className="bi bi-people-fill text-info fa-2x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Average Rating</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">{stats.averageRating}/5</div>
                </div>
                <div className="col-auto">
                  <i className="bi bi-star-fill text-warning fa-2x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
            <i className="bi bi-house me-2"></i>Dashboard
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'videos' ? 'active' : ''}`} onClick={() => setActiveTab('videos')}>
            <i className="bi bi-play-btn me-2"></i>Videos
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'students' ? 'active' : ''}`} onClick={() => setActiveTab('students')}>
            <i className="bi bi-people me-2"></i>Students
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'analytics' ? 'active' : ''}`} onClick={() => setActiveTab('analytics')}>
            <i className="bi bi-graph-up me-2"></i>Analytics
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
            <i className="bi bi-person me-2"></i>Profile
          </button>
        </li>
      </ul>

      {/* Main Content */}
      <div className="card shadow portal-card">
        <div className="card-body">
          {activeTab === 'home' && (
            <div className="row">
              <div className="col-lg-8">
                <h2 className="mb-4 text-primary">Dashboard Overview</h2>
                <div className="card mb-4">
                  <div className="card-header bg-transparent">
                    <h5 className="mb-0">Recent Activity</h5>
                  </div>
                  <div className="card-body">
                    <div className="list-group list-group-flush">
                      {recentActivity.map(activity => (
                        <div key={activity.id} className="list-group-item d-flex justify-content-between align-items-center">
                          <div>
                            <span className="badge bg-primary me-2">{activity.action}</span>
                            {activity.item}
                          </div>
                          <small className="text-muted">{activity.time}</small>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header bg-transparent">
                    <h5 className="mb-0">Popular Videos</h5>
                  </div>
                  <div className="card-body">
                    {videos.slice(0, 3).map(video => (
                      <div key={video.id} className="d-flex align-items-center mb-3">
                        <div className="flex-shrink-0">
                          <div className="bg-light rounded p-2 text-center" style={{ width: '60px' }}>
                            <i className="bi bi-play-btn-fill text-primary"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="mb-0">{video.title}</h6>
                          <small className="text-muted">{video.views} views • {video.duration}</small>
                        </div>
                        <div className="flex-shrink-0">
                          {renderRatingStars(4.5)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card mb-4">
                  <div className="card-header bg-transparent">
                    <h5 className="mb-0">Quick Actions</h5>
                  </div>
                  <div className="card-body">
                    <div className="d-grid gap-2">
                      <button className="btn btn-primary mb-2">
                        <i className="bi bi-cloud-upload me-2"></i>Upload New Video
                      </button>
                      <button className="btn btn-outline-primary mb-2">
                        <i className="bi bi-plus-circle me-2"></i>Create Assignment
                      </button>
                      <button className="btn btn-outline-success mb-2">
                        <i className="bi bi-megaphone me-2"></i>Send Announcement
                      </button>
                      <button className="btn btn-outline-info mb-2">
                        <i className="bi bi-calendar-event me-2"></i>Schedule Meeting
                      </button>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header bg-transparent">
                    <h5 className="mb-0">Upcoming Events</h5>
                  </div>
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <div className="flex-shrink-0 bg-primary text-white rounded p-2 text-center" style={{ width: '40px' }}>
                        <strong>15</strong>
                        <div>Sep</div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h6 className="mb-0">Faculty Meeting</h6>
                        <small className="text-muted">10:00 AM - Conference Room</small>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 bg-success text-white rounded p-2 text-center" style={{ width: '40px' }}>
                        <strong>18</strong>
                        <div>Sep</div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h6 className="mb-0">Assignment Deadline</h6>
                        <small className="text-muted">11:59 PM - Calculus</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'videos' && (
            <>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="text-success mb-0">Video Library</h2>
                <button className="btn btn-primary" onClick={handleUploadVideo}>
                  <i className="bi bi-cloud-upload me-2"></i>Upload Video
                </button>
              </div>

              {videos.length > 0 ? (
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead className="table-light">
                      <tr>
                        <th>Title</th>
                        <th>Subject</th>
                        <th>Duration</th>
                        <th>Views</th>
                        <th>Upload Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {videos.map(video => (
                        <tr key={video.id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <i className="bi bi-play-btn-fill text-primary me-2"></i>
                              {video.title}
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-secondary">{video.subject}</span>
                          </td>
                          <td>{video.duration}</td>
                          <td>
                            <span className="badge bg-info">{video.views} views</span>
                          </td>
                          <td>{video.date}</td>
                          <td>
                            <div className="btn-group btn-group-sm">
                              <button className="btn btn-outline-primary">
                                <i className="bi bi-eye"></i>
                              </button>
                              <button className="btn btn-outline-secondary">
                                <i className="bi bi-pencil"></i>
                              </button>
                              <button className="btn btn-outline-danger" onClick={() => handleDeleteVideo(video.id)}>
                                <i className="bi bi-trash"></i>
                              </button>
                              <button className="btn btn-outline-success">
                                <i className="bi bi-bar-chart"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-5">
                  <i className="bi bi-camera-video-off display-4 text-muted mb-3"></i>
                  <p className="text-muted">You haven't uploaded any videos yet.</p>
                  <button className="btn btn-primary mt-2" onClick={handleUploadVideo}>
                    Upload Your First Video
                  </button>
                </div>
              )}
            </>
          )}

          {activeTab === 'students' && (
            <div className="row">
              <div className="col-md-8">
                <h2 className="mb-4 text-info">Student Management</h2>
                <div className="card mb-4">
                  <div className="card-header bg-transparent d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Student Roster</h5>
                    <div className="d-flex">
                      <input type="text" className="form-control form-control-sm me-2" placeholder="Search students..." />
                      <button className="btn btn-sm btn-outline-secondary me-2">
                        <i className="bi bi-filter"></i> Filter
                      </button>
                      <button className="btn btn-sm btn-primary">
                        <i className="bi bi-plus"></i> Add Student
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Progress</th>
                            <th>Last Active</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Alice Johnson</td>
                            <td>alice@example.com</td>
                            <td>
                              <div className="progress" style={{ height: '6px' }}>
                                <div className="progress-bar bg-success" style={{ width: '85%' }}></div>
                              </div>
                              <small>85% complete</small>
                            </td>
                            <td>Today</td>
                            <td>
                              <button className="btn btn-sm btn-outline-primary">
                                <i className="bi bi-envelope"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>Bob Smith</td>
                            <td>bob@example.com</td>
                            <td>
                              <div className="progress" style={{ height: '6px' }}>
                                <div className="progress-bar bg-warning" style={{ width: '60%' }}></div>
                              </div>
                              <small>60% complete</small>
                            </td>
                            <td>2 days ago</td>
                            <td>
                              <button className="btn btn-sm btn-outline-primary">
                                <i className="bi bi-envelope"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>Charlie Lee</td>
                            <td>charlie@example.com</td>
                            <td>
                              <div className="progress" style={{ height: '6px' }}>
                                <div className="progress-bar bg-danger" style={{ width: '30%' }}></div>
                              </div>
                              <small>30% complete</small>
                            </td>
                            <td>1 week ago</td>
                            <td>
                              <button className="btn btn-sm btn-outline-primary">
                                <i className="bi bi-envelope"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>Diana Patel</td>
                            <td>diana@example.com</td>
                            <td>
                              <div className="progress" style={{ height: '6px' }}>
                                <div className="progress-bar bg-success" style={{ width: '95%' }}></div>
                              </div>
                              <small>95% complete</small>
                            </td>
                            <td>Today</td>
                            <td>
                              <button className="btn btn-sm btn-outline-primary">
                                <i className="bi bi-envelope"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header bg-transparent">
                    <h5 className="mb-0">Class Statistics</h5>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <h6>Overall Progress</h6>
                      <div className="progress mb-2" style={{ height: '10px' }}>
                        <div className="progress-bar bg-success" style={{ width: '67%' }}></div>
                      </div>
                      <small>67% average completion</small>
                    </div>
                    <div className="mb-3">
                      <h6>Assignment Submission Rate</h6>
                      <div className="progress mb-2" style={{ height: '10px' }}>
                        <div className="progress-bar bg-info" style={{ width: '82%' }}></div>
                      </div>
                      <small>82% of assignments submitted</small>
                    </div>
                    <div>
                      <h6>Average Score</h6>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <div className="progress mb-2" style={{ height: '10px' }}>
                            <div className="progress-bar bg-warning" style={{ width: '76%' }}></div>
                          </div>
                        </div>
                        <div className="flex-shrink-0 ms-2">
                          <strong>76%</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div>
              <h2 className="mb-4 text-purple">Analytics Dashboard</h2>
              <div className="row mb-4">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header bg-transparent">
                      <h5 className="mb-0">Video Performance</h5>
                    </div>
                    <div className="card-body">
                      <p className="text-muted">Engagement metrics for your video content</p>
                      {/* Placeholder for chart */}
                      <div className="text-center py-4 bg-light rounded">
                        <i className="bi bi-bar-chart display-4 text-muted"></i>
                        <p className="mt-2">Video performance chart would appear here</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header bg-transparent">
                      <h5 className="mb-0">Student Engagement</h5>
                    </div>
                    <div className="card-body">
                      <p className="text-muted">How students are interacting with your content</p>
                      {/* Placeholder for chart */}
                      <div className="text-center py-4 bg-light rounded">
                        <i className="bi bi-pie-chart display-4 text-muted"></i>
                        <p className="mt-2">Engagement metrics would appear here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="row">
              <div className="col-lg-4">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    <img src="https://via.placeholder.com/150" className="rounded-circle img-fluid" style={{ width: '150px' }} alt="Profile" />
                    <h5 className="my-3">{teacher?.name || "Teacher Name"}</h5>
                    <p className="text-muted mb-1">{teacher?.department || "Department"}</p>
                    <p className="text-muted mb-4">{teacher?.email || "email@example.com"}</p>
                    <div className="d-flex justify-content-center mb-2">
                      <button type="button" className="btn btn-primary">Edit Profile</button>
                      <button type="button" className="btn btn-outline-primary ms-1">Change Photo</button>
                    </div>
                    {/* Add Back to Profile button */}
                    <button
                      type="button"
                      className="btn btn-outline-secondary mt-3"
                      onClick={typeof onLogout === 'function' ? onLogout : undefined}
                    >
                      <i className="bi bi-arrow-left me-2"></i>
                      Back to Student
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Full Name</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{teacher?.name || "Teacher Name"}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{teacher?.email || "email@example.com"}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Department</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{teacher?.department || "Department"}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Joined</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">January 15, 2022</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Bio</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          Experienced educator with a passion for innovative teaching methods and student success.
                          Specializing in creating engaging learning experiences.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App