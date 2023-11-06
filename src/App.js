// import React from 'react';
// import './styles/App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Welcome to My App</h1>
//       <p>This is the main content of the application.</p>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import AdminPanel from './components/AdminPanel';
import UserProfile from './components/UserProfile';
import UserList from './components/UserList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </Router>
  );
}

export default App;
