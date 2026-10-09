
import React, { useState } from 'react';
import axios from 'axios';

function AddPlaylist() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
          title: name,
          body: description
        }
      );

      if (response.status === 201) {
        setMessage('Playlist added successfully!');
        setName('');
        setDescription('');
      }
    } catch (error) {
      setMessage('Failed to add playlist.');
    }
  };

  return (
    <div>
      <h2>Add Playlist</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Playlist Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <br /><br />

        <textarea
          placeholder="Playlist Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Add Playlist</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default AddPlaylist;
