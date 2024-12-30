// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Admin = () => {
//   const [companies, setCompanies] = useState([]);
//   const [newCompany, setNewCompany] = useState("");
//   const [methods, setMethods] = useState(["LinkedIn Post", "Email", "Phone Call"]);
//   const [newMethod, setNewMethod] = useState("");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const addCompany = () => {
//     if (newCompany.trim()) {
//       setCompanies([...companies, newCompany]);
//       setNewCompany("");
//     }
//   };

//   const addMethod = () => {
//     if (newMethod.trim()) {
//       setMethods([...methods, newMethod]);
//       setNewMethod("");
//     }
//   };

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <div
//       style={{
//         fontFamily: "Arial, sans-serif",
//         backgroundColor: "#f8f9fa",
//         minHeight: "100vh",
//         padding: "20px",
//         color: "#212529",
//       }}
//     >
//       {/* Header */}
//       <header
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           backgroundColor: "#007bff",
//           padding: "10px 20px",
//           borderRadius: "8px",
//           color: "#ffffff",
//           marginBottom: "30px",
//           boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Admin Panel</h1>
//         <button
//           onClick={toggleMenu}
//           style={{
//             backgroundColor: "#0056b3",
//             color: "#ffffff",
//             border: "none",
//             padding: "10px 15px",
//             borderRadius: "5px",
//             cursor: "pointer",
//             fontSize: "16px",
//           }}
//         >
//           ☰ Menu
//         </button>
//       </header>

//       {/* Dropdown Menu */}
//       {menuOpen && (
//         <div
//           style={{
//             position: "absolute",
//             top: "70px",
//             right: "20px",
//             backgroundColor: "#ffffff",
//             border: "1px solid #ddd",
//             borderRadius: "8px",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//             zIndex: 1000,
//           }}
//         >
//           <ul style={{ listStyle: "none", margin: 0, padding: "10px" }}>
//             {["Home", "Dashboard", "Profile", "Settings", "Logout"].map((item) => (
//               <li
//                 key={item}
//                 style={{
//                   margin: "5px 0",
//                   padding: "10px 15px",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => navigate(`/${item.toLowerCase()}`)}
//               >
//                 <Link
//                   to={`/${item.toLowerCase()}`}
//                   style={{
//                     textDecoration: "none",
//                     color: "#007bff",
//                     fontSize: "16px",
//                     display: "block",
//                   }}
//                 >
//                   {item}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Content */}
//       <main>
//         {/* Manage Companies */}
//         <section
//           style={{
//             backgroundColor: "#ffffff",
//             padding: "20px",
//             borderRadius: "8px",
//             marginBottom: "30px",
//             boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <h2 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "15px", color: "#007bff" }}>
//             Manage Companies
//           </h2>
//           <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
//             <input
//               type="text"
//               placeholder="Enter a company name..."
//               value={newCompany}
//               onChange={(e) => setNewCompany(e.target.value)}
//               style={{
//                 flex: 1,
//                 padding: "10px",
//                 border: "1px solid #ddd",
//                 borderRadius: "5px",
//                 marginRight: "10px",
//                 fontSize: "16px",
//               }}
//             />
//             <button
//               onClick={addCompany}
//               style={{
//                 backgroundColor: "#007bff",
//                 color: "#ffffff",
//                 border: "none",
//                 padding: "10px 15px",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 fontSize: "16px",
//               }}
//             >
//               Add
//             </button>
//           </div>
//           <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
//             {companies.map((company, index) => (
//               <li
//                 key={index}
//                 style={{
//                   backgroundColor: "#f8f9fa",
//                   padding: "10px 15px",
//                   borderRadius: "5px",
//                   marginBottom: "10px",
//                   fontSize: "16px",
//                   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//                 }}
//               >
//                 🏢 {company}
//               </li>
//             ))}
//           </ul>
//         </section>

//         {/* Manage Communication Methods */}
//         <section
//           style={{
//             backgroundColor: "#ffffff",
//             padding: "20px",
//             borderRadius: "8px",
//             boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <h2 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "15px", color: "#007bff" }}>
//             Communication Methods
//           </h2>
//           <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
//             <input
//               type="text"
//               placeholder="Enter a method..."
//               value={newMethod}
//               onChange={(e) => setNewMethod(e.target.value)}
//               style={{
//                 flex: 1,
//                 padding: "10px",
//                 border: "1px solid #ddd",
//                 borderRadius: "5px",
//                 marginRight: "10px",
//                 fontSize: "16px",
//               }}
//             />
//             <button
//               onClick={addMethod}
//               style={{
//                 backgroundColor: "#007bff",
//                 color: "#ffffff",
//                 border: "none",
//                 padding: "10px 15px",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 fontSize: "16px",
//               }}
//             >
//               Add
//             </button>
//           </div>
//           <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
//             {methods.map((method, index) => (
//               <li
//                 key={index}
//                 style={{
//                   backgroundColor: "#f8f9fa",
//                   padding: "10px 15px",
//                   borderRadius: "5px",
//                   marginBottom: "10px",
//                   fontSize: "16px",
//                   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//                 }}
//               >
//                 📢 {method}
//               </li>
//             ))}
//           </ul>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Admin;






