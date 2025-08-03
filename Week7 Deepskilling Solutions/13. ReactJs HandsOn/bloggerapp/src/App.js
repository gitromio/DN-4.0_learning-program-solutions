
import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [view, setView] = useState('books'); // 'books' | 'blogs' | 'courses'

  const renderView = () => {
    if (view === 'books') return <BookDetails />;
    if (view === 'blogs') return <BlogDetails />;
    if (view === 'courses') return <CourseDetails />;
  };

  return (
    <div className="App">
      <h1>Blogger App</h1>

      <button onClick={() => setView('books')}>Show Books</button>
      <button onClick={() => setView('blogs')}>Show Blogs</button>
      <button onClick={() => setView('courses')}>Show Courses</button>

      <hr />

      {renderView()}
    </div>
  );
}

export default App;
