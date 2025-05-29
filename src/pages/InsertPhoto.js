import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input, Button, Select } from '../components/StyledComponents';

function InsertPhoto({ setUserPhotos }) {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState('Other');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setFile(selectedFile);
    } else {
      alert('Please select an image file');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !file) return alert('Title and image are required');

    // Convert file to base64
    const reader = new FileReader();
    reader.onloadend = () => {
      const newPhoto = {
        id: Date.now(),
        title,
        url: reader.result, // Base64 string
        category,
      };
      setUserPhotos((prev) => [...prev, newPhoto]);
      navigate('/');
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h2>Upload Photo</h2>
      <Input
        type="text"
        placeholder="Photo Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input type="file" accept="image/*" onChange={handleFileChange} />
      <Select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Nature">Nature</option>
        <option value="People">People</option>
        <option value="Other">Other</option>
      </Select>
      <Button onClick={handleSubmit}>Upload</Button>
      <Link to="/">
        <Button>Cancel</Button>
      </Link>
    </div>
  );
}

export default InsertPhoto;