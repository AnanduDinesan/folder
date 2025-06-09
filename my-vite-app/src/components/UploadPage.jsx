import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styling/UploadPage.css';

const UploadNotes = () => {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/subjects') // your backend endpoint
      .then(res => setSubjects(res.data))
      .catch(err => console.error('Error fetching subjects:', err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedSubject || !file) {
      setMessage('Please select a subject and choose a file.');
      return;
    }

    const formData = new FormData();
    formData.append('subjectId', selectedSubject);
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/upload-note', formData);
      setMessage(response.data.message || 'Upload successful!');
    } catch (err) {
      console.error(err);
      setMessage('Upload failed.');
    }
  };

  return (
    <div className="upload-container">
      <form className="upload-form" onSubmit={handleSubmit}>
        <h2>Upload Notes</h2>

        <label htmlFor="subject">Subject:</label>
        <select
          id="subject"
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          <option value="">-- Select a subject --</option>
          {subjects.map((subj) => (
            <option key={subj.id} value={subj.id}>{subj.name}</option>
          ))}
        </select>

        <label htmlFor="file">Choose PDF:</label>
        <input
          id="file"
          type="file"
          accept="application/pdf"
          multiple
          onChange={(e) => setFile(e.target.files)}
        />

        <button type="submit">Upload</button>

        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default UploadNotes;