import React, { useState } from "react"; 
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState("");
  const [methods, setMethods] = useState(["LinkedIn Post", "Email", "Phone Call"]);
  const [newMethod, setNewMethod] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Add a new company
  const addCompany = () => {
    if (newCompany.trim()) {
      setCompanies([...companies, newCompany]);
      setNewCompany("");
    }
  };

  // Add a new communication method
  const addMethod = () => {
    if (newMethod.trim()) {
      setMethods([...methods, newMethod]);
      setNewMethod("");
    }
  };

  // Toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif", color: "#333", backgroundColor: "#f9f9f9" }}>
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          backgroundColor: "#007bff", // Blue color
          color: "white",
          border: "none",
          padding: "10px 15px",
          borderRadius: "5px",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        ☰ Menu
      </button>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div
          style={{
            marginTop: "10px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            borderRadius: "5px",
            padding: "10px",
            position: "absolute",
            top: "60px",
            right: "20px",
            zIndex: 1000,
          }}
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ margin: "10px 0" }}>
              <Link
                to="/"
                style={{
                  display: "block",
                  padding: "8px 16px",
                  textDecoration: "none",
                  color: "#000",
                  borderRadius: "3px",
                  marginBottom: "8px",
                  fontSize: "16px",
                  backgroundColor: "#f0f0f0",
                }}
              >
                Home
              </Link>
            </li>
            <li style={{ margin: "10px 0" }}>
              <Link
                to="/dashboard"
                style={{
                  display: "block",
                  padding: "8px 16px",
                  textDecoration: "none",
                  color: "#000",
                  borderRadius: "3px",
                  marginBottom: "8px",
                  fontSize: "16px",
                  backgroundColor: "#f0f0f0",
                }}
              >
                Dashboard
              </Link>
            </li>
            <li style={{ margin: "10px 0" }}>
              <Link
                to="/profile"
                style={{
                  display: "block",
                  padding: "8px 16px",
                  textDecoration: "none",
                  color: "#007bff", // Blue color for profile
                  borderRadius: "3px",
                  marginBottom: "8px",
                  fontSize: "16px",
                  backgroundColor: "#f0f0f0",
                }}
              >
                Profile
              </Link>
            </li>
            <li style={{ margin: "10px 0" }}>
              <Link
                to="/settings"
                style={{
                  display: "block",
                  padding: "8px 16px",
                  textDecoration: "none",
                  color: "#007bff", // Blue color for settings
                  borderRadius: "3px",
                  marginBottom: "8px",
                  fontSize: "16px",
                  backgroundColor: "#f0f0f0",
                }}
              >
                Settings
              </Link>
            </li>
            <li style={{ margin: "10px 0" }}>
              <Link
                to="/logout"
                style={{
                  display: "block",
                  padding: "8px 16px",
                  textDecoration: "none",
                  color: "#007bff", // Blue color for logout
                  borderRadius: "3px",
                  marginBottom: "8px",
                  fontSize: "16px",
                  backgroundColor: "#f0f0f0",
                }}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      )}

<h1
  style={{
    color: "white", // Blue color, same as profile link
    textAlign: "center",
    fontSize: "36px", // You can adjust this size if needed
    fontWeight: "bold",
    marginBottom: "20px", // Adding margin for spacing
    backgroundColor: "blue", // Background color to match profile link style
    padding: "10px 20px", // Add some padding for a button-like feel
    borderRadius: "5px", // Rounded corners like the profile link
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Adding box shadow for a clean look
  }}
>
  🌟 Admin Panel 🌟
</h1>


      {/* Company Management */}
      <section style={{ margin: "40px 0", backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
        <h2 style={{ color: "#007bff", fontSize: "28px", marginBottom: "20px" }}>Manage Companies</h2>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Enter a company name..."
            value={newCompany}
            onChange={(e) => setNewCompany(e.target.value)}
            style={{
              padding: "10px",
              border: "2px solid #007bff", // Blue border color
              borderRadius: "5px",
              marginRight: "15px",
              width: "300px",
            }}
          />
          <button
            onClick={addCompany}
            style={{
              backgroundColor: "#007bff", // Blue color
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "5px",
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            ➕ Add Company
          </button>
        </div>
        <ul style={{ padding: 0 }}>
          {companies.map((company, index) => (
            <li
              key={index}
              style={{
                listStyle: "none",
                padding: "15px",
                margin: "10px 0",
                backgroundColor: "#f1f1f1",
                borderRadius: "5px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                fontSize: "18px",
              }}
            >
              🏢 {company}
            </li>
          ))}
        </ul>
      </section>

      {/* Communication Methods Management */}
      <section style={{ margin: "40px 0", backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
        <h2 style={{ color: "#007bff", fontSize: "28px", marginBottom: "20px" }}>Communication Methods</h2>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Enter a method..."
            value={newMethod}
            onChange={(e) => setNewMethod(e.target.value)}
            style={{
              padding: "10px",
              border: "2px solid #007bff", // Blue border color
              borderRadius: "5px",
              marginRight: "15px",
              width: "300px",
            }}
          />
          <button
            onClick={addMethod}
            style={{
              backgroundColor: "#007bff", // Blue color
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "5px",
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            ➕ Add Method
          </button>
        </div>
        <ul style={{ padding: 0 }}>
          {methods.map((method, index) => (
            <li
              key={index}
              style={{
                listStyle: "none",
                padding: "15px",
                margin: "10px 0",
                backgroundColor: "#f1f1f1",
                borderRadius: "5px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                fontSize: "18px",
              }}
            >
              📢 {method}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Admin;
