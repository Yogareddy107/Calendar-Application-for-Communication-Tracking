import React, { useState, useEffect } from "react";
import MenuButton from "../components/MenuButton"; // Assuming MenuButton component is correctly imported

const Settings = () => {
  // State for settings
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || "light"); // Save theme in localStorage
  const [profileVisibility, setProfileVisibility] = useState("Public");

  // Handle theme change
  const handleThemeChange = (event) => {
    const newTheme = event.target.value;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save theme to localStorage
    document.body.setAttribute('data-theme', newTheme); // Apply theme to body
  };

  // Handle notification toggle
  const handleNotificationToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  // Handle profile visibility
  const handleProfileVisibilityChange = (visibility) => {
    setProfileVisibility(visibility);
  };

  // Apply the saved theme on page load
  useEffect(() => {
    // Apply theme to body when page loads
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Menu Button in Top Right Corner */}
      <MenuButton />

      {/* Settings Header */}
      <div
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "20px",
          textAlign: "center",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ margin: 0 }}>Settings</h1>
      </div>

      {/* Settings Content */}
      <div
        style={{
          backgroundColor: "#f4f7fa",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Account Settings */}
        <h3 style={{ color: "#333" }}>Account Settings</h3>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Notifications:
          </label>
          <label
            style={{
              marginRight: "10px",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            {notificationsEnabled ? "Enabled" : "Disabled"}
          </label>
          <button
            onClick={handleNotificationToggle}
            style={{
              backgroundColor: notificationsEnabled ? "#28a745" : "#dc3545",
              color: "white",
              padding: "8px 15px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {notificationsEnabled ? "Disable" : "Enable"}
          </button>
        </div>

        {/* Theme Settings */}
        <h3 style={{ color: "#333" }}>Appearance</h3>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Theme:
          </label>
          <select
            value={theme}
            onChange={handleThemeChange}
            style={{
              padding: "8px 15px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        {/* Profile Visibility Settings */}
        <h3 style={{ color: "#333" }}>Privacy Settings</h3>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Profile Visibility:
          </label>
          <div>
            <button
              onClick={() => handleProfileVisibilityChange("Public")}
              style={{
                backgroundColor: profileVisibility === "Public" ? "#007bff" : "#f0f0f0",
                color: profileVisibility === "Public" ? "white" : "#007bff",
                padding: "8px 15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Public
            </button>
            <button
              onClick={() => handleProfileVisibilityChange("Private")}
              style={{
                backgroundColor: profileVisibility === "Private" ? "#007bff" : "#f0f0f0",
                color: profileVisibility === "Private" ? "white" : "#007bff",
                padding: "8px 15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Private
            </button>
          </div>
        </div>

        {/* Save Changes */}
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "12px 20px",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={() => alert("Settings saved!")}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
