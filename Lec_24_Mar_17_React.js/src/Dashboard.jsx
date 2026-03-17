import React from "react";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard Loaded</h2>

      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        alt="Large Landscape"
        style={{ width: "100%",height:'20rem' }}
      />

      <p>
        This is a large image that simulates heavy content loading inside the
        Dashboard component.
      </p>
    </div>
  );
}

export default Dashboard;