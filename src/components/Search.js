
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Search() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (username.trim() !== '') {
      navigate(`/user/${username}`);
    }
  };

  return (
    <div className='container'>
      <div className='centeredDiv'>
        <form className='SearchForm' onSubmit={handleFormSubmit}>
          <label className='SearchLabel'><h2>GitHub Finder</h2></label>
          <input placeholder='Profile' value={username} onChange={handleChange} />
          <button className='SearchBttn' type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
