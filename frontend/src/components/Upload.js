import React, { useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const Upload = () => {
  const [file, setFile] = useState(null);
  const { getAccessTokenSilently } = useAuth0();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) return;

    const token = await getAccessTokenSilently();
    const formData = new FormData();
    formData.append('photo', file);

    try {
      await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });
      alert('File uploaded and compressed');
    } catch (error) {
      console.error(error);
      alert('File upload failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default Upload;
