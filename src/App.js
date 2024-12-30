// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Admin from "./pages/Admin";
// import Dashboard from "./pages/Dashboard";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Admin />} /> {/* Admin as default */}
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Logout from './pages/Logout';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />

       
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;








// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Importing your components
// import Admin from "./pages/Admin";
// import Dashboard from "./pages/Dashboard";
// import ReportingModule from "./pages/ReportingModule"; // Import the reporting module
// import HomePage from "./pages/HomePage"; // Import HomePage component
// import ProfilePage from "./pages/ProfilePage"; // Import ProfilePage component
// import SettingsPage from "./pages/SettingsPage"; // Import SettingsPage component

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Define all your routes here */}
//         <Route path="/" element={<Admin />} /> {/* Admin module */}
//         <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard */}
//         <Route path="/reporting" element={<ReportingModule />} /> {/* Reporting Module */}
//         <Route path="/home" element={<HomePage />} /> {/* Home Page */}
//         <Route path="/profile" element={<ProfilePage />} /> {/* Profile Page */}
//         <Route path="/settings" element={<SettingsPage />} /> {/* Settings Page */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

