import React, { useState } from "react";

function CreatePlaylist() {
  const [playlistName, setPlaylistName] = useState("");

  const create = () => {
    let currentPlaylist = localStorage.getItem("allPlaylist");

    // Check if allPlaylist is not already present in localStorage
    if (currentPlaylist) {
      currentPlaylist = JSON.parse(currentPlaylist);
    } else {
      currentPlaylist = {};
    }

    // Add new empty playlist with given name
    currentPlaylist[playlistName] = [];

    // Update localStorage with the new playlist
    localStorage.setItem("allPlaylist", JSON.stringify(currentPlaylist));
  };

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            New Playlist
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
          />
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button
            onClick={create}
            type="button"
            className="btn btn-primary"
            data-bs-dismiss="modal" // Ensure modal closes after creation
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePlaylist;
