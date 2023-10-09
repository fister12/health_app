import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import ActionButton1 from './components/ActionButton1';
import AccountBar from './components/AccountBar'; // Import the AccountBar component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <AccountBar /> {/* Add the AccountBar component */}
        <Routes>
          <Route path="/courses" element={<Courses />} />
          <Route path="/kits" element={<Kits />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Landing />
      <ActionButton1 />
    </>
  );
}

function Courses() {
  // Content for the Courses page
  return (
    <>
      <div>Courses Page</div>
      <div>This is a course page about the courses we offer and the complementary kits</div>
    </>
  );
}

function Kits() {
  // Content for the Kits page
  return (
    <>
      <div>Kits Page</div>
    </>
  );
}

export default App;

