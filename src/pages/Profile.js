import React, { useState } from "react";
import MenuButton from "../components/MenuButton"; // Assuming MenuButton component is correctly imported

const Profile = () => {
  // Initial state for the profile details
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Admin",
  });

  // State to toggle between view and edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Handle change in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  // Toggle editing mode
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  // Save the changes (Here just toggling off the editing for now)
  const handleSaveClick = () => {
    setIsEditing(false);
    alert("Profile updated!");
    // In a real-world scenario, you would also send this updated data to a backend server
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Menu Button in Top Right Corner */}
      <MenuButton />

      {/* Profile Header */}
      <div style={{
        backgroundColor: "#007bff", 
        color: "white", 
        padding: "20px", 
        textAlign: "center", 
        borderRadius: "5px", 
        marginBottom: "20px"
      }}>
        <h1 style={{ margin: 0 }}>Your Profile</h1>
      </div>

      {/* Profile Content */}
      <div style={{ padding: "40px", backgroundColor: "#f4f7fa", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <div style={{ fontSize: "18px", color: "#333", marginBottom: "20px" }}>
          {isEditing ? (
            <>
              <h3>Edit Profile</h3>
              <div>
                <label style={{ display: "block", marginBottom: "10px" }}>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleInputChange}
                  style={{
                    padding: "8px",
                    width: "100%",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    marginBottom: "20px"
                  }}
                />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "10px" }}>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                  style={{
                    padding: "8px",
                    width: "100%",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    marginBottom: "20px"
                  }}
                />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "10px" }}>Role:</label>
                <input
                  type="text"
                  name="role"
                  value={profileData.role}
                  onChange={handleInputChange}
                  style={{
                    padding: "8px",
                    width: "100%",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    marginBottom: "20px"
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <h3>Personal Information</h3>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li><strong>Name:</strong> {profileData.name}</li>
                <li><strong>Email:</strong> {profileData.email}</li>
                <li><strong>Role:</strong> {profileData.role}</li>
              </ul>
            </>
          )}
        </div>

        <div style={{ textAlign: "center" }}>
          {isEditing ? (
            <>
              <button
                onClick={handleSaveClick}
                style={{
                  backgroundColor: "#28a745",
                  color: "white",
                  padding: "12px 20px",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "16px",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              >
                Save Changes
              </button>
              <button
                onClick={handleEditClick}
                style={{
                  backgroundColor: "#dc3545",
                  color: "white",
                  padding: "12px 20px",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={handleEditClick}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "12px 20px",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

