import React from 'react';
import ReactDOM from 'react-dom/client';
import './elibrary.css';

// BookCard component for individual book entries
const BookCard = ({ category, title, author, price }) => {
  return (
    <div className="book-card">
      <div className="category">{category}</div>
      <h3 className="book-title">{title}</h3>
      <p className="author">by {author}</p>
      <div className="actions">
        <button className="action-btn">Read Now</button>
        <button className="action-btn">Borrow</button>
        <button className="action-btn">Details</button>
        <button className="action-btn buy-now">Buy Now {price}</button>
      </div>
    </div>
  );
};

// Main App component
const App = () => {
  const featuredBooks = [
    { category: 'Technology', title: 'Introduction to AI', author: 'John Smith', price: '₹320' },
    { category: 'Cybersecurity', title: 'Cybersecurity Basics', author: 'Dr. Albert', price: '₹450' },
    { category: 'Literature', title: 'World Classics', author: 'Emily Brontë', price: '₹580' },
    { category: 'Computer Science', title: 'Data Structures & Algorithms', author: 'Mark Lee', price: '₹230' },
    { category: 'Business', title: 'Leadership & Strategy', author: 'Anna Roberts', price: '₹300' },
    { category: 'Mathematics', title: 'Statistics Made Simple', author: 'Prof. Alan', price: '₹350' },
    { category: 'Programming', title: 'Mastering JavaScript', author: 'James Carter', price: '₹450' },
    { category: 'Modern Technologies', title: 'Evolution of Technology', author: 'Dr. Meera Singh', price: '₹200' },
    { category: 'Arts', title: 'Modern Art & Creativity', author: 'Olivia Brown', price: '₹350' },
    { category: 'Cloud', title: 'Cloud Computing — Practical Guide', author: 'Steve Harris', price: '₹570' },
  ];

  const newArrivals = [
    { category: 'Business', title: 'Startup Culture', author: 'Elon Parker', price: '₹400' },
    { category: 'Computer Science', title: 'Computer Architecture and Science', author: 'Sarah Johnson', price: '₹320' },
    { category: 'Programming', title: 'Complete Python Guide', author: 'James Carter', price: '₹450' },
    { category: 'UI/UX Design', title: 'More on UI/UX Design', author: 'Neil Clark', price: '₹570' },
    { category: 'Software Ethics', title: 'Software Engineering Ethics', author: 'Emily Stone', price: '₹200' },
    { category: 'AI & ML', title: 'Machine Learning Basics', author: 'Andrew Tan', price: '₹640' },
    { category: 'Economics', title: 'Global Economy', author: 'Dr. Robert Lee', price: '₹550' },
    { category: 'Mathematics', title: 'Advanced Calculus', author: 'Prof. Alan', price: '₹400' },
    { category: 'Security', title: 'Cybersecurity Essentials', author: 'David White', price: '₹300' },
    { category: 'Networking', title: 'Computer Networking', author: 'Dr. Rachel Kim', price: '₹400' },
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>eLibrary</h1>
        <p>Read • Learn • Grow — A clean, professional library experience</p>
      </header>

      <div className="search-bar">
        <input type="text" placeholder="Search" className="search-input" />
      </div>

      <section className="section">
        <h2>Featured Books</h2>
        <div className="book-grid">
          {featuredBooks.map((book, index) => (
            <BookCard
              key={index}
              category={book.category}
              title={book.title}
              author={book.author}
              price={book.price}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>New Arrivals</h2>
        <div className="book-grid">
          {newArrivals.map((book, index) => (
            <BookCard
              key={index}
              category={book.category}
              title={book.title}
              author={book.author}
              price={book.price}
            />
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 eLibrary. All rights reserved.</p>
      </footer>
    </div>
  );
};



const Elibrary = App; // Rename for clarity

export default Elibrary;